// components/ProposalForm.tsx
import { useState } from 'react';

interface ProposalFormProps {
  onAddProposal: (proposalText: string) => void;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ onAddProposal }) => {
  const [proposal, setProposal] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (proposal.trim()) {
      onAddProposal(proposal);
      setProposal('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        placeholder="Enter your proposal"
        className="border rounded px-4 py-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Create Proposal
      </button>
    </form>
  );
};

export default ProposalForm;
