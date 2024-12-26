"use client"

import { useState } from 'react';

const ContractInfo = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "Hx17Q5bcP4SYwezPx3vFT8GDfDvSCToTV9qsfj19pump";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-4">
      <h1 className="bg-purple-700/30 backdrop-blur-sm text-white text-center p-4 rounded-2xl border-2 border-white mx-8 mt-12 hover:bg-purple-700/40 transition-all duration-300">
        Ticker: $PLSMD
      </h1>
      <button
        onClick={handleCopy}
        className="bg-purple-700/30 backdrop-blur-sm text-white text-center p-4 rounded-2xl border-2 border-white hover:bg-purple-700 transition-colors"
      >
        {/* {contractAddress} */}
        Coming Soon!
        {copied && <span className="ml-2">(Copied!)</span>}
      </button>
    </div>
  );
};

export default ContractInfo;
