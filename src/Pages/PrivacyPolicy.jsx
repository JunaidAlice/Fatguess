import React from "react";

const privacyPolicySections = [
  {
    title: "INTRODUCTION",
    content:
      "At FatGuess, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our decentralized prediction platform. By accessing or using FatGuess, you agree to this Privacy Policy. If you do not agree, please discontinue use of the platform.",
  },
  {
    title: "INFORMATION WE COLLECT",
    content:
      "FatGuess does not collect personal identifying information. We collect your wallet address, transaction data, and usage data for analytical purposes.",
  },
  {
    title: "HOW WE USE YOUR INFORMATION",
    content:
      "We use the information to facilitate participation, ensure transparency, and improve the platform.",
  },
  {
    title: "HOW YOUR INFORMATION IS STORED AND PROTECTED",
    content:
      "FatGuess stores most data publicly on the blockchain. We do not store private keys and use secure infrastructure to protect operations.",
  },
  {
    title: "SHARING OF INFORMATION",
    content:
      "We do not sell, rent, or share your personal data except to comply with legal obligations or enforce our Terms of Service.",
  },
  {
    title: "COOKIES AND TRACKING",
    content:
      "FatGuess does not use cookies, but third-party services may use tracking technologies.",
  },
  {
    title: "YOUR RIGHTS",
    content:
      "You can control access to your wallet and discontinue platform use at any time.",
  },
  {
    title: "THIRD-PARTY SERVICES",
    content:
      "We integrate with third-party services but are not responsible for their privacy practices.",
  },
  {
    title: "RESTRICTED ACCESS",
    content:
      "Access to FatGuess is restricted in certain regions. We are not responsible for privacy risks from bypassing these restrictions.",
  },
  {
    title: "UPDATES TO THIS PRIVACY POLICY",
    content:
      "We may update this Privacy Policy. Continued use of FatGuess after updates means acceptance of the revised policy.",
  },
  {
    title: "CONTACT US",
    content: "For questions, contact support@fatguess.com.",
  },
  {
    title: "ACCEPTANCE OF PRIVACY POLICY",
    content: "By using FatGuess, you agree to this Privacy Policy.",
  },
];

const PrivacyPolicy = () => (
  <section className="bg-[#1F1F1F] text-gray-200 min-h-screen py-10 px-2 md:px-4 font">
    <div className="max-w-4xl mx-auto p-0  md:p-6 rounded-xl">
    <h2 className="md:text-6xl text-4xl font-black text-center tracking-tighter mb-6 uppercase">privacypolicy</h2>

      {privacyPolicySections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            {index + 1}. {section.title}
          </h2>
          <p className="font-light text-gray-400">{section.content}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PrivacyPolicy;
