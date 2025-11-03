"use client";
import { useState, useEffect, useRef } from "react";

const collateralOptions = ["USD", "ETH", "BTC", "yourTOKEN"];
const priceFeedOptions = ["ETH", "TSLA", "GOLD", "USD", "RAIN", "NFTfloor"];

export default function UseCasesSection() {
  const [currentCollateral, setCurrentCollateral] = useState(0);
  const [currentPriceFeed, setCurrentPriceFeed] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isMapRoomHovered, setIsMapRoomHovered] = useState(false);
  const [customCollateral, setCustomCollateral] = useState("");
  const [customPriceFeed, setCustomPriceFeed] = useState("");
  const [isPulsing, setIsPulsing] = useState(false);
  const collateralIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const priceFeedIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isEditing) {
      collateralIntervalRef.current = setInterval(() => {
        setCurrentCollateral((prev) => (prev + 1) % collateralOptions.length);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 500);
      }, 6000);

      priceFeedIntervalRef.current = setInterval(() => {
        setCurrentPriceFeed((prev) => (prev + 1) % priceFeedOptions.length);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 500);
      }, 6000);

      return () => {
        if (collateralIntervalRef.current)
          clearInterval(collateralIntervalRef.current);
        if (priceFeedIntervalRef.current)
          clearInterval(priceFeedIntervalRef.current);
      };
    }
  }, [isEditing]);

  const handleInputBoxClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      if (collateralIntervalRef.current)
        clearInterval(collateralIntervalRef.current);
      if (priceFeedIntervalRef.current)
        clearInterval(priceFeedIntervalRef.current);
      setCustomCollateral(collateralOptions[currentCollateral]);
      setCustomPriceFeed(priceFeedOptions[currentPriceFeed]);
    }
  };

  const handlePlayPauseClick = () => {
    if (isEditing) {
      // Resume animation
      setIsEditing(false);
      setCustomCollateral("");
      setCustomPriceFeed("");
    } else {
      // Pause animation and enable editing
      setIsEditing(true);
      if (collateralIntervalRef.current)
        clearInterval(collateralIntervalRef.current);
      if (priceFeedIntervalRef.current)
        clearInterval(priceFeedIntervalRef.current);
      setCustomCollateral(collateralOptions[currentCollateral]);
      setCustomPriceFeed(priceFeedOptions[currentPriceFeed]);
    }
  };

  const handlePreviousClick = () => {
    const newCollateralIndex =
      (currentCollateral - 1 + collateralOptions.length) %
      collateralOptions.length;
    const newPriceFeedIndex =
      (currentPriceFeed - 1 + priceFeedOptions.length) %
      priceFeedOptions.length;

    setCurrentCollateral(newCollateralIndex);
    setCurrentPriceFeed(newPriceFeedIndex);

    if (isEditing) {
      setCustomCollateral(collateralOptions[newCollateralIndex]);
      setCustomPriceFeed(priceFeedOptions[newPriceFeedIndex]);
    }
  };

  const handleNextClick = () => {
    const newCollateralIndex =
      (currentCollateral + 1) % collateralOptions.length;
    const newPriceFeedIndex = (currentPriceFeed + 1) % priceFeedOptions.length;

    setCurrentCollateral(newCollateralIndex);
    setCurrentPriceFeed(newPriceFeedIndex);

    if (isEditing) {
      setCustomCollateral(collateralOptions[newCollateralIndex]);
      setCustomPriceFeed(priceFeedOptions[newPriceFeedIndex]);
    }
  };

  const collateral = isEditing
    ? customCollateral
    : collateralOptions[currentCollateral];
  const priceFeed = isEditing
    ? customPriceFeed
    : priceFeedOptions[currentPriceFeed];

  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* Left 1/3: Input/Output Container */}
        <div className="lg:w-1/3 bg-white p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col order-2 lg:order-1">
          {/* Input Section */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {/* Collateral Box */}
            <div className="flex flex-col">
              <h3 className="text-xs font-semibold text-nautical-blue mb-2 tracking-wider">
                Collateral
              </h3>
              <div
                className={`bg-white border-4 border-nautical-blue p-2 flex items-center justify-center h-full cursor-pointer hover:bg-gray-50 transition-all rounded-lg ${
                  isPulsing && !isEditing ? "scale-[1.02] shadow-md" : ""
                }`}
                onClick={handleInputBoxClick}
              >
                {isEditing ? (
                  <input
                    type="text"
                    value={customCollateral}
                    onChange={(e) => setCustomCollateral(e.target.value)}
                    className="text-base font-semibold text-nautical-blue text-center bg-transparent outline-none w-full"
                    placeholder="Enter token"
                    autoFocus
                  />
                ) : (
                  <div className="text-base font-semibold text-nautical-blue transition-all duration-500 whitespace-nowrap">
                    {collateral}
                  </div>
                )}
              </div>
        </div>

            {/* Price Feed Box */}
            <div className="flex flex-col">
              <h3 className="text-xs font-semibold text-nautical-blue mb-2 tracking-wider">
                Price Feed
              </h3>
              <div
                className={`bg-white border-4 border-nautical-blue p-2 flex items-center justify-center h-full cursor-pointer hover:bg-gray-50 transition-all rounded-lg ${
                  isPulsing && !isEditing ? "scale-[1.02] shadow-md" : ""
                }`}
                onClick={handleInputBoxClick}
              >
                {isEditing ? (
                  <input
                    type="text"
                    value={customPriceFeed}
                    onChange={(e) => setCustomPriceFeed(e.target.value)}
                    className="text-base font-semibold text-nautical-blue text-center bg-transparent outline-none w-full"
                    placeholder="Enter asset"
                  />
                ) : (
                  <div className="text-base font-semibold text-nautical-blue transition-all duration-500 whitespace-nowrap">
                    {priceFeed}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="flex justify-center -mt-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-nautical-blue opacity-70"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>

          {/* Output Section */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {/* haTOKEN Box */}
            <div className="flex flex-col">
              <h3 className="text-xs font-semibold text-nautical-blue mb-2 tracking-wider">
                haTOKEN
                  </h3>
              <div
                className={`bg-white border-4 border-nautical-blue p-2 flex items-center justify-center h-full rounded-lg transition-all ${
                  isPulsing && !isEditing ? "scale-[1.02] shadow-md" : ""
                }`}
              >
                <div className="text-base font-semibold text-nautical-blue transition-all duration-500 whitespace-nowrap">
                  ha{priceFeed}
                </div>
              </div>
            </div>

            {/* hsTOKEN Box */}
            <div className="flex flex-col">
              <h3 className="text-xs font-semibold text-nautical-blue mb-2 tracking-wider">
                hsTOKEN
              </h3>
              <div
                className={`bg-white border-4 border-nautical-blue p-2 flex items-center justify-center h-full rounded-lg transition-all ${
                  isPulsing && !isEditing ? "scale-[1.02] shadow-md" : ""
                }`}
              >
                <div className="text-base font-semibold text-nautical-blue transition-all duration-500 whitespace-nowrap">
                  hs{collateral}
                  {priceFeed}
                </div>
              </div>
            </div>
          </div>

          {/* Control buttons: Previous, Play/Pause, Next */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={handlePreviousClick}
              className="p-2 text-nautical-blue/70 hover:text-nautical-blue border border-nautical-blue/30 hover:border-nautical-blue/60 rounded-full transition-all"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button
              onClick={handlePlayPauseClick}
              className="p-2 text-nautical-blue/70 hover:text-nautical-blue border border-nautical-blue/30 hover:border-nautical-blue/60 rounded-full transition-all"
              aria-label={isEditing ? "Play" : "Pause"}
            >
              {isEditing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleNextClick}
              className="p-2 text-nautical-blue/70 hover:text-nautical-blue border border-nautical-blue/30 hover:border-nautical-blue/60 rounded-full transition-all"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right 2/3: Infinite Markets Container */}
        <div className="lg:w-2/3 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14 order-1 lg:order-2">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-6/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pr-1.5 sm:pr-2 md:pr-4 lg:pr-6 xl:pr-10 min-w-0">
              <div className="space-y-3">
                <p className="text-white text-sm sm:text-base">
                  Harbor can tokenize any real-world asset or data feed, opening
                  up limitless possibilities for new markets.
                </p>
                <p className="text-white text-sm sm:text-base">
                  Explore ideas in the map room. Reach out to us to collaborate
                  or integrate your token as collateral.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 md:gap-3 lg:gap-4 min-w-0">
                <button
                  className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold bg-white text-nautical-blue border-2 border-white rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-center"
                  onMouseEnter={() => setIsMapRoomHovered(true)}
                  onMouseLeave={() => setIsMapRoomHovered(false)}
                >
                  {isMapRoomHovered ? "Coming soon" : "Enter Map Room"}
                </button>
                <a
                  href="https://discord.com/invite/BW3P62vJXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-center whitespace-nowrap"
                >
                  Reach Out
                </a>
              </div>
            </div>

            <div className="w-6/12 flex flex-col justify-center text-left min-w-0 pl-2 sm:pl-3 md:pl-4 lg:pl-5">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight break-words">
                <span className="block">Infinite Markets,</span>
                <span className="block">One Protocol.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
