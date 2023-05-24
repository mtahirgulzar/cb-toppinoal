import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import { imageResolver } from "../../../utils/helpers";
import Slider from "react-slick";
import Script from "next/script";

const AboutUs = ({ data, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };


  useEffect(() => {
		const slider= document.getElementById("trustSlider")
		const script = document.createElement("script");
		script.src = "https://cdn.trustindex.io/loader.js?2abcb2663437965433581e7259";
		script.async = true;
		slider.appendChild(script); 
	},[])
  return (
    <div className="">
      <div className="sm:py-[75px] py-[40px]">
        <Title data={title} red />
        <div id="trustSlider" className="max-w-[1156px] mx-auto bg-white p-[35px] flex flex-col justify-center">
          {/* <Slider {...settings}>
            {data?.map((item, index) => (
              <div key={index} className="">
                <div className="mb-[30px] flex justify-center items-center">
                  <div className="h-[60px] w-[60px] rounded-full mr-[25px] overflow-hidden">
                    <img
                      src={imageResolver(item?.author?.image).path}
                      alt={item?.author?.image?.data?.attributes?.alternativeText}
                      loading="lazy"
                      className=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-[20px] leading-[25px] font-[900] text-[#304659]">
                      {item?.author?.name}
                    </h3>
                    <p className="text-[15px] leading-[20px] font-[400] text-[#304659]">
                      {item?.author?.title}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[14px] leading-[20px] font-[400] text-black text-center">
                    {item?.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
