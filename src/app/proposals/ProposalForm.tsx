import React, { useState } from 'react';

interface ProposalFormProps {
  onAddProposal: (proposalText: string) => void;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ onAddProposal }) => {
  const [proposalText, setProposalText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (proposalText.trim()) {
      onAddProposal(proposalText);
      setProposalText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={proposalText}
        onChange={(e) => setProposalText(e.target.value)}
        placeholder="Enter your proposal"
        className="border rounded px-4 py-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Create Proposal
      </button>
    </form>
  );
};

export default ProposalForm;