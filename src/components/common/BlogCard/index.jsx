import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import { imageResolver } from '../../../../utils/helpers';
import ReactMarkdown from 'react-markdown';

const BlogCard = ({ data, service, blog }) => {

	return (
		<Link
			href={service ? `/services/${data?.slug}` : `/blog/${data?.slug}` || '/'} legacyBehavior
		>
			<a
				href={
					service ? `/services/${data?.slug}` : `/blog/${data?.slug}` || '/'
				}
				className='flex'
			>
				<div className='relative flex flex-col items-stretch'>
					<div className='absolute left-[5px] top-[5px] bg-white text-black px-[2px] py-[1px] rounded-md text-[12px]'>
						{data?.category?.data?.attributes?.name}
					</div>
					<div className='w-full h-[230px]'>
						{data?.image?.data !== null ? (
							<img
								src={imageResolver(data?.image).path}
								alt={data?.image?.data?.attributes?.alternativeText}
								className='w-full h-full object-cover'
								loading='lazy'
							/>
						) : (

							<img
								src={`https://admin.toppinoledental.com/uploads/${data?.imagePath}`}
								alt={data?.imagePath}
								loading='lazy'
								className='h-full w-full object-cover '
							/>
						)}
					</div>
					<div className='flex flex-col w-full max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800'>
						<div className='mt-2 min-h-[280px]'>
							<h2
								href=''
								className='text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
							>
								{/* {data?.title} */}
								<ReactMarkdown>{data?.title}</ReactMarkdown>
							</h2>
							{/* <p className="mt-2 text-[#963A2F] dark:text-gray-300">
                            {moment(data?.publishedAt).format("LL")}
                        </p> */}
							{data?.publishedDate && (
								<div className={`mt-2`}>
									<p className='text-[#963A2F]'>{data?.publishedDate}</p>
								</div>
							)}
							<div className='mt-2 text-gray-600 dark:text-gray-300'>
								{/* {data?.description} */}
								{/* <MarkBody cusClass={`Descrip`} data={data?.description} /> */}
								<ReactMarkdown>{data?.description}</ReactMarkdown>
							</div>
						</div>
						<div className='flex items-center justify-between mt-auto'>
							<p
								href='#'
								className='text-[#963A2F] dark:text-blue-400 hover:underline'
							>
								Read more ⟶
							</p>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default BlogCard;
