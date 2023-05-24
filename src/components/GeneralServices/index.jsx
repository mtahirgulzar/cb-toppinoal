import Link from 'next/link';
import React from 'react';
import { imageResolver } from '../../../utils/helpers';

const GeneralServices = ({ data }) => {
	return (
		<div className=''>
			<div className='max-w-[1156px] mx-auto px-4 py-[30px]'>
				<div className='grid lg:grid-cols-6 sm:grid-cols-3 gap-x-[20px] gap-y-[20px]'>
					{data?.map((item, index) => (
						<Link href={`/services/${item.attributes.slug}`} prefetch={false} legacyBehavior>
							<a href={`/services/${item.attributes.slug}`} className=''>
								<div key={index} className='flex flex-col cursor-pointer'>
									<div className='flex items-center justify-center'>
										<img
											src={
												item.attributes.image.data === null
													? '/static/images/Cosmetic2.png'
													: imageResolver(item?.attributes?.image).path
											}
											alt={
												item?.attributes?.image?.data?.attributes
													?.alternativeText
											}
											className='w-[105px] h-[105px] rounded-[100%] object-cover shadow-md'
											loading='lazy'
										/>
									</div>
									<div className='flex-justify-center items-center mt-[10px]'>
										<h2 className='text-center text-[20px] leading-[24px] text-[#963A2F]'>
											{item?.attributes?.title}
										</h2>
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default GeneralServices;
