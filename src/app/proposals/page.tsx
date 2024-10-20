// pages/index.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import ProposalForm from './ProposalForm';
import ProposalList from './ProposalList';

interface Proposal {
  text: string;
  votes: {
    yes: number;
    no: number;
  };
}

const Home: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);

  const addProposal = (proposalText: string) => {
    setProposals([...proposals, { text: proposalText, votes: { yes: 0, no: 0 } }]);
  };

  const handleVote = (index: number, voteType: 'yes' | 'no') => {
    const newProposals = [...proposals];
    newProposals[index].votes[voteType]++;
    setProposals(newProposals);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Engagemint
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Voting App</h1>
        <ProposalForm onAddProposal={addProposal} />
        <ProposalList proposals={proposals} onVote={handleVote} />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          {proposals.map((proposal, index) => (
            <div key={index} className="flex justify-between border p-2 mb-2">
              <span>{proposal.text}</span>
              <span>
                Yes: {proposal.votes.yes} | No: {proposal.votes.no}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
