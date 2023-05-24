import React, { useEffect, useState } from 'react';
import TurndownService from 'turndown';
import XMLData from '../utils/wp-xml';
import xml2js from 'xml2js';
// import getUrls from 'get-urls';
import axios from 'axios';

const Convert = () => {
	const [dataXml, setDataXml] = useState(null);
	const [dataMark, setDataMark] = useState(null);

	// converting data from xml to json
	useEffect(() => {
		const parser = new xml2js.Parser();
		parser.parseString(XMLData, function (err, result) {
			setDataXml(result.rss.channel[0].item);
		});
	}, [XMLData]);

	// converting the content to markdown
	let required = {
		id: '',
		title: '',
		description: '',
		slug: '',
		body: '',
		createdAt: '',
		updatedAt: '',
		publishedAt: '',
		image: '',
		SEO: null,
		// category: {
		//   id: "",
		//   name: "",
		//   createdAt: "",
		//   updatedAt: "",
		//   publishedAt: "",
		// },
		// author: {
		//   id: null,
		//   name: "",
		//   title: "",
		//   createdAt: "",
		//   updatedAt: "",
		//   publishedAt: "",
		//   image: null,
		// },
	};

	useEffect(() => {
		const turndownService = new TurndownService();

		const mapData = dataXml?.map((wpPost) => {
			//  console.log("xml dta here",wpPost)
			// if(!Array.isArray(wpPost.content)){
			//     wpPost.content[0]=el.innerHTML
			// }else{
			//     console.log("another error")
			// }

			for (const [key, value] of Object.entries(wpPost)) {
				let modded = key.replace('wp:', '');
				modded = modded.replace(':encoded', '');
				wpPost[modded] = value;
				key.includes('wp:') || (key.includes(':encoded') && delete wpPost[key]);
			}

			return {
				...required,
				status: wpPost.status[0],
				id: wpPost.post_id[0],
				title: wpPost.title[0],
				description: turndownService
					.turndown(wpPost.content[0])
					.split(' ')
					.slice(0, 10)
					.join(' '),
				slug: wpPost.post_name[0],
				image: wpPost.post_image,
				body: wpPost.content[0],
				createdAt: new Date(wpPost.post_date[0]),
				updatedAt: new Date(wpPost.post_modified[0]),
				publishedAt: new Date(wpPost.pubDate[0]),
				// category: {
				//   id: wpPost?.cc_categories && wpPost?.cc_categories[0]?.term_id,
				//   name: wpPost?.cc_categories && wpPost?.cc_categories[0]?.name,
				//   createdAt: wpPost.post_date,
				//   updatedAt: wpPost.post_modified,
				//   publishedAt: wpPost.post_modified,
				// },
			};
		});
		console.log('map data here', mapData);

		const finalData = mapData?.map((wpPost, index) => {
			// console.log("final solution here", wpPost)

			var el = document.createElement('html');
			el.innerHTML = wpPost.body;

			let imgs = el.getElementsByTagName('img');
			for (let img of imgs) {
				(img.src = `https://admin.toppinoledental.com/uploads/${
					img?.src.split('/')[img?.src.split('/').length - 1]
				}`),
					(img.className = 'converted-images');
			}

			wpPost.body = el.innerHTML;

			// var para = el.getElementsByTagName('p')[1].innerHTML;
			// wpPost.description = para;
			// console.log("our para is here",para)

			return {
				...required,
				status: wpPost.status,
				id: wpPost.id,
				title: wpPost.title,
				description: turndownService.turndown(wpPost.description),
				slug: wpPost.slug,
				image: wpPost.image,
				body: wpPost.body,
				createdAt: wpPost.createdAt,
				updatedAt: wpPost.updatedAt,
				publishedAt: wpPost.publishedAt,
			};
		});

		// console.log("finalData here",finalData)
		finalData
			?.filter((item) => item.status === 'publish')
			.map((sin, index) => {
				axios.post('https://admin.toppinoledental.com/api/services', {
					data: {
						title: sin.title,
						//         description: sin.description.slice(0, 150).concat("..."),
						slug: sin.slug,
						body: sin.body,
						createdAt: sin.createdAt,
						updatedAt: sin.updatedAt,
						publishedAt: sin.publishedAt,
					},
				});
				console.log(`data here of service${index}`, {
					data: {
						title: sin.title,
						// description: sin.description.slice(0, 150).concat("..."),
						slug: sin.slug,
						body: sin.body,
						createdAt: sin.createdAt,
						updatedAt: sin.updatedAt,
						publishedAt: sin.publishedAt,
					},
				});
			});

		// setDataMark(mapData);
	}, [dataXml]);

	return null;
};

export default Convert;
