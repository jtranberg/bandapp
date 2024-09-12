"use client"; // Mark this as a client-side component

import React, { useEffect, useState } from 'react';
import { useAddress, useMetamask, useContract } from '@thirdweb-dev/react';
import './nftPage.css'; // Custom styling for the NFT grid

const NFTPage: React.FC = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress(); // Fetch the user's wallet address
  const { contract } = useContract('YOUR_COLLECTION_ADDRESS', 'nft-collection'); // Replace with your NFT collection address

  const [nfts, setNfts] = useState<any[]>([]);

  useEffect(() => {
    if (contract) {
      // Fetch NFTs from the contract
      contract.getAll().then((nfts) => {
        setNfts(nfts);
      }).catch((error) => {
        console.error("Failed to fetch NFTs", error);
      });
    }
  }, [contract]);

  const handleConnect = async () => {
    try {
      await connectWithMetamask(); // Call to connect Metamask
    } catch (error) {
      console.error("Failed to connect with Metamask", error);
    }
  };

  return (
    <div className="nft-page">
      <h1>Your NFTs</h1>

      {/* Connect Wallet Button */}
      {!address ? (
        <button onClick={handleConnect} className="connect-btn">
          Connect with Metamask
        </button>
      ) : (
        <div className="nft-grid">
          {nfts.map((nft) => (
            <div key={nft.metadata.id} className="nft-item">
              <img
                src={nft.metadata.image}
                alt={nft.metadata.name}
                className="nft-thumbnail"
              />
              <p>{nft.metadata.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NFTPage;
