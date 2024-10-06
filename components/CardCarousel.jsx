import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const cards = [
    {
      title: "Women's fertility Journey",
      description:
        "The most complex fertility treatment, this course will help you do it right the first time.",
      tag: "fertility",
      imageUrl: "your-image-url-1",
    },
    {
      title: "What causes infertility in Women",
      description:
        "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing.",
      tag: "infertility",
      imageUrl: "your-image-url-2",
    },
    {
      title: "IVF Process",
      description:
        "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they.",
      tag: "mental health, ivf",
      imageUrl: "your-image-url-3",
    },
    {
      title: "What causes infertility in Women",
      description:
        "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing.",
      tag: "infertility",
      imageUrl: "your-image-url-2",
    },
    {
      title: "IVF Process",
      description:
        "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they.",
      tag: "mental health, ivf",
      imageUrl: "your-image-url-3",
    },
    {
      title: "What causes infertility in Women",
      description:
        "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing.",
      tag: "infertility",
      imageUrl: "your-image-url-2",
    },
    {
      title: "IVF Process",
      description:
        "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they.",
      tag: "mental health, ivf",
      imageUrl: "your-image-url-3",
    },
  ];

  return (
    <div className="w-[90%] bg-black mx-auto">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default CardCarousel;
