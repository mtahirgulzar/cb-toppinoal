import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Header({ data }) {
	const router = useRouter();

	const noIndex = !data?.indexThisPage;
	const noFollow = !data?.followThisPage;
	return (
		<Head>
			<title>{data?.title}</title>
			<meta name='title' content={data?.title}></meta>
			<meta name='description' content={data?.description}></meta>
			<meta name='keywords' content={data?.keywords} />
			<link
				rel='canonical'
				href={`https://toppinoledental.com${router.asPath}`}
			/>
			<meta property='og:title' content={data?.ogTitle} />
			<meta property='og:description' content={data?.ogDescription} />
			<meta
				property='og:image'
				content={`https://admin.toppinoledental.com${data?.ogUrl}`}
			/>
			<meta
				property='og:url'
				content={`https://toppinoledental.com${router.asPath}`}
			/>
			<meta name='twitter:title' content={data?.twitterTitle} />
			<meta name='twitter:description' content={data?.twitterDescription} />
			<meta
				name='twitter:image'
				content={`https://admin.toppinoledental.com${data?.ogUrl}`}
			/>
			<meta name='twitter:card' content={data?.twitterCard} />
			{noFollow && noIndex && <meta name='robots' content='nofollow' />}
			{data?.noIndex && !noFollow && <meta name='robots' content='noindex' />}
			{noFollow && data?.noIndex && (
				<meta name='robots' content='noindex, nofollow' />
			)}
			{!noFollow && noIndex && <meta name='robots' content='index, follow' />}
		</Head>
	);
}
