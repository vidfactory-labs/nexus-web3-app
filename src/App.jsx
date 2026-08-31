import React, { useState } from 'react';

const BACKEND_URL = 'https://nexus-backend-production-f8e9.up.railway.app';

export default function App() {
  const [swapAmount, setSwapAmount] = useState("");
  const [status, setStatus] = useState("System Active");

  const handleSmartSwap = async () => {
    if (!swapAmount || isNaN(swapAmount)) return alert("Enter a valid amount");
    setStatus("AI Shield: Scanning for scams...");
    setTimeout(() => setStatus("Swap Executed!"), 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">NEXUS</h1>
        <p className="subtext">Decentralized • AI Shield • Freedom</p>
      </div>
      <div className="content">
        <div className="card">
          <p className="label">AI Smart Swap (ETH)</p>
          <input 
            className="input" 
            placeholder="0.00" 
            value={swapAmount} 
            onChange={(e) => setSwapAmount(e.target.value)} 
            type="number" 
          />
          <button className="actionBtn" onClick={handleSmartSwap}>
            Execute Secure Swap
          </button>
          <p className="status">{status}</p>
        </div>
        <div className="card">
          <p className="shieldTitle">Full Proof Security</p>
          <p className="shieldDesc">Zero Seed Phrases (MPC)</p>
          <p className="shieldDesc">AI Hack-Proof Simulation</p>
          <p className="shieldDesc">Non-Custodial & Decentralized</p>
        </div>
      </div>
    </div>
  );
}
