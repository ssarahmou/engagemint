import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useAccount,
  useConnect,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { type UseWriteContractParameters } from "wagmi";

export default function Something() {
  const { writeContract } = useWriteContract();
  const deployToken = async (name: string, ticker: string) => {
    console.log("made write contract var");

    try {

      const result = writeContract({
        abi: [
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
            ],
            name: "ERC20TokenCreated",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
            ],
            name: "deployNewToken",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "deployedTokens",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        functionName: "deployNewToken",
        args: [name, ticker],
      });

      return result;
    } catch (error) {
      console.error("Error deploying new token:", error);
      throw error;
    }
  };

  return deployToken;
}
