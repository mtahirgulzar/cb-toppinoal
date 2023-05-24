import React from 'react';
import { imageResolver } from '../../../utils/helpers';

const ServiceCard = ({ index, card }) => {
	const { title, image, description } = card;
	return (
		<div className='w-full' key={index}>
			<div className='card-container'>
				<div className='front'>
					<div className='flex flex-col items-center justify-center h-full mx-auto text-center'>
						<div>
							<img
								src={imageResolver(image).path}
								alt={image?.data?.attributes?.alternativeText}
								loading='lazy'
								className='mx-auto mb-[30px]'
							/>
						</div>
						<h2 className='text-[18px] leading-[18px] font-[600] text-[#605C44]'>
							{title}
						</h2>
					</div>
				</div>
				<div className='back'>
					<h2 className='text-[18px] leading-[18px] font-[600] text-[#f5fdc1] mb-[20px]'>
						{title}
					</h2>
					<p className='text-[16px] leading-[26px] font-[400] text-white '>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
