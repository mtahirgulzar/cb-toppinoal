import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkBody = ({ data, cusClass }) => {
  let content = data?.body || data?.attributes?.body || data;
  const [finaldata, setFinalData] = useState(content);
  var finalContent;
  useEffect(() => {
    var el = document.createElement("html");
    el.innerHTML = content;
    let images = el.getElementsByTagName("img");
    for (let image of images) {
      image.src = `https://admin.toppinoledental.com/uploads/${
        image.src.split("/")[image.src.split("/").length - 1]
      }`;
    }
    finalContent = el.innerHTML;
    setFinalData(finalContent);
  });
  return (
    <div className="">
      <div className={`max-w-[1156px] mx-auto  px-4  ${cusClass}`}>
        {/* <ReactMarkdown>{data}</ReactMarkdown> */}
        <div className="" dangerouslySetInnerHTML={{ __html: finaldata }}></div>
      </div>
    </div>
  );
};

export default MarkBody;
