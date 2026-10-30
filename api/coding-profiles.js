const LEETCODE_QUERY = `query userProblemsSolved($username: String!) {
  matchedUser(username: $username) {
    submitStatsGlobal { acSubmissionNum { difficulty count } }
  }
}`;

const countFor = (submissions, difficulty) =>
  submissions.find((item) => item.difficulty === difficulty)?.count ?? 0;

export default async function handler(_request, response) {
  try {
    const results = await Promise.allSettled([
      fetch('https://leetcode.com/graphql/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Referer': 'https://leetcode.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
        body: JSON.stringify({ query: LEETCODE_QUERY, variables: { username: 'anshuxdev' } }),
      }).then((r) => r.json()),
      fetch('https://www.codechef.com/users/anshuxdev', {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      }).then((r) => r.text()),
      fetch('https://www.geeksforgeeks.org/profile/anshuxdev', {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      }).then((r) => r.text()),
    ]);

    let leetcodeStats = { total: 112, easy: 73, medium: 37, hard: 2 };
    let codechefSolved = 326;
    let gfgSolved = 40;

    if (results[0].status === 'fulfilled') {
      const submissions = results[0].value?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
      if (Array.isArray(submissions)) {
        leetcodeStats = {
          total: countFor(submissions, 'All'),
          easy: countFor(submissions, 'Easy'),
          medium: countFor(submissions, 'Medium'),
          hard: countFor(submissions, 'Hard'),
        };
      }
    }

    if (results[1].status === 'fulfilled') {
      const match = results[1].value.match(/Total Problems Solved:\s*(\d+)/i);
      const parsed = match ? Number(match[1]) : NaN;
      if (Number.isFinite(parsed)) codechefSolved = parsed;
    }

    if (results[2].status === 'fulfilled') {
      const match = results[2].value.match(/total_problems_solved\\?"\s*:\s*(\d+)/i);
      const parsed = match ? Number(match[1]) : NaN;
      if (Number.isFinite(parsed)) gfgSolved = parsed;
    }

    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    response.status(200).json({
      leetcode: leetcodeStats,
      codechef: codechefSolved,
      geeksforgeeks: gfgSolved,
    });
  } catch {
    response.status(200).json({
      leetcode: { total: 112, easy: 73, medium: 37, hard: 2 },
      codechef: 326,
      geeksforgeeks: 40,
    });
  }
}
