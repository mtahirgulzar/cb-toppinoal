import React from 'react'
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import("../../src/components/Layout"));
const Hero = dynamic(() => import("../../src/components/Hero"));
const MarkBody = dynamic(() => import("../../src/components/MarkBody"));
const Title = dynamic(() => import("../../src/components/common/Title"));
import { adminPath } from "../../utils/constants"


const Index = ({ siteData, singleService, navServices, navCat, ModalServices }) => {
    console.log("navServices >>>",navServices   )
    return (
        <Layout data={siteData} SeoData={singleService?.SEO} navServices={navServices} navCat={navCat} ourservices={ModalServices}>
            <Hero data={singleService} />
            <Title data={singleService?.title} red />
            <MarkBody cusClass={`cus-service-body py-[40px]`} data={singleService?.body} />
        </Layout>
    )
}
export default Index;
export async function getStaticPaths() {
    const blogData = await (
        await fetch(`${adminPath}/services?fields[0]=slug`)
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
    let singleService = null;
    let siteData = null;
    let navServices = null;
    let navCat = null;
    let ModalServices = null;
    try {
        siteData = await (await fetch(adminPath + `/site?populate=deep`)).json();
        navServices = await (await fetch(`${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`)).json();
        ModalServices = await (await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)).json();
        navCat = await (await fetch(`${adminPath}/services-categories?fields[0]=name`)).json();
        singleService = await (
            await fetch(`${adminPath}/services/${slug}?populate=deep`)
        ).json();

    } catch (err) {
        console.log("dynamic page error", err);
    }

    return {
        props: {
            singleService: singleService?.data?.attributes || null,
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
