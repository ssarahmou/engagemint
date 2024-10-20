import React from "react";

interface Proposal {
  id: number;
  text: string;
  votes: {
    yes: number;
    no: number;
  };
}

interface ProposalListProps {
  proposals: Proposal[];
  onVote: (id: number, voteType: "yes" | "no") => void;
  votedProposals: Record<number, boolean>;
}

const ProposalList: React.FC<ProposalListProps> = ({
  proposals,
  onVote,
  votedProposals,
}) => {
  const calculatePercentage = (yes: number, no: number) => {
    const total = yes + no;
    if (total === 0) return 50; // Default to 50% if no votes
    return (yes / total) * 100;
  };

  return (
    <ul className="space-y-4">
      {proposals.map((proposal) => {
        const yesPercentage = calculatePercentage(
          proposal.votes.yes,
          proposal.votes.no,
        );
        const hasVoted = votedProposals[proposal.id];

        return (
          <li key={proposal.id} className="border p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">{proposal.text}</p>
            <div className="mb-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${yesPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <button
                  onClick={() => onVote(proposal.id, "yes")}
                  disabled={hasVoted}
                  className={`px-3 py-1 rounded ${
                    hasVoted ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  Yes ({proposal.votes.yes})
                </button>
                <button
                  onClick={() => onVote(proposal.id, "no")}
                  disabled={hasVoted}
                  className={`px-3 py-1 rounded ${
                    hasVoted ? "bg-gray-300" : "bg-red-500 hover:bg-red-600"
                  } text-white`}
                >
                  No ({proposal.votes.no})
                </button>
              </div>
              <div className="text-sm">
                Yes: {yesPercentage.toFixed(1)}% | No:{" "}
                {(100 - yesPercentage).toFixed(1)}%
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProposalList;
