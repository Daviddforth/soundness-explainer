"use client";

import { useState } from "react";

export default function Home() {
  const [audience, setAudience] = useState("Beginner");
  const [explanation, setExplanation] = useState("");

  const generateExplanation = () => {
    if (audience === "Beginner") {
      setExplanation(
        "Soundness Layer is a decentralized system that helps verify complex cryptographic proofs in a secure and transparent way.\n\nIn Web3, many applications rely on advanced mathematics, especially zero-knowledge proofs, to stay secure and scalable. The problem is that verifying these proofs can be expensive, slow, or centralized. Soundness exists to fix this.\n\nInstead of trusting a single company or server to say “this proof is correct,” Soundness allows verification to happen in a decentralized way. This improves security, transparency, and trust across the ecosystem.\n\nWhy does this matter to you? Because it means the apps you use can scale safely, remain trustless, and stay verifiable by anyone. Soundness makes advanced cryptography usable in real-world Web3 applications."
      );
    }

    if (audience === "Developer") {
      setExplanation(
        "Soundness Layer provides developers with a decentralized verification and attestation layer for zero-knowledge proofs and cryptographic computations.\n\nVerifying proofs directly on-chain is expensive and inefficient, while off-chain verification often introduces trust assumptions. Soundness solves this by enabling trust-minimized, decentralized verification using off-chain storage and optimized verification pipelines.\n\nFor developers, this means better scalability, lower costs, and stronger security guarantees. Instead of building custom verification systems or relying on centralized services, developers can integrate Soundness as shared infrastructure.\n\nBy abstracting away verification complexity, Soundness allows developers to focus on building applications while still benefiting from strong cryptographic security and decentralization."
      );
    }

    if (audience === "Investor") {
      setExplanation(
        "Soundness Layer is foundational infrastructure for the future of zero-knowledge powered applications.\n\nAs ZK proofs become more important for scalability, privacy, and cross-chain interoperability, verification becomes a major bottleneck. Soundness directly addresses this by reducing verification cost, latency, and trust assumptions.\n\nInfrastructure layers that solve fundamental problems tend to capture long-term value. Soundness benefits from strong network effects: as more applications rely on zero-knowledge proofs, demand for decentralized verification increases.\n\nBy positioning itself as a core verification layer for the ZK ecosystem, Soundness has the potential to become an essential primitive in Web3 infrastructure."
      );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Soundness Explainer
      </h1>

      <div className="bg-white text-blue-700 rounded-2xl p-8 w-full max-w-3xl shadow-xl">
        
        <label className="block mb-3 font-semibold text-lg">
          Choose who you’re explaining Soundness to
        </label>

        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="w-full p-3 rounded border mb-6 text-blue-700"
        >
          <option>Beginner</option>
          <option>Developer</option>
          <option>Investor</option>
        </select>

        <button
          onClick={generateExplanation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition"
        >
          Generate Explanation
        </button>

        {explanation && (
          <div className="mt-6 bg-blue-50 text-blue-800 p-6 rounded-lg text-base leading-relaxed whitespace-pre-line">
            {explanation}
          </div>
        )}
      </div>

      <footer className="mt-10 text-sm opacity-90">
        Made by{" "}
        <a
          href="https://x.com/daviddforth"
          target="_blank"
          className="underline font-semibold"
        >
          @daviddforth
        </a>{" "}
        — follow me on X
      </footer>

    </main>
  );
}
