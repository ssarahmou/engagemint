// pages/index.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ProposalForm from "./ProposalForm";
import ProposalList from "./ProposalList";
import Something from "../../components/ui/writeContract";
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
    text: "Create a BLACKPINK token",
    votes: { yes: 149, no: 5 },
  },
  {
    id: 2,
    text: "Create a Morgan Wallen token",
    votes: { yes: 5, no: 2 },
  },
  {
    id: 3,
    text: "Create a Chappell Roan token",
    votes: { yes: 33, no: 20 },
  },
  {
    id: 4,
    text: "Create a Lil Uzi Vert token",
    votes: { yes: 130, no: 9 },
  },
];

const Home: React.FC = () => {
  const deployNewToken = Something();

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

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
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
      const updatedProposals = prevProposals.map((proposal) => {
        if (proposal.id === id) {
          const updatedProposal = {
            ...proposal,
            votes: {
              ...proposal.votes,
              [voteType]: proposal.votes[voteType] + 1,
            },
          };

          // Check if total votes exceed 150
          //const totalVotes = updatedProposal.votes.yes + updatedProposal.votes.no;
          if (updatedProposal.votes.yes >= 150) {
            // Call the deployNewToken function
            deployNewToken("Blackpink", "BP")
              .then(() => console.log("New token deployed successfully"))
              .catch((error) =>
                console.error("Failed to deploy new token:", error),
              );
          }
          return updatedProposal;
        }
        return proposal;
      });

      localStorage.setItem("proposals", JSON.stringify(updatedProposals));
      return updatedProposals;
    });
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Navigation Bar */}
      <div className="w-[400px] h-screen flex flex-col border-r-[2px] border-slate bg-gradient-to-t from-[#CCD7FA] to-[#F9F0F8] bg-white p-12 overflow-y-auto">
        <div className="font-semibold text-2xl mb-12">
          <Link href="/profile" className="text-2xl font-bold">
            Engagemint
          </Link>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">GENERAL</div>
        <div className="flex-row"> 
            <img src="https://i.imgur.com/sJHPQq6.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl  hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl stroke-[2px] border-slate border-opacity-95">
            <Link href="/dashboard" className="font-semibold">
                Dashboard
            </Link>
            </div>
        </div>
        
        <div className="flex-row"> 
            <img src="https://i.imgur.com/LHHQ51j.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-black px-16 mt-5 text-2xl  bg-[#FAF7FC] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/proposals" className="font-semibold">
                Proposals
            </Link>
            </div>
        </div>

        <div className="flex-row">
            <img src="https://i.imgur.com/hNht7Bf.png" className="py-11 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 mt-5 px-16 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100 mb-20">
            <Link href="/redeem" className="font-semibold">
                Redeem
            </Link>
            </div>
        </div>
        <div className="font-bold text-gray-500 tracking-widest">PERSONAL</div>
        
        <div className="flex-row"> 
            <img src="https://i.imgur.com/hmuO9gS.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/profile" className="font-semibold">
                Profile
            </Link>
            </div>
        </div>

        <div className="flex-row"> 
            <img src="https://i.imgur.com/KrBuSA9.png" className="py-12 px-6 absolute"></img>
            <div className="font-semibold text-gray-500 px-16 mt-5 text-2xl hover:bg-[#FAF7FC] hover:stroke-[2px] p-6 rounded-xl border-slate border-opacity-100">
            <Link href="/profile" className="font-semibold">
                Settings
            </Link>
            </div>
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
