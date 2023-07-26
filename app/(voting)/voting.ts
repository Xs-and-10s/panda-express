"use server";

const votes = {
  barbie: 3,
  oppenheimer: 5,
  sof: 0,
};

export const getVotes = async () => await votes;

export const vote = async (language: keyof typeof votes) => {
  votes[language] += 1;
  votes.sof += Math.floor(
    (votes.barbie * Math.random() + votes.oppenheimer * Math.random()) / 2
  );
  return await votes;
};
