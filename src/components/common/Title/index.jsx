import React from "react";
import { imageResolver } from "../../../../utils/helpers";

const Title = ({ data, red }) => {
  return (
    <div className="pt-[20px] pb-[5px]">
      <div className="max-w-[1156px] mx-auto px-4 ">
        <div className="flex flex-col">
          {data?.title && (
            <div
              className={`flex justify-center items-center pb-[15px] mb-[15px] border-b-[2px]  ${
                red ? "border-[#963A2F]" : "border-[#F5FDC1]"
              }`}
            >
              <h2
                className={`text-center font-[600] ${
                  red ? "text-[#963A2F]" : "text-[#F5FDC1]"
                } text-[26px] leading-[26px]`}
              >
                {data?.title}
              </h2>
            </div>
          )}
          {data?.description && (
            <div className="flex justify-center items-center mt-[20px]">
              <p
                className={`text-center ${
                  red ? "text-[#605C44]" : "text-white"
                } text-[16px] leading-[32px]`}
              >
                {data?.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
