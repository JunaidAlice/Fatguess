import React, { useState, useEffect } from "react";
import bitcoin from "../assets/Dashboard/bitcoin.png";
import trophy from "../assets/Dashboard/trophy.svg";
import Share from "../Pages/Share";

const PredictionCard = ({ visible }) => {
  if (!visible) return null;
  const [isPrediction, setIsPrediction] = useState(false);
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [prediction, setPrediction] = useState("");
  const [pledge, setPledge] = useState("");

  // Set next draw time (1 hour from now)
  const nextDrawTime = new Date().getTime() + 60 * 60 * 1000;

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeDifference = nextDrawTime - currentTime;

      if (timeDifference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      setTimeLeft(formattedTime);
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="fixed top-0 backdrop-blur-lg w-full flex bg-[#1f1f1f] justify-center items-center h-screen p-4">
        <div className="bg-[#141414]  rounded-lg shadow-lg p-6 max-w-md w-full">
          <h1 className="text-center text-4xl tracking-tighter font-extrabold mb-4 text-gray-200">
            Next Draw: <span className="text-[#00A85C]">{timeLeft}</span>
          </h1>
          <div className="text-center text-lg font-medium mb-6">
            <div className="w-44 flex justify-center items-center mx-auto gap-4">
              {" "}
              <img src={trophy} alt="" />
              <h1 className="text-gray-400 font-light">$94,978.19</h1>{" "}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img src={bitcoin} alt="Bitcoin" className="w-10 h-10 mr-4" />
            <div className="flex items-center justify-between  w-full">
              <p className="text-xl font-base text-gray-400 ">Bitcoin (BTC)</p>
              <p className="text-sm text-gray-400 font-bold">
                Current price: $94,978.19
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="prediction"
                className="block text-sm font-medium mb-1 text-gray-200"
              >
                My Prediction
              </label>
              <input
                type="number"
                id="prediction"
                placeholder="Enter predicted price"
                value={prediction}
                onChange={(e) => setPrediction(e.target.value)}
                className="w-full p-3 py-1 bg-transparent rounded b focus:outline-none  text-white"
              />
            </div>

            <div>
              <label
                htmlFor="pledge"
                className="block text-sm font-medium mb-1 text-gray-200"
              >
                My Pledge
              </label>
              <input
                type="number"
                id="pledge"
                placeholder="Enter amount"
                value={pledge}
                onChange={(e) => setPledge(e.target.value)}
                className="w-full p-3 rounded  bg-transparent focus:outline-none text-white"
              />
            </div>

            <button
              onClick={() => setIsPrediction(true)}
              className="w-full bg-[#00A85C]  hover:bg-violet-500 duration-200 text-white py-3 rounded font-semibold"
            >
              Predict Now
            </button>
          </div>

          <p className="text-xs text-center text-gray-400 mt-4">
            By pledging, I agree to{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>
        </div>
      </section>
      <Share visible={isPrediction} />
    </>
  );
};

export default PredictionCard;
