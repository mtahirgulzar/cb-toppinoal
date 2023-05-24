import Link from "next/link";
import React, { useState } from "react";
import { imageResolver } from "../../../utils/helpers";
import Hamburger from "../Hamburger";
import Modal from "../common/ModalCard";
import useModal from "../../../utils/useModal";
import MegaMenu from "../common/megaMenu";
import styles from "./style.module.css";
import { useRouter } from "next/router";

function Header({ data, navServices, ourservices, navCat }) {
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const { isShowing, toggle } = useModal();
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubmenu] = useState(false);

  return (
    <div className="relative overflow-visible bg-white shadow-lg wrapper">
      <div className="max-w-[1156px] mx-auto px-4">
        <div className="flex items-center justify-between w-full h-full">
          <div className="lg:py-[19.5px] py-2 flex items-center ">
            <Link href="/" prefetch={false} legacyBehavior>
              <a href="/" className="">
                <img
                  src={imageResolver(data?.Logo).path}
                  width="250px"
                  height="48.9px"
                  loading="lazy"
                  alt={data?.Logo?.data?.attributes?.alternativeText}
                  className="cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <div className="">
            <div className="hidden px-4 lg:flex">
              {data?.navItems?.map((item, index) => {
                return (
                  <div key={index} className="pr-[40px]  overflow-visible">
                    {/* <Link href={item.link || "/"}> */}
                    <div
                      onMouseEnter={() => index === 1 && setIsSubmenu(true)}
                      className={`flex  ${styles.cusMenu}`}
                    >
                      <p
                        className={`text-[13px] leading-[20px] cursor-pointer font-[500]  hover:text-[#963A2F] ${
                          currentRoute == item.link
                            ? "text-[#963A2F]"
                            : "text-[#3B5266]"
                        } `}
                      >
                        {index === 5 ? (
                          <span onClick={toggle}>{item.title}</span>
                        ) : (
                          <Link href={`${item.link}`} prefetch={false} legacyBehavior>
                            <a href={`${item.link}`} className="">
                              {item.title}
                            </a>
                          </Link>
                        )}
                      </p>
                      <Modal
                        isShowing={isShowing}
                        hide={toggle}
                        ourservices={ourservices}
                      />
                      <div className={`${index !== 1 ? "hidden" : ""}`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>

                        <MegaMenu
                          isSubMenu={isSubMenu}
                          data={navCat}
                          services={navServices}
                          setIsSubmenu={setIsSubmenu}
                        />
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                );
              })}
            </div>
            <div className="lg:hidden flex items-center min-h-full h-[62px]">
              <Hamburger
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                isSubMenu={isSubMenu}
                setIsSubmenu={setIsSubmenu}
                data={data}
                navServices={navServices}
                navCat={navCat}
                toggle={toggle}
                isShowing={isShowing}
                ourservices={ourservices}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
