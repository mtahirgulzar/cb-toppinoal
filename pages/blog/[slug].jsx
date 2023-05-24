import React from 'react'
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import("../../src/components/Layout"));
const Hero = dynamic(() => import("../../src/components/Hero"));
const MarkBody = dynamic(() => import("../../src/components/MarkBody"));
import { adminPath } from "../../utils/constants"
// import Author from "./author"




const Index = ({ siteData, singleBlog, navServices, navCat, ModalServices }) => {
    return (
        <Layout data={siteData} SeoData={singleBlog?.SEO} navServices={navServices} navCat={navCat} ourservices={ModalServices} >
            <Hero data={singleBlog} blog />
            {/* <Title data={singleBlog} red /> */}
            <MarkBody cusClass={`cus-blog-body py-[40px]`} data={singleBlog?.body} />
            {/* <Author data={singleBlog?.author?.data?.attributes} /> */}
        </Layout>
    )
}

export default Index;


export async function getStaticPaths() {
    const blogData = await (
        await fetch(`${adminPath}/blogs?fields[0]=slug`)
    ).json();

    const paths = blogData?.data?.map((post) => {
        return {
            params: { slug: `${post?.attributes?.slug}` },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const slug = context?.params?.slug;
    let singleBlog = null;
    let siteData = null;
    let navServices = null;
    let navCat = null;
    let ModalServices = null;

    try {
        siteData = await (await fetch(adminPath + `/site?populate=deep`)).json();
        navServices = await (await fetch(`${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`)).json();
        ModalServices = await (await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)).json();
        navCat = await (await fetch(`${adminPath}/services-categories?fields[0]=name`)).json();

        singleBlog = await (
            await fetch(`${adminPath}/blogs/${slug}?populate=deep`)
        ).json();

    } catch (err) {
        console.log("dynamic page error", err);
    }


    return {
        props: {
            singleBlog: singleBlog?.data?.attributes || null,
            siteData: siteData?.data?.attributes || null,
            navCat: navCat?.data?.sort(
                (a, b) =>
                    new Date(a.attributes.createdAt) -
                    new Date(b.attributes.createdAt)

            ) || null,
            navServices: navServices?.data
                ?.sort(
                    (a, b) =>
                        new Date(b.attributes.createdAt) -
                        new Date(a.attributes.createdAt)
                ) || null,
            ModalServices:
                ModalServices?.data
                    ?.sort(
                        (a, b) =>
                            new Date(b.attributes.createdAt) -
                            new Date(a.attributes.createdAt)
                    )
                    .slice(0, 10) || null,
        },
    };
}
