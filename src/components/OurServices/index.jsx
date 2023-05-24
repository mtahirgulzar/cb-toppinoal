import React from 'react';
import Title from '../common/Title';
import ServiceCard from './ServiceCard';
import BlogCard from '../common/BlogCard';
import DentalProblemsCard from './dentalProblemsCard';
const OurServices = ({ data, title, blog, service, itemOffset }) => {
	// let sortedInput = data?.slice().sort((a, b) => b.id - a.id);

	return (
		<div className=''>
			<div className='py-[60px]'>
				<Title data={title} red />
				<div className='max-w-[1156px] mx-auto px-4 my-[30px]'>
					<div className='grid items-baseline lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]'>
						{data?.map((card, index) => {
							return (
								<div
									key={index}
									className={`${
										index >= itemOffset && index < itemOffset + 9
											? 'flex'
											: 'hidden'
									} h-full min-w-full`}
								>
									<div>
										{blog ? (
											<BlogCard
												data={card?.attributes}
												service={service}
												blog={data}
											/>
										) : (
											<ServiceCard card={card} />
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
