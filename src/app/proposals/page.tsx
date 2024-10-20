// pages/index.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ProposalForm from "./ProposalForm";
import ProposalList from "./ProposalList";

interface Proposal {
  id: number;
  text: string;
  votes: {
    yes: number;
    no: number;
  };
}

const initialProposals: Proposal[] = [
  {
    id: 1,
    text: "Create a Kali Uchis token",
    votes: { yes: 15, no: 5 },
  },
  {
    id: 2,
    text: "Create an Olivia Rodrigo token",
    votes: { yes: 20, no: 3 },
  },
  {
    id: 3,
    text: "Create a Gracie Abrams token",
    votes: { yes: 18, no: 7 },
  },
  {
    id: 4,
    text: "Create a Lil Uzi Vert token",
    votes: { yes: 25, no: 2 },
  },
];

const Home: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [votedProposals, setVotedProposals] = useState<Record<number, boolean>>(
    {},
  );

  useEffect(() => {
    // Reset to initial values on each page load
    setProposals(initialProposals);
    setVotedProposals({});

    // Store initial values in localStorage
    localStorage.setItem("proposals", JSON.stringify(initialProposals));
    localStorage.removeItem("votedProposals");

    // Add event listener for beforeunload
    const handleBeforeUnload = () => {
      localStorage.setItem("proposals", JSON.stringify(initialProposals));
      localStorage.removeItem("votedProposals");
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  /*
  useEffect(() => {
    
    const storedProposals = localStorage.getItem("proposals");
    const storedVotes = localStorage.getItem("votedProposals");
    if (storedProposals) {
      setProposals(JSON.parse(storedProposals));
    } else {
      setProposals(initialProposals);
      localStorage.setItem("proposals", JSON.stringify(initialProposals));
    }
    if (storedVotes) {
      setVotedProposals(JSON.parse(storedVotes));
    }
  }, []);
  */

  const addProposal = useCallback((proposalText: string) => {
    const newProposal: Proposal = {
      id: Date.now(),
      text: proposalText,
      votes: { yes: 0, no: 0 },
    };
    setProposals((prevProposals) => {
      const updatedProposals = [...prevProposals, newProposal];
      localStorage.setItem("proposals", JSON.stringify(updatedProposals));
      return updatedProposals;
    });
  }, []);

  const handleVote = useCallback((id: number, voteType: "yes" | "no") => {
    setVotedProposals((prevVotedProposals) => {
      if (prevVotedProposals[id]) {
        return prevVotedProposals; // User has already voted on this proposal
      }

      const newVotedProposals = { ...prevVotedProposals, [id]: true };
      localStorage.setItem("votedProposals", JSON.stringify(newVotedProposals));
      return newVotedProposals;
    });

    setProposals((prevProposals) => {
      const updatedProposals = prevProposals.map((proposal) =>
        proposal.id === id
          ? {
              ...proposal,
              votes: {
                ...proposal.votes,
                [voteType]: proposal.votes[voteType] + 1,
              },
            }
          : proposal,
      );
      localStorage.setItem("proposals", JSON.stringify(updatedProposals));
      return updatedProposals;
    });
  }, []);

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
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
          Collection
        </div>
        <div className="font-semibold text-black mt-5 text-2xl bg-[#FAF7FC] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">
          <Link href="/proposals" className="font-semibold">
            Proposals
          </Link>
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100 mb-20">
          Notifications
        </div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
          Profile
        </div>
        <div className="font-semibold text-gray-500 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
          Settings
        </div>
      </div>

      {/* Main Content */}

      <main className="flex-grow p-12 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Proposals</h1>
        <ProposalForm onAddProposal={addProposal} />
        <ProposalList
          proposals={proposals}
          onVote={handleVote}
          votedProposals={votedProposals}
        />
      </main>
    </div>
  );
};

export default Home;
