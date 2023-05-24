import Link from "next/link";
import React from "react";
import SubMenu from "../subMenu";

const MegaMenu = ({ data, setIsSubmenu, services, isSubMenu }) => {
  const FilteredCat = (cb) => {
    const resulteditem = services?.filter(
      (item) =>
        item?.attributes?.services_categories?.data[0]?.attributes?.name === cb
    );

    return resulteditem;
  };
  return (
    <div
      onMouseEnter={() => setIsSubmenu(true)}
      onMouseLeave={() => setIsSubmenu(false)}
      className={`absolute  top-[98px] left-0  w-full transition-all duration-3000 ease  z-50 bg-white ${
        isSubMenu ? "" : "hidden"
      }`}
    >
      <ul className="grid grid-cols-3 py-[10px] gap-[10px] max-w-[1156px] mx-auto px-[40px] justify-center">
        {data?.map((item, index) => {
          const subMenuData = FilteredCat(item.attributes.name);
          const cusSlug = services.find(
            (service) => service.attributes.title === item.attributes.name
          );
          return (
            <li key={index} className="">
              <Link
                href={`/services/${cusSlug?.attributes?.slug}`}
                legacyBehavior
              >
                <p className="text-center mb-[10px]">
                  <a
                    href={`/services/${cusSlug?.attributes?.slug}`}
                    className=""
                  >
                    {item.attributes.name}
                  </a>
                </p>
              </Link>
              <SubMenu data={subMenuData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MegaMenu;
