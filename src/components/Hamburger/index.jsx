import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const ExSub = dynamic(() => import("../common/exSub"));
const Modal = dynamic(() => import("../common/ModalCard"));

const Hamburger = ({
  isSubMenu,
  isMenu,
  setIsSubmenu,
  setIsMenu,
  data,
  navServices,
  dropdown,
  toggle,
  isShowing,
  ourservices, 
 
  navCat
}) => {
  const [exSub, setExSub] = useState()
  const FilteredCat = (cb) => {
    const resulteditem = navServices?.filter((item) => item?.attributes?.services_categories?.data[0]?.attributes?.name === cb)
    return resulteditem;
  }
  return (
    <>
      {" "}
      {!isMenu && (
        <span
          onClick={() => setIsMenu(!isMenu)}
          className="transition-all duration-500 ease-linear px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      )}
      {isMenu && (
        <span
          onClick={() => {
            setIsMenu(!isMenu), setIsSubmenu(false);
          }}
          className="transition-all duration-500 ease-linear px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
      )}
      {isMenu && (
        <div className="bg-white z-50 min-h-[300px] absolute left-0 top-[76px] w-full shadow-lg">
          {data?.navItems?.map((item, index) => (
            <ul key={index} className="w-full">
              <li
                className={`px-[30px] py-[21px]  cursor-pointer transition-all ease duration-500 ${styles.cusHover}`}
              >
                <>
                  {" "}
                  <div
                    onClick={() => index === 1 && setIsSubmenu(!isSubMenu)}
                    className={`flex cursor-pointer ${styles.cusMenu} flex-col relative`}
                  >
                    {index === 1 ? <p
                      className={`text-[15px] leading-[20px] font-[400] text-[#3B5266] transition-all ease duration-500 flex ${styles.hoverText}`}
                    >
                      {item.title}
                      {index === 1 && (
                        <>
                          <span className=" z-50">
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
                          </span>
                        </>
                      )}
                      
                    </p> :  index === 5 ? (
                        <span onClick={toggle}>{item.title}</span>
                      ) : (
                        <Link href={`${item.link}`} prefetch={false} legacyBehavior><a href={`${item.link}`} className="">{item.title}</a></Link>
                      )
                     
                    }
  <Modal
                      isShowing={isShowing}
                      hide={toggle}
                      ourservices={ourservices}
                    />
                  </div>
                </>
              </li>
              {index === 1 && isSubMenu && (
                <div className="justify-center ">
                  {navCat?.map((item, index) => {
                    const subMenuData = FilteredCat(item.attributes.name)
                    return (
                      <div key={index} className="px-[30px]">
                        <ExSub setExSub={setExSub} subMenuData={subMenuData} exSub={exSub} item={item} />

                      </div>
                    )

                  })}


                </div>
              )}
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
