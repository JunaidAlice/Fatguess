import React, { useState } from "react";
import bull from "../assets/Hero/bull.svg";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How Does It Work?",
      answer:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      
       
        
    },
    {
      question: "When Can I Predict?",
      answer:
        "Predictions can be made during the open window: 00:01:00 to 22:59:59 UTC (23 hour window)."
      
    },
    {
      question: "How Do I Make a Prediction?",
      answer:
        "Connect your cryptocurrency wallet to the platform. Create a username that’s now linked to your wallet. Pick your coin, enter your predicted price, and confirm it. Your prediction is securely stored on the blockchain, so it can’t be tampered with."
    },
    {
      question: "What Cryptocurrencies Can I Use to Predict?",
      answer:
        "You can use popular cryptocurrencies like USDT, BTC, ETH, BNB, and more.If you don’t have one of these, you can easily swap your tokens."
    },
    {
      question: "Is There a Minimum or Maximum Prediction Amount?",
      answer:"  The minimum prediction amount is $5. No maximum limit.",
    },
    {
      question: "How Often Can I Predict?",
      answer: "You can make predictions every day on multiple coins as often as you’d like."
    },
    {
      question: "Do You Have a Referral Program?",
      answer: "Yes! When you share your prediction badge on social media, you can earn rewards and invite others to join the fun."
    },
    {
      question: "Do You Have a Partner Program?",
      answer:"Absolutely! FatGuess works with crypto exchanges, wallets, and other crypto-related platforms to create partnerships that benefit everyone."
    },
    {
      question: "Do I Need to Pay Taxes on My Winnings?",
      answer:"That depends on where you live. You might need to declare your winnings as income. Please check your local tax laws and stay compliant. We also recommend reviewing our Terms and Conditions."
    },
    {
      question: "Is FastBets a Lotto or Betting Platform?",
      answer:
        "No. FatGuess is a skill-based platform that rewards market knowledge and analytical skills. By using real-time data and trends, participants can make informed predictions. FatGuess is all about having fun while testing your market insights."
    },
  ];

  return (
    <div className="bg-[#1F1F1F]" id="faq">
      <div className="mx-auto p-2 md:px-10 py-16 flex md:flex-row flex-col  text-white">
        {/* Header Section */}
        <div>
          <div className="w-[80%] md:w-[95%] mx-auto max-w-4xl">
          <h1 className="font-extrabold tracking-tighter text-5xl md:text-6xl text-gray-100">FAQs</h1>

            <p
              className="mt-2 text-gray-400 text-lg
                "
            >
              Dive into our FAQ to get all the juicy details and start flexing
              your prediction skills! Hit up our socials for the hottest
              updates, epic news drops, and more vibes you don’t wanna miss! 🔥
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="flex flex-col items-center mt-6">
            <img src={bull} alt="bull" className="w-40 md:w-52" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-200 text-center mt-4">
  PREDICT LIKE A <span className="text-[#00A67E]">PRo</span>
</h1>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex min-h-fit mt-8 md:w-[80%] w-full mx-auto ">
          {/* Left Side - FAQ List */}
          <div className="flex-1  pt-0 space-y-6">
            {faqs.slice(0, showAll ? faqs.length : 5).map((faq, index) => (
              <div
                key={index}
                className={`faq-item p rounded-md  p-6 ${
                  openIndex === index ? "bg-black" : ""
                }`}
              >
                <div
                  className="faq-question flex justify-between  items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="text-lg text-gray-200 font-semibold">{faq.question}</span>
                  <div className="">
                    {openIndex === index ? (
                      <IoIosArrowDropdown size={25}/>
                    ) : (
                      <CgAdd size={25}/>
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="faq-answer mt-2 text-gray-400  clear-start font-base flex flex-col">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            {!showAll && (
              <div className="flex justify-center">
                <button
                  className="mt-4 bg-[#00A67E] hover:bg-violet-500 duration-200 text-white px-10 py-2 w-fit rounded-md"
                  onClick={() => setShowAll(true)}
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
