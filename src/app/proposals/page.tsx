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
    <div className="flex min-h-screen">
      {/* Navigation Bar */}
      <div className="w-[400px] h-screen flex flex-col border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 overflow-y-auto">
        <div className="font-semibold text-2xl mb-12">
          <Link href="/" className="text-2xl font-bold">
            Engagemint
          </Link>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Collection</div>
        <div className="font-semibold text-black mt-5 text-2xl bg-[#FAF7FC] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">
          <Link href="/proposals" className="hover:underline font-semibold">
            Proposals
          </Link>
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100 mb-20">Notifications</div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Profile</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">Settings</div>
      </div>
      

      {/* Main Content */}

      <main className="flex-grow p-12 overflow-y-auto">
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
