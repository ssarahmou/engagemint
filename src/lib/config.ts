import { http, createConfig } from "wagmi";
import { mainnet, sepolia, skaleCalypso } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia, skaleCalypso],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [skaleCalypso.id]: http(),
  },
});
