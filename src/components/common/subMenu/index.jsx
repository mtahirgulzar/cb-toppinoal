import React from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const SubMenu = ({ data }) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <ul className={` bg-white`}>
      {data?.map((item, index) => (
        <Link
          key={index}
          href={`/services/${item.slug || item.attributes.slug}`} legacyBehavior
        >
          <li
            className={`px-[20px] py-[13px] transition-all ease duration-500 flex justify-center ${
              styles.cusHover
            } ${
              currentRoute === `/services/${item.slug || item.attributes.slug}`
                ? "bg-[#963A2F] text-white"
                : "text-[#000000]"
            }`}
          >
            {/* {index===0 && dropdown.slice(0,2).map((item)=>(
                <div>
                <li><li>{item.title}</li></li>
                </div>
              ))} */}
            <p
              className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] flex text-center`}
            >
              <a
                href={`/services/${item.slug || item.attributes.slug}`}
                className=""
              >
                {item.title || item.attributes.title}
              </a>
              {/* <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span> */}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SubMenu;
