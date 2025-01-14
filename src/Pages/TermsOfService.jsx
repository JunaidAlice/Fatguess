import React from "react";

const TERMS_DATA = [
  {
    title: "1. INTRODUCTION",
    content:
      'Welcome to FatGuess, a decentralized platform where users participate in prediction-based competitions for cryptocurrency prices. By accessing or using FatGuess, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the platform. FatGuess reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the platform constitutes acceptance of the revised Terms.',
  },
  {
    title: "2. ELIGIBILITY",
    content:
      "To use FatGuess, you must:\n• Be at least 18 years old or the age of majority in your jurisdiction.\n• Have the legal capacity to enter into binding agreements.\n• Comply with all applicable laws and regulations, including those related to cryptocurrency and blockchain usage in your jurisdiction.\nBy using FatGuess, you represent and warrant that you meet these eligibility requirements.",
  },
  {
    title: "3. ACCOUNT AND WALLET CONNECTION",
    content:
      "FatGuess operates using cryptocurrency wallets as identifiers. By connecting your wallet to the platform, you create a unique user profile associated with your wallet address. It is your responsibility to:\n• Keep your wallet credentials secure.\n• Ensure that you only use wallets compatible with the FatGuess platform.\n• Safeguard your private keys, as FatGuess cannot recover lost access to wallets.",
  },
  {
    title: "4. PARTICIPATION RULES",
    content:
      "FatGuess leverages blockchain technology, meaning most data is stored publicly on the blockchain. While this ensures transparency, we:\n• Do not store private keys or sensitive personal information.\n• Use secure infrastructure to protect platform operations.",
  },
  {
    title: "5. PRIZES AND REWARDS",
    content:
      "FatGuess distributes prize pools to the top-performing participants based on prediction accuracy. Prizes are allocated as follows:\n• 1st place: 75% of the prize pool.\n• 2nd place: 20% of the prize pool.\n• 3rd place: 5% of the prize pool.",
  },
  {
    title: "6. TAXES",
    content:
      "Participants are solely responsible for understanding and complying with tax obligations related to their winnings or transactions on the FatGuess platform. FatGuess does not provide tax advice and recommends consulting with a qualified professional.",
  },
  {
    title: "7. PROHIBITED ACTIVITIES",
    content:
      "By using FatGuess, you agree not to:\n• Use the platform for illegal purposes, including money laundering or fraud.\n• Exploit vulnerabilities in the platform or attempt to tamper with smart contracts.\n• Submit false, misleading, or malicious predictions.\n• Create multiple wallets to manipulate results or gain an unfair advantage.\nFatGuess reserves the right to suspend or ban users who engage in prohibited activities.",
  },
  {
    title: "8. DISCLAIMERS",
    content:
      'FatGuess provides the platform "as is" and "as available" without warranties of any kind, either express or implied. FatGuess does not guarantee the accuracy of data sourced from oracles or third parties and is not liable for:\n• Financial losses incurred through participation.\n• Errors, interruptions, or technical issues on the platform.\n• Smart contract vulnerabilities exploited by third parties.',
  },
  {
    title: "9. LIMITATION OF LIABILITY",
    content:
      "To the fullest extent permitted by law, FatGuess and its affiliates, partners, and employees are not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. This includes, but is not limited to, loss of earnings, data breaches, or inability to access your wallet.",
  },
  {
    title: "10. INTELLECTUAL PROPERTY",
    content:
      "All content on the FatGuess platform, including logos, graphics, and text, is the intellectual property of FatGuess unless otherwise stated. You may not reproduce, modify, or distribute any content without prior written consent from FatGuess.",
  },
  {
    title: "11. GOVERNING LAW",
    content:
      "These Terms are governed by and construed in accordance with the laws of the jurisdiction in which FatGuess operates. Any disputes arising from these Terms or your use of the platform will be resolved in accordance with those laws.",
  },
  {
    title: "12. RESTRICTED COUNTRIES",
    content:
      "FatGuess does not permit access to its platform from users located in or residents of the following countries:\n• United States\n• France\n• Central African Republic\n• North Korea\n• Democratic Republic of the Congo\n• Eritrea\n• Guinea-Bissau\n• Iran\n• Iraq\n• Lebanon\n• Libya\n• Mali\n• Somalia\n• Sudan\n• South Sudan\n• Syria\n• Yemen\nUsers from these countries are prohibited from participating in or accessing the FatGuess platform. Additionally, the use of VPNs or other methods to mask your location to bypass these restrictions is strictly prohibited.",
  },
  {
    title: "13. AMENDMENTS",
    content:
      "FatGuess reserves the right to update or amend these Terms at any time. Any changes will be posted on the platform, and it is your responsibility to review the updated Terms regularly. Continued use of the platform after amendments signifies your acceptance of the revised Terms.",
  },
  {
    title: "14. CONTACT INFORMATION",
    content:
      "For questions or concerns regarding these Terms, please contact FatGuess support through the platform or via email at support@fatguess.com.",
  },
  {
    title: "15. ACCEPTANCE OF TERMS",
    content:
      "By using the FatGuess platform, you acknowledge that you have read, understood, and agreed to these Terms of Service.",
  },
];

const TermsSection = ({ title, content }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <p className="whitespace-pre-line">{content}</p>
  </section>
);

const TermsOfService = () => {
  return (
    <section className="bg-[#1F1F1F] text-gray-300 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        {TERMS_DATA.map((section, index) => (
          <TermsSection key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </section>
  );
};

export default TermsOfService;
