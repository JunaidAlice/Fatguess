import React, { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can contact our customer service via email at support@example.com or call us at 123-456-7890.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of placing it.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
    {
      question: "What is your privacy policy?",
      answer:
        "Our privacy policy can be found on our website under 'Privacy Policy'.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "You can apply a discount code at checkout in the 'Promo Code' field.",
    },
    {
      question: "What should I do if I receive a damaged item?",
      answer:
        "If you receive a damaged item, please contact our customer service immediately for assistance.",
    },
    // Add your FAQs here
  ];
  return (
    <div className=" px-10 flex  items-center justify-center bg-gray-100">
      <div>
        <div>
          <h1 className="font-bold text-4xl">FAQs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            voluptate commodi nostrum eveniet distinctio tempora doloribus at
            ut, animi esse nihil temporibus alias
          </p>
        </div>
      </div>
      <div className="w-full border pl-2">
        {Faqs.map((faq, index) => {
          return (
            <div
              key={index}
              className="p-4 my-4 bg-white shadow-lg rounded-lg duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold ">{faq.question}</h3>

                <button onClick={() => toggleAnswer(index)} className="">
                  {" "}
                  {openIndex === index ? (
                    <RiArrowDropDownLine />
                  ) : (
                    <LuCirclePlus />
                  )}
                </button>
              </div>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
