import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function SchoolNews() {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  const carousel = useRef();
  const cardsContainer = useRef();

  const checkBoundaries = () => {
    if (!carousel.current || !cardsContainer.current) return;

    const containerWidth = carousel.current.offsetWidth;
    const contentWidth = cardsContainer.current.scrollWidth;
    const maxScroll = contentWidth - containerWidth;

    setShowLeftChevron(Math.abs(position) > 1);
    setShowRightChevron(Math.abs(position) < maxScroll - 1);

    setWidth(maxScroll);
  };

  useLayoutEffect(() => {
    checkBoundaries();
  }, [position]);

  useEffect(() => {
    const handleResize = () => {
      setPosition(0);
      checkBoundaries();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideAmount = () => {
    if (!carousel.current) return 0;

    const cards = carousel.current.getElementsByClassName("card-wrapper");
    if (cards.length === 0) return 0;

    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth;
    const cardMargin = parseInt(cardStyle.marginRight) || 0;

    return cardWidth + cardMargin;
  };

  const handleLeftClick = () => {
    const slideAmount = getSlideAmount();
    const newPosition = Math.min(position + slideAmount, 0);
    setPosition(newPosition);
  };

  const handleRightClick = () => {
    const slideAmount = getSlideAmount();
    let newPosition = position - slideAmount;

    if (Math.abs(newPosition) > width) {
      newPosition = -width;
    }

    setPosition(newPosition);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const diff = e.clientX - startX;
    setDeltaX(diff);
  };

  const handleMouseUp = () => {
    if (!dragging) return;

    const slideAmount = getSlideAmount();
    const threshold = slideAmount / 2;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        handleLeftClick();
      } else {
        handleRightClick();
      }
    }

    setDragging(false);
    setDeltaX(0);
  };

  const newsItems = [
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/60cbfa5d48ad14bab3b058582b570e2306e16bfb0017c305a040d4ee2b67ecf0?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/60cbfa5d48ad14bab3b058582b570e2306e16bfb0017c305a040d4ee2b67ecf0?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea21bf4311811b0274f164cd65d5d70912209c0ec4c280db58b9444182a0dc6?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea21bf4311811b0274f164cd65d5d70912209c0ec4c280db58b9444182a0dc6?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea21bf4311811b0274f164cd65d5d70912209c0ec4c280db58b9444182a0dc6?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
    {
      date: "1 ديسمبر",
      title: "عنوان الخبر",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea21bf4311811b0274f164cd65d5d70912209c0ec4c280db58b9444182a0dc6?placeholderIfAbsent=true&apiKey=ce15f09aba8c461ea95db36c370d18d3",
    },
  ];

  return (
    <div
      className="flex items-center bg-emerald-700 gap-4 mt-36 py-8 px-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {showLeftChevron && (
        <button
          className="w-6 h-6 cursor-pointer flex-shrink-0"
          onClick={handleLeftClick}
        >
          <FaChevronRight className="w-6 text-slate-50 h-6 transform rotate-180" />
        </button>
      )}
      <motion.div
        ref={carousel}
        className="flex flex-col gap-4 bg-emerald-700 overflow-hidden"
      >
        <h1 className="text-center text-xl font-medium text-white flex items-center justify-center gap-2">
          أخبار المدرسة
        </h1>
        <motion.div
          ref={cardsContainer}
          animate={{ x: position + deltaX }}
          transition={{ duration: 0.2 }}
          className="flex gap-4 items-center"
          onMouseDown={handleMouseDown}
        >
          {newsItems.map((news, index) => (
            <div key={index} className="card-wrapper flex-shrink-0 w-fit">
              <NewsCard
                date={news.date}
                title={news.title}
                imageUrl={news.imageUrl}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
      {showRightChevron && (
        <button
          className="w-6 h-6 cursor-pointer text-slate-50 flex-shrink-0"
          onClick={handleRightClick}
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
