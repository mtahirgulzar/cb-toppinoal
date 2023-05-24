import Link from 'next/link';
import React from 'react';
import { imageResolver } from '../../../utils/helpers';

const PatientForm = () => {
	return (
		<div className='pt-[20px] pb-[5px]'>
			<div className='max-w-[1156px] mx-auto px-4 '>
				<div className='flex flex-col'>
					<div
						className={`flex justify-center items-center pb-[15px] mb-[15px] border-b-[2px]`}
					>
						<h2 className={`text-center font-[600] text-[26px] leading-[26px]`}>
							New Patient Forms
						</h2>
					</div>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
							<div className='min-w-0 flex-1'>
								<a
									href='https://admin.toppinoledental.com/uploads/1_NP_Registration_1_3f6a9c2901.pdf'
									className='focus:outline-none'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span className='absolute inset-0' aria-hidden='true' />
									<p className='text-sm font-medium text-gray-900 items-center'>
										English Form
									</p>
									<p className='truncate text-sm text-gray-500'></p>
								</a>
							</div>
						</div>
						<div className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
							<div className='min-w-0 flex-1 items-center'>
								<a
									href='https://admin.toppinoledental.com/uploads/NP_Registration_Spanish_1_0e08af81e5.pdf'
									className='focus:outline-none'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span className='absolute inset-0' aria-hidden='true' />
									<p className='text-sm font-medium text-gray-900'>
										Spanish Form
									</p>
									<p className='truncate text-sm text-gray-500'></p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default PatientForm;
