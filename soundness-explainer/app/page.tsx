"use client";

import { useState } from "react";

export default function Home() {
  const [audience, setAudience] = useState("Beginner");
  const [explanation, setExplanation] = useState("");

  const beginnerExplanations = [
    `Soundness Layer is a system designed to help Web3 applications verify that complex cryptographic computations are correct in a decentralized way. Traditional verification methods often rely on a single server or trusted authority, which can introduce risks and reduce transparency.\n\nFor beginners, think of Soundness as a security checker that anyone can trust. It ensures that applications behave correctly without needing to blindly trust a company or service. This increases confidence in the apps you use.\n\nBy decentralizing verification, Soundness enhances transparency and reduces risks of fraud or errors. This allows users to participate in Web3 applications safely.\n\nUltimately, it helps make blockchain applications scalable, secure, and trustworthy for everyone, even if you don’t fully understand the underlying cryptography.`,
    
    `In Web3, applications often rely on zero-knowledge proofs and other advanced cryptography to stay secure and private. However, verifying these proofs can be expensive or centralized. Soundness Layer solves this problem by creating a decentralized verification system.\n\nFor a beginner, this means that apps you use are independently checked for correctness. You no longer have to rely solely on what the application says.\n\nThis layer improves trust and security across the ecosystem. It’s like having a team of independent auditors always checking that the app is doing what it promises.\n\nBy using Soundness, developers can build safer apps, and users can participate with confidence, knowing that everything is verifiable and transparent.`,

    `Soundness Layer helps Web3 platforms verify complex mathematical proofs in a decentralized way. For beginners, imagine trying to ensure that a game’s score system or a transaction ledger is always accurate. Instead of trusting one person, Soundness allows everyone to check that the results are correct.\n\nThis improves security because errors or cheating can’t go unnoticed. It also improves transparency because anyone can verify the data themselves.\n\nApps built with Soundness can scale safely, handle more users, and maintain trust without relying on a single centralized authority.\n\nUltimately, it helps make Web3 applications accessible, reliable, and understandable for everyone.`,

    `Many Web3 applications rely on cryptographic proofs to verify actions or transactions. Soundness Layer provides a decentralized layer to verify these proofs reliably.\n\nFor beginners, this means the apps you use are independently verified for correctness. You don’t have to blindly trust the developers.\n\nThis layer also enhances transparency and security, making blockchain applications safer for everyone.\n\nBy using Soundness, users and beginners can interact with Web3 applications confidently, knowing that the systems are trustworthy and verifiable.`,

    `Soundness Layer is designed to decentralize the verification of cryptographic proofs in Web3 applications. Traditionally, verifying proofs could be slow, expensive, or centralized, creating potential risks.\n\nFor beginners, this layer acts as a safety net, ensuring that what the app claims is true can be independently checked.\n\nIt enables a transparent and secure environment where users can participate without worrying about hidden errors or fraud.\n\nSoundness helps make blockchain technology practical, scalable, and accessible for everyone, giving beginners confidence in the ecosystem.`
  ];

  const developerExplanations = [
    `Soundness Layer provides a decentralized verification layer for zero-knowledge proofs and other cryptographic computations. Developers often face challenges verifying proofs on-chain due to high cost or off-chain due to trust assumptions. Soundness abstracts this complexity.\n\nBy leveraging off-chain storage, optimized verification pipelines, and decentralized consensus, developers can integrate proof verification into their applications efficiently.\n\nThis layer ensures correctness while maintaining decentralization, allowing developers to focus on building features instead of reinventing verification infrastructure.\n\nSoundness also supports cross-chain and multi-application integrations, enabling scalable and secure ZK-based applications across ecosystems.\n\nUltimately, developers gain a reliable, trust-minimized solution to verify cryptographic proofs without compromising on scalability or security.`,

    `Soundness Layer is a decentralized infrastructure for verifying cryptographic proofs. Developers know that ZK proofs are critical but verification can be expensive or centralized. Soundness offers a scalable, off-chain verification mechanism with strong security guarantees.\n\nIt reduces the burden of building custom verification pipelines, providing a reusable layer that abstracts complex cryptography.\n\nThis means faster development cycles, lower costs, and safer applications. Integration is straightforward, allowing developers to adopt Soundness without deep knowledge of the underlying cryptography.\n\nWith Soundness, developers can focus on innovative features while relying on a trust-minimized verification backbone.\n\nIt also supports interoperability and composability, making it ideal for multi-chain and complex ZK applications.`,

    `For developers, Soundness Layer acts as a decentralized verification engine for zero-knowledge proofs. On-chain verification is costly, and off-chain verification often introduces trust assumptions. Soundness mitigates these issues with optimized pipelines.\n\nIt provides secure, decentralized verification infrastructure that can scale with your application. Developers can plug it in, ensuring proofs are validated without writing complex verification logic themselves.\n\nThis improves security, reduces potential bugs, and enhances the reliability of applications.\n\nSoundness also simplifies cross-chain deployments and supports multiple applications simultaneously.\n\nBy adopting Soundness, developers save time and resources while maintaining trust-minimized standards.`,

    `Soundness Layer is a critical tool for developers building ZK-powered applications. Verification bottlenecks can slow down development and introduce risk. Soundness solves this with decentralized, off-chain verification pipelines.\n\nDevelopers can integrate it into their stack, ensuring that proofs are validated efficiently and securely.\n\nThis allows for scalable applications without sacrificing security or decentralization.\n\nSoundness also reduces costs associated with proof verification, enabling more complex applications to be built and deployed.\n\nBy using Soundness, developers can focus on product innovation while relying on robust, decentralized verification.`,

    `Soundness Layer enables developers to implement scalable, trust-minimized verification of cryptographic proofs. It abstracts the complexity of building verification logic and offers a decentralized pipeline for ZK proofs.\n\nThis improves reliability, security, and developer productivity. Applications can scale confidently knowing that proofs are validated correctly.\n\nIntegration is simple, requiring minimal setup while providing strong guarantees.\n\nDevelopers benefit from lower costs, faster iterations, and cross-chain interoperability.\n\nSoundness provides a foundation for building secure, scalable, and composable ZK applications.`
  ];

  const investorExplanations = [
    `Soundness Layer is foundational infrastructure for the growing zero-knowledge ecosystem. Verification of cryptographic proofs is often a bottleneck, both in cost and scalability. Soundness addresses these challenges with decentralized, efficient verification pipelines.\n\nFor investors, this represents an infrastructure play with long-term value potential. As ZK adoption grows across chains and applications, demand for reliable verification will increase.\n\nSoundness benefits from network effects — more applications relying on the layer strengthens its value proposition.\n\nThis positions it as a core piece of Web3 infrastructure, reducing risk and increasing efficiency for a wide range of applications.\n\nInvesting attention or support in Soundness now aligns with the growth trajectory of scalable, secure ZK-powered ecosystems.`,

    `Verification bottlenecks in zero-knowledge applications can limit adoption and scalability. Soundness Layer solves this by offering a decentralized verification infrastructure that reduces cost, latency, and trust assumptions.\n\nFor investors, this is an opportunity to back a foundational infrastructure project in the ZK space. Its utility grows as more developers and applications adopt it.\n\nThe layer provides reliable, reusable infrastructure, creating network effects that enhance long-term value.\n\nSoundness is positioned to capture a significant slice of the Web3 infrastructure market as ZK technology becomes mainstream.\n\nSupporting or investing in Soundness aligns with the broader trend of scalable, secure, decentralized applications.`,

    `Soundness Layer enables efficient and trust-minimized verification of cryptographic proofs across Web3 applications. For investors, it represents a critical infrastructure layer poised for growth as ZK proofs see increasing adoption.\n\nBy solving the verification bottleneck, Soundness allows developers to scale applications without compromising security or decentralization.\n\nThis infrastructure has strong long-term value potential because adoption creates network effects, increasing demand and utility.\n\nInvestors benefit from backing a project that addresses a foundational challenge in the ZK ecosystem.\n\nSoundness is positioned as an essential building block for scalable, secure, and interoperable Web3 applications.`,

    `Zero-knowledge proofs are central to scaling secure Web3 applications, but verifying these proofs efficiently has been a major challenge. Soundness Layer solves this with decentralized verification pipelines.\n\nFor investors, this is a chance to support a core infrastructure project in the rapidly growing ZK space.\n\nAs more applications adopt ZK technology, the demand for reliable verification layers increases.\n\nSoundness benefits from network effects, providing value that grows with adoption.\n\nThis makes it an attractive project for long-term infrastructure-focused investment in Web3.`,

    `Soundness Layer addresses one of the fundamental challenges in Web3: trust-minimized verification of complex cryptographic proofs.\n\nFor investors, it is a strategic infrastructure play. By enabling scalable and secure verification, Soundness unlocks the potential for broader ZK adoption.\n\nApplications built on ZK proofs rely on strong, decentralized verification — Soundness provides that foundation.\n\nIts growth potential is amplified as more projects and chains integrate the layer, creating network effects.\n\nInvesting attention in Soundness now positions you at the forefront of foundational Web3 infrastructure development.`
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
        Pick an audience, click Generate, and get a detailed explanation of Soundness you can copy or share.
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
