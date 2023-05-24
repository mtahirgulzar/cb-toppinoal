import React from 'react'
import Title from '../common/Title'
import ServiceCard from './ServiceCard'
import { imageResolver } from '../../../utils/helpers'

const OurDentists = ({ data,title }) => {
    const Data = [
        {
            id: 1,
            img: "/static/images/Azadeh.jpg",
            title: "AZADEH HOSSEINI, DDS",
            description: "Pinole dentist, Dr. Azadeh Hosseini graduated in July 2004 from University of the Pacific in San Francisco as the valedictorian of her class. To make sure that her patients benefit from a high level of dental care, she follows the new techniques and material in the dental field very closely and is an active participant in continuing education courses. She is an advocate of minimally invasive supragingival dentistry and focuses on pain free injections and procedures to maximize comfort and minimize stress."
        },
        {
            id: 1,
            img: "/static/images/Ghazal.jpg",
            title: "GHAZAL HOSSEINI, DDS",
            description: "Dr. Ghazal Hosseini received her bachelor degree in dental hygiene from University of the Pacific in 2010. Pursuing her goal to become a dentist, she graduated from University of the Pacific school of dentistry in 2016 and she immediately joined the AEGD (Advanced Education in General Dentistry) program of UOP for one year. Since then, along with her work she has been very active in continuing education dental programs. She participated in a miniresidency fellowship in Supragingival dentistry in Burbank, California. Pinole dentist, Dr. Ghazal keeps minimally invasive procedures as the core of her practice."
        }
    ]
    return (
        <div className="bg-[#7F7C59]">
            <div className="py-[75px]">
                <Title data={title}/>
                <div className="max-w-[1156px] mx-auto px-4 my-[30px]">
                    <div className="grid  md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]">
                        {data?.map((item, index) => (
                          <ServiceCard item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDentists