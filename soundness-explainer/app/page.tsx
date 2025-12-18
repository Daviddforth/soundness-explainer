"use client";

import { useState } from "react";

export default function Home() {
  const [audience, setAudience] = useState("Beginner");
  const [explanation, setExplanation] = useState("");

  const beginnerExplanations = [
    "Soundness Layer helps make sure complex cryptographic proofs used in Web3 applications are correct, without relying on a single trusted party.\n\nMany blockchain apps depend on advanced math to stay secure and scalable, but verifying those proofs can be slow or centralized. Soundness solves this by decentralizing verification.\n\nFor users, this means better security, more transparency, and apps that don’t rely on hidden trust assumptions.",

    "At its core, Soundness Layer exists to verify proofs in a decentralized way.\n\nInstead of trusting one server or company to say a proof is valid, Soundness spreads verification across multiple participants. This reduces risk and improves trust.\n\nThis matters because it helps Web3 apps scale safely while staying true to decentralization.",

    "Soundness Layer is infrastructure that helps Web3 applications prove they are behaving correctly.\n\nAs blockchains grow more complex, verifying computations becomes harder. Soundness makes verification efficient, decentralized, and transparent.\n\nFor everyday users, this means safer apps and stronger guarantees that systems work as promised.",

    "In Web3, trust is built on mathematics. Soundness Layer helps verify those mathematical proofs in a decentralized way.\n\nBy removing reliance on centralized verifiers, Soundness strengthens security and transparency.\n\nThis allows applications to scale while remaining trustless and verifiable by anyone.",

    "Soundness Layer is designed to make advanced cryptography usable in real-world Web3 applications.\n\nIt decentralizes the verification of proofs, ensuring no single party controls validation.\n\nThis leads to safer, more scalable applications and a stronger foundation for the Web3 ecosystem."
  ];

  const developerExplanations = [
    "Soundness Layer provides a decentralized verification and attestation layer for zero-knowledge proofs.\n\nOn-chain verification is costly, while off-chain verification introduces trust assumptions. Soundness bridges this gap using optimized verification pipelines.\n\nThis allows developers to build scalable, secure applications without reinventing verification infrastructure.",

    "For developers working with ZK proofs, verification is a major bottleneck.\n\nSoundness Layer enables trust-minimized verification using decentralized infrastructure, reducing costs and complexity.\n\nDevelopers can focus on product logic while relying on Soundness for strong cryptographic guarantees.",

    "Soundness Layer abstracts proof verification into shared infrastructure.\n\nBy leveraging decentralized verification and off-chain storage, it improves scalability and security.\n\nThis enables cross-chain applications and complex ZK systems without centralized trust.",

    "Developers can use Soundness Layer to verify cryptographic proofs efficiently and securely.\n\nIt removes the need for custom verification logic while preserving decentralization.\n\nThis results in lower costs, better scalability, and simpler integrations.",

    "Soundness Layer is built for developers who need scalable, trust-minimized proof verification.\n\nIt enables efficient verification workflows while maintaining decentralization.\n\nThis helps developers ship secure ZK-powered applications faster."
  ];

  const investorExplanations = [
    "Soundness Layer is foundational infrastructure for zero-knowledge applications.\n\nAs ZK adoption grows, verification becomes a critical bottleneck. Soundness directly addresses this problem.\n\nInfrastructure layers like this tend to capture long-term value as the ecosystem expands.",

    "Verification is one of the biggest cost centers in ZK systems.\n\nSoundness Layer reduces verification cost and latency while preserving decentralization.\n\nThis positions it as a core infrastructure layer with strong network effects.",

    "Soundness Layer focuses on solving a fundamental Web3 problem: scalable, trust-minimized verification.\n\nAs more applications rely on ZK proofs, demand for verification infrastructure increases.\n\nThis creates long-term value potential for Soundness as adoption grows.",

    "Soundness Layer enables efficient verification for complex cryptographic systems.\n\nBy lowering costs and trust assumptions, it unlocks scalable ZK adoption.\n\nInfrastructure projects like Soundness benefit from ecosystem-wide usage and compounding demand.",

    "Soundness Layer sits at the intersection of scalability, security, and decentralization.\n\nBy addressing verification bottlenecks, it enables broader ZK adoption.\n\nThis makes it a strong infrastructure play with long-term upside."
  ];

  const generateExplanation = () => {
    if (audience === "Beginner") {
      setExplanation(
        beginnerExplanations[
          Math.floor(Math.random() * beginnerExplanations.length)
        ]
      );
    }

    if (audience === "Developer") {
      setExplanation(
        developerExplanations[
          Math.floor(Math.random() * developerExplanations.length)
        ]
      );
    }

    if (audience === "Investor") {
      setExplanation(
        investorExplanations[
          Math.floor(Math.random() * investorExplanations.length)
        ]
      );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Soundness Explainer
      </h1>

      <p className="mb-6 text-center max-w-xl text-blue-100">
        Pick an audience, click generate, and get a clear explanation of Soundness you can copy or share.
      </p>

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
          href="https://x.com/David_dforth"
          target="_blank"
          className="underline font-semibold"
        >
          @David_dforth
        </a>{" "}
        — follow me on X
      </footer>

    </main>
  );
}
