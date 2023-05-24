import Link from 'next/link';
import React from 'react';
import { imageResolver } from '../../../utils/helpers';

const Hero = ({data, blog, home, patients, blogpage, contact}) => {

	return (
		<div className=''>
			<section className='pb-[189px] sm:pb-[305px]   md:pt-[127px] pt-[110px] relative overflow-hidden h-[628px]'>
				<div
					className={`absolute min-w-full min-h-full ${
						blog ? 'bg-black opacity-70' : 'bg-black opacity-70'
					}   top-0 left-0 z-20`}
				></div>
				<div
					className={`absolute min-w-full min-h-full flex   left-0 z-10  ${
						home ? 'top-[0px]' : 'top-0'
					}`}
				>
					{data?.image?.data !== null ? (
						
						<img
							src={imageResolver(data?.image).path}
							alt={data?.image?.data?.attributes?.alternativeText}
							className='object-cover min-w-full'
							loading='lazy'
						/>
					) : (
						<img
							src={`https://admin.toppinoledental.com/uploads/${data?.imagePath}`}
							alt={data?.imagePath?.data?.attributes?.alternativeText}
							className='object-cover min-w-full'
							loading='lazy'
						/>
					)}
				</div>
				<div
					className={`${patients || blogpage || contact ? 'hidden' : 'block'}`}
				>
					<div className='md:pl-[50px] md:pr-[50px] pl-[15px] pr-[15px] max-w-[1156px] mx-auto md:relative z-30'>
						<div className='absolute md:bottom-0 md:right-[50px] md:left-0 bottom-[40px] left-[15px] flex md:flex-col md:hidden '>
							<div className='flex md:flex-col md:pb-[50px] md:order-1 order-2'>
								<span className='flex justify-center pb-[25px] items-center'>
									<a href='https://www.facebook.com/people/Top-Pinole-Dental/100049877090405/'>
										<svg
											width={20}
											height={20}
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H10V12.4706H7V9.64706H10V8.13082C10 5.26024 11.4897 4 13.925 4C15.0684 4 15.6836 4.08142 15.9825 4.12097L16 4.12329V6.82353H14.339C13.3053 6.82353 13 7.35812 13 8.44047V9.64706H15.9741L15.5629 12.4706H13V20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0Z'
												fill='white'
											/>
										</svg>
									</a>
								</span>
								<span className='flex justify-center'>
									<a href='https://twitter.com/toppinoledental'>
										<svg
											className='md:ml-0 ml-[15px]'
											width={20}
											height={20}
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM15.3502 6.23936C15.9312 6.1722 16.4847 6.02331 17 5.80205C16.615 6.35858 16.1277 6.84744 15.5661 7.23946C15.5715 7.35868 15.5742 7.47842 15.5742 7.59868C15.5742 11.2685 12.686 15.5 7.40283 15.5C5.78051 15.5 4.27126 15.0403 3 14.2526C3.22507 14.2786 3.45391 14.2917 3.68544 14.2917C5.03154 14.2917 6.26995 13.8476 7.25261 13.1026C5.99588 13.0802 4.93516 12.2769 4.56956 11.1737C4.74455 11.2055 4.92493 11.2232 5.10961 11.2232C5.37183 11.2232 5.62598 11.1893 5.86666 11.1258C4.55232 10.8712 3.56267 9.74881 3.56267 8.40302V8.36814C3.94981 8.57587 4.39295 8.70081 4.86354 8.71539C4.09303 8.21769 3.58636 7.36753 3.58636 6.4044C3.58636 5.89472 3.72797 5.41784 3.97458 5.0076C5.39175 6.68813 7.50783 7.79391 9.89474 7.90948C9.84628 7.70697 9.82043 7.49456 9.82043 7.27694C9.82043 5.74374 11.1062 4.5 12.6925 4.5C13.5184 4.5 14.2647 4.83736 14.7886 5.37723C15.4434 5.25228 16.0583 5.02113 16.6129 4.70304C16.3986 5.35172 15.9436 5.89576 15.3502 6.23936Z'
												fill='white'
											/>
										</svg>
									</a>
								</span>
							</div>
							<p className='text-[17px] leading-[25px] font-[400]  text-white md:-rotate-90 md:mr-0 mr-[15px]'>
								Follow us
							</p>
						</div>
						<div className='absolute bottom-0 z-30 right-[50px] md:flex flex-col hidden'>
							<div className='flex flex-col pb-[50px]'>
								<span className='flex justify-center pb-[25px]'>
									<a
										className='cursor-pointer'
										href='https://www.facebook.com/people/Top-Pinole-Dental/100049877090405/'
									>
										<svg
											width={20}
											height={20}
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H10V12.4706H7V9.64706H10V8.13082C10 5.26024 11.4897 4 13.925 4C15.0684 4 15.6836 4.08142 15.9825 4.12097L16 4.12329V6.82353H14.339C13.3053 6.82353 13 7.35812 13 8.44047V9.64706H15.9741L15.5629 12.4706H13V20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0Z'
												fill='white'
											/>
										</svg>
									</a>
								</span>
								<span className='flex justify-center'>
									<a href='https://twitter.com/toppinoledental'>
										<svg
											width={20}
											height={20}
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM15.3502 6.23936C15.9312 6.1722 16.4847 6.02331 17 5.80205C16.615 6.35858 16.1277 6.84744 15.5661 7.23946C15.5715 7.35868 15.5742 7.47842 15.5742 7.59868C15.5742 11.2685 12.686 15.5 7.40283 15.5C5.78051 15.5 4.27126 15.0403 3 14.2526C3.22507 14.2786 3.45391 14.2917 3.68544 14.2917C5.03154 14.2917 6.26995 13.8476 7.25261 13.1026C5.99588 13.0802 4.93516 12.2769 4.56956 11.1737C4.74455 11.2055 4.92493 11.2232 5.10961 11.2232C5.37183 11.2232 5.62598 11.1893 5.86666 11.1258C4.55232 10.8712 3.56267 9.74881 3.56267 8.40302V8.36814C3.94981 8.57587 4.39295 8.70081 4.86354 8.71539C4.09303 8.21769 3.58636 7.36753 3.58636 6.4044C3.58636 5.89472 3.72797 5.41784 3.97458 5.0076C5.39175 6.68813 7.50783 7.79391 9.89474 7.90948C9.84628 7.70697 9.82043 7.49456 9.82043 7.27694C9.82043 5.74374 11.1062 4.5 12.6925 4.5C13.5184 4.5 14.2647 4.83736 14.7886 5.37723C15.4434 5.25228 16.0583 5.02113 16.6129 4.70304C16.3986 5.35172 15.9436 5.89576 15.3502 6.23936Z'
												fill='white'
											/>
										</svg>
									</a>
								</span>
							</div>
							<p className='text-[17px] leading-[25px] font-[400]  text-white -rotate-90'>
								Follow us
							</p>
						</div>
						<div className='relative z-20'>
							<div className='mb-[45px] max-w-[670px]'>
								<div className='mb-[35px]'>
									{data?.tagline && (
										<div className='bg-[#E1E9F0] px-[10px] py-[2px] w-fit mb-[31px] md:mb-[33px]'>
											<h2 className='text-[13px] leading-[20px] font-[400] text-[#3B5266]'>
												{data?.tagline}
											</h2>
										</div>
									)}
									<h1 className='md:text-[70px] md:leading-[75px] text-[35px] leading-[40px] font-[900]  text-white mb-[20px] md:mb-[35px]'>
										{data?.headline || data?.title}
									</h1>
									<h3 className=' text-[17px] leading-[25px] font-[400] text-white '>
										{home ? data?.description : ''}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
