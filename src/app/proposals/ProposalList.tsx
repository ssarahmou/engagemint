// components/ProposalList.tsx
interface Proposal {
    text: string;
    votes: {
      yes: number;
      no: number;
    };
  }
  
  interface ProposalListProps {
    proposals: Proposal[];
    onVote: (index: number, voteType: 'yes' | 'no') => void;
  }
  
  const ProposalList: React.FC<ProposalListProps> = ({ proposals, onVote }) => {
    return (
      <div>
        {proposals.map((proposal, index) => (
          <div key={index} className="flex items-center justify-between border p-4 mb-2">
            <span>{proposal.text}</span>
            <div>
              <button
                onClick={() => onVote(index, 'yes')}
                className="bg-green-500 text-white rounded px-2 py-1 mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => onVote(index, 'no')}
                className="bg-red-500 text-white rounded px-2 py-1"
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProposalList;
  