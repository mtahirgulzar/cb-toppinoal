import React, { useEffect, useState } from 'react';
import TurndownService from 'turndown';
import XMLData from '../utils/wp-export';
import xml2js from 'xml2js';
// import getUrls from 'get-urls';
import axios from 'axios';
import { uuid } from 'uuidv4';

const Convert = () => {
	const [dataXml, setDataXml] = useState(null);
	const [dataMark, setDataMark] = useState(null);

	// converting data from xml to json
	// useEffect(() => {
	//   const parser = new xml2js.Parser();
	//   parser.parseString(XMLData, function (err, result) {
	//     setDataXml(result.rss.channel[0].item);
	//   });
	// }, [XMLData]);

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

		//   name: "",

		// },
	};

	useEffect(() => {
		const turndownService = new TurndownService();

		// const mapData = dataXml?.map((wpPost) => {
		//   // for (const [key, value] of Object.entries(wpPost)) {
		//   //   let modded=key.replace("wp:","");
		//   //   modded=modded.replace(":encoded","");
		//   //   wpPost[modded]=value;
		//   //   key.includes("wp:") || key.includes(":encoded") && delete wpPost[key];
		//   // }

		//   return {
		//     ...required,
		//     status:wpPost.status[0],
		//     id: wpPost.post_id[0],
		//     title: wpPost.title[0],
		//     description: wpPost.excerpt[0],
		//     slug: wpPost.post_name[0],
		//     image: wpPost.post_image,
		//     body: turndownService.turndown(wpPost.content[0]),
		//     createdAt: new Date(wpPost.post_date[0]),
		//     updatedAt: new Date(wpPost.post_modified[0]),
		//     publishedAt: new Date(wpPost.pubDate[0]),
		//     // category: {
		//     //   id: wpPost?.cc_categories && wpPost?.cc_categories[0]?.term_id,
		//     //   name: wpPost?.cc_categories && wpPost?.cc_categories[0]?.name,
		//     //   createdAt: wpPost.post_date,
		//     //   updatedAt: wpPost.post_modified,
		//     //   publishedAt: wpPost.post_modified,
		//     // },
		//   }
		// });
		// mapData?.filter((item)=>item.status==="publish").map((sin,index)=>{
		//   axios.post("https://admin.toppinoledental.com/api/services",{data:sin})
		//   console.log(`data haere of blog${index}`,{data:sin})
		// })
		let jsonData = [
			{
				title: 'image testing',
				excerpt: 'testing',
				author: 'Dr. test',
				content:
					'<!-- wp:paragraph -->\n<p>Orthodontics may be viewed as a type of preventative medicine in several ways. Teeth and jaws are healthier when they are perfectly aligned. Crooked and misaligned teeth are more prone to develop various problems that will need the use of drilling, root canals, crowns, extractions, and even surgery to repair. Moreover, misaligned or crooked teeth can cause a loss of self-confidence in certain people, and orthodontics can assist with that.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Orthodontic treatments will solve many of your teeth problems, including crooked teeth and bite problems. It will not only straighten your teeth and the overall look of the jaws, but the braces will provide a lifetime solution to your tooth problems.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>This article has highlighted five reasons you should get an orthodontics treatment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Are you conscious of your smile? Do you smile with closed lips? If this is so, it is high time to see an orthodontist for its treatment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {"level":5} -->\n<h5 id="fixes-overbite">Fixes Overbite</h5>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"right","id":2009,"sizeSlug":"full","linkDestination":"none"} -->\n<div class="wp-block-image"><figure class="alignright size-full"><img src="https://abar.vigorant.xyz/wp-content/uploads/2022/02/overbite.jpg" alt="" class="wp-image-2009"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>Overbite is the problem where your lower teeth bite into the roof of your mouth or sometimes completely vanish when you chew. If this issue remains untreated, it may damage gum tissues and the front teeth.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Orthodontics can help enhance the appearance of your smile by fixing the overbite. However, it is easier to fix overbite issues in children because their jaws are still developing.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {"level":5} -->\n<h5 id="corrects-underbite">Corrects Underbite</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>If your lower teeth overlap the front teeth while you smile, this is known as an underbite. An underbite is severe while talking and eating and may cause oral injury.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>If you think you are struggling with an underbite, then it is time to consult your orthodontist.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {"level":5} -->\n<h5 id="helps-open-bite">Helps Open Bite</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>If there is a noticeable gap between your upper and lower teeth, then this is called an open bite. People suffering from the open bite may have problems with speaking and eating. Suppose you are suffering from an open bite. In that case, orthodontists can correct your smile through orthodontic treatments such as traditional metal braces, ceramic braces, or Invisalign.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {"level":5} -->\n<h5 id="closes-spacing">Closes Spacing</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>If the teeth are irregularly spaced, it may create spaces between them. Some of the teeth will look small as compared to others.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>The gaps must be closed between the teeth, essential to protect your oral health. If the teeth are widely spaced, food particles may get stuck there. It may result in bad breath, plaque formation, and tooth decay.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {"level":5} -->\n<h5 id="adjust-crowding">Adjust Crowding</h5>\n<!-- /wp:heading -->\n\n<!-- wp:image {"align":"left","id":2010,"width":316,"height":198,"sizeSlug":"full","linkDestination":"none"} -->\n<div class="wp-block-image"><figure class="alignleft size-full is-resized"><img src="https://abar.vigorant.xyz/wp-content/uploads/2022/02/crowding.jpg" alt="" class="wp-image-2010" width="316" height="198"/></figure></div>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>The most common to go for orthodontic treatment is crowding the teeth. If there is not enough room in the mouth, this problem is known as crowding. It causes the teeth to overlap and cause problems. If the issue is solved, there is a remarkable improvement in the smile.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Fixing crowded teeth can prevent cavities. Once the teeth are straightened, no more plaque can be formed.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>If you have these issues, it is time to go for orthodontic treatments. The orthodontist will help n fixing the issue and align the teeth, which will help prevent further problems.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href="https://abar.vigorant.xyz/contact">Contact</a> your Pinole dentist, Dr. Hoss Abar, DDS, MSD at <a href="https://abar.vigorant.xyz/">Abar Orthodontics</a> to learn more and get started with your orthodontic treatments.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><em>*Neither this nor any other content in this media is meant to prescribe, recommend, or prevent any treatment or procedure.\u202fWe\u202fhighly recommend that you get the advice of a qualified dentist or other medical practitioners regarding your specific dental condition</em></p>\n<!-- /wp:paragraph -->',
				date: 'August 31, 2022',
				slug: 'https://abar.vigorant.xyz/image-testing/',
				category: [
					{
						term_id: 12,
						name: 'Orthodontics',
						slug: 'orthodontics',
						term_group: 0,
						term_taxonomy_id: 12,
						taxonomy: 'category',
						description: '',
						parent: 0,
						count: 16,
						filter: 'raw',
						cat_ID: 12,
						category_count: 16,
						category_description: '',
						cat_name: 'Orthodontics',
						category_nicename: 'orthodontics',
						category_parent: 0,
					},
				],
				thumbnail:
					'https://abar.vigorant.xyz/wp-content/uploads/2022/02/orthodontic-treatment.jpg',
			},
		];
		// console.log("xml data here",XMLData)
		// console.log("json data", jsonData)

		const mapData = XMLData?.map((wpPost) => {
			var el = document.createElement('html');
			el.innerHTML = wpPost.content;

			let imgs = el.getElementsByTagName('img');
			for (let img of imgs) {
				img.src = `https://adminpwdds.vigorant.xyz/uploads/${
					img?.src.split('/')[img?.src.split('/').length - 1]
				}`;
				img.className = 'converted-images w-full h-full';
			}

			wpPost.content = el.innerHTML;

			let imageAddress = wpPost.thumbnail?.lastIndexOf('/');
			let twoFake = wpPost.thumbnail?.slice(imageAddress + 1);

			wpPost.thumbnail = twoFake;

			// for (const [key, value] of Object.entries(wpPost)) {
			//   let modded=key.replace("wp:","");
			//   modded=modded.replace(":encoded","");
			//   wpPost[modded]=value;
			//   key.includes("wp:") || key.includes(":encoded") && delete wpPost[key];
			// }
			// console.log("ep.content", wpPost.content)
			return {
				...required,
				status: 'published',
				id: uuid(),
				title: wpPost.title,
				description: turndownService.turndown(wpPost.excerpt),
				slug: wpPost.slug.slice(32, -1),
				image: wpPost.thumbnail,
				body: wpPost.content,
				createdAt: new Date(wpPost.date),
				updatedAt: new Date(wpPost.date),
				publishedAt: new Date(wpPost.date),
				// category: {
				//   id: wpPost?.category[0].term_id,
				//   name: wpPost?.category[0]?.name
				// },
			};
		});
		console.log('map data here', mapData);
		mapData?.map((sin, index) => {
			// axios.post("https://adminpwdds.vigorant.xyz/api/blogs", {
			//     data: {
			//         // id:sin.id,
			//         title: sin.title,
			//         description: sin.description.slice(0, 150).concat("..."),
			//         slug: sin.slug,
			//         body: sin.body,
			//         createdAt: sin.createdAt,
			//         updatedAt: sin.updatedAt,
			//         publishedAt: sin.publishedAt,
			//         imagePath:sin.image
			//     }
			// })
			console.log(`data here of blog${index}`, {
				data: {
					title: sin.title,
					description: sin.description.slice(0, 150).concat('...'),
					slug: sin.slug,
					body: sin.body,
					createdAt: sin.createdAt,
					updatedAt: sin.updatedAt,
					publishedAt: sin.publishedAt,
					imagePath: sin.image,
				},
			});
		});

		setDataMark(mapData);
	}, [dataXml]);

	return <div>test</div>;
};

export default Convert;
