import React from 'react'
import { imageResolver } from '../../../utils/helpers'
import MarkBody from '../MarkBody'

const Info = ({ data }) => {
    return (
        <div className="">
            <div className="max-w-[1156px] mx-auto px-4 py-[50px]">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] items-center justify-items-center">
                    <div className="">
                        <img src={imageResolver(data?.image).path} alt={data?.image?.data?.attributes?.alternativeText} loading='lazy' className="" />
                    </div>
                    <div className="text-center ">
                        <MarkBody cusClass={`cus-service-body`} data={data?.body} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info