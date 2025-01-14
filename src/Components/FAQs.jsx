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
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "When Can I Predict?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "How Do I Make a Prediction?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "What Cryptocurrencies Can I Use to Predict?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "Is There a Minimum or Maximum Prediction Amount?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "How Often Can I Predict?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "Do You Have a Partner Program?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "Do I Need to Pay Taxes on My Winnings?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      //   answer2:
      //     "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      answer3:
        " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      answer4:
        " Winners: The top three closest predictions share the prize pool.",
    },
    {
      question: "Is FastBets a Lotto or Betting Platform?",
      answer1:
        " FatGuess is a decentralized prediction platform where users forecast the price of a cryptocurrency 24 hours into the future.",
      answer2:
        "Prediction Window: Opens daily at 00:01:00 UTC and closes at 22:59:59 UTC.",
      //   answer3:
      //     " Price Determination: The final price is determined       at 00:00:00 UTC using real-time data from trusted blockchain oracles.",
      //   answer4:
      //     " Winners: The top three closest predictions share the prize pool.",
    },
  ];

  return (
    <div className="bg-[#1F1F1F]" id="faq">
      <div className="container mx-auto px-10 py-16 flex md:flex-row flex-col text-white">
        {/* Header Section */}
        <div>
          <div className="w-[95%] max-w-4xl">
            <h1 className="font-bold text-4xl">FAQs</h1>
            <p
              className="mt-2 text-white
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
            <h1 className="text-3xl font-bold text-center mt-4">
              PREDICT LIKE A <span className="text-[#00A67E]">PRO</span>
            </h1>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex min-h-fit mt-8 w-[80%] ">
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
                  className="faq-question flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <div className="">
                  {openIndex === index ? (
                    <IoIosArrowDropdown />
                  ) : (
                    <CgAdd className="hover:cursor-pointer " />
                  )}
                </div></div>
                {openIndex === index && (
                  <div className="faq-answer mt-2 text-gray-200 clear-start font-semibold flex flex-col">
                    {faq.answer1 && (
                      <p>
                        <span className="">.</span> {faq.answer1}
                      </p>
                    )}
                    {faq.answer2 && (
                      <p>
                        <span>.</span> {faq.answer2}
                      </p>
                    )}
                    {faq.answer3 && (
                      <p>
                        <span>.</span> {faq.answer3}
                      </p>
                    )}
                    {faq.answer4 && (
                      <p>
                        <span>.</span> {faq.answer4}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
            {!showAll && (
              <div className="flex justify-center">
                <button
                  className="mt-4 bg-[#00A67E] text-white px-10 py-2 w-fit rounded-md"
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
