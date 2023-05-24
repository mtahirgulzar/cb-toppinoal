import React from 'react';
import { imageResolver } from '../../../utils/helpers';

const DentalProblemsCard = ({ index, data }) => {
	const dentalProblems = [
		{
			title: 'State of the Art Technology',
			description:
				'We use the latest technology and equipment to provide the best possible treatment for any dental problem. Our experts have the knowledge, experience, and technological solutions to fulfill all dental care needs. ',
		},
		{
			title: 'Experienced and Caring Pinole Dentists',
			description:
				'We have been working with a team of experienced, professional, and caring pinole dentists. Our team knows the importance of oral health. That’s why we are passionate about providing you with the best dental care you need. ',
		},
		{
			title: 'Personalized Dental treatment options',
			description:
				'We understand that everyone has unique dental care needs. Therefore, we never use one size fit for all treatment options. Our expert dentists assess and opt for personalized dental treatment options for optimal results. ',
		},
		{
			title: 'Flexible treatment scheduling',
			description:
				'Best of all, we provide flexible treatment scheduling for added convenience of our patients. Regardless of the dental care services you need, we can schedule your appointment whenever you want.',
		},
		{
			title: 'Convenient location',
			description:
				'Fortunately, our dental office is conveniently located in Pinole. You can easily head to it anytime without any hassle.',
		},
	];
	return (
		<div className=''>
			<div className='max-w-[1156px] mx-auto px-4 my-[30px]'>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]'>
					{dentalProblems?.map((item, index) => (
						<div
							key={index}
							className='min-h-[263px] bg-white shadow-sm lg:py-[40px] sm:py-[47px] py-[30px]    '
						>
							<div className='mb-[30px]'>
								<img
									src={''}
									alt={''}
									className='h-[50px] mx-auto'
									loading='lazy'
								/>
							</div>
							<div className='mb-[15px]'>
								<h2 className='text-[20px] leading-[24px]  font-[600]  text-[#963A2F] mr-auto text-center'>
									{item?.title}
								</h2>
							</div>
							<div className=''>
								<p className=' sm:text-[16px] sm:leading-[32px] text-[16px] leading-[24px] font-[400] text-[#605c44] text-center '>
									{item?.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DentalProblemsCard;
