import React from 'react'
import Title from '../common/Title'
import { imageResolver } from '../../../utils/helpers'

const Welcome = ({ data ,title}) => {
    return (
        <div className="">
            <div className="py-[70px]">
                <Title data={title} red/>
                <div className="max-w-[1156px] mx-auto px-4 my-[30px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]">
                        {data?.map((item, index) => (
                            <div
                                key={index}
                                className="min-h-[263px] bg-white shadow-sm lg:py-[40px] sm:py-[47px] py-[30px]    "
                            >
                                <div className="mb-[30px]">
                                    <img
                                        src={imageResolver(item.image).path}
                                        alt={item?.image?.data?.attributes?.alternativeText}
                                        className="h-[50px] mx-auto"
                                        loading='lazy'
                                    />
                                </div>
                                <div className="mb-[15px]">
                                    <h2 className="text-[20px] leading-[24px]  font-[600]  text-[#963A2F] mr-auto text-center">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="">
                                    <p className=" sm:text-[16px] sm:leading-[32px] text-[16px] leading-[24px] font-[400] text-[#605c44] text-center ">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome