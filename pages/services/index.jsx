import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../src/components/Layout"));
const Hero = dynamic(() => import("../../src/components/Hero"));
const Title = dynamic(() => import("../../src/components/common/Title"));
const PaginatedBlogs = dynamic(() => import("../../src/components/PaginatedBlogs"));
import { adminPath } from "../../utils/constants";


const Services = ({
  siteData,
  pageData,
  navServices,
  navCat,
  ModalServices,
}) => {
  return (
    <Layout
      data={siteData}
      SeoData={pageData?.SEO}
      navServices={navServices}
      navCat={navCat}
      ourservices={ModalServices}
    >
      <Hero data={pageData?.hero} />
      <Title data={pageData?.title} red />
      <PaginatedBlogs data={navServices} service />
      {/* <MarkBody cusClass={`cus-service-body py-[40px]`} data={pageData?.body}/> */}
    </Layout>
  );
};

export default Services;

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let navCat = null;
  let ModalServices = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    pageData = await (
      await fetch(`${adminPath}/our-service?populate=deep`)
    ).json();
    navServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=services_categories`)
    ).json();
    ModalServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
    ).json();
    navCat = await (
      await fetch(`${adminPath}/services-categories?fields[0]=name`)
    ).json();
  } catch (err) {
    console.log("error", err);
  }

  return {
    props: {
      siteData: siteData?.data?.attributes || null,
      pageData: pageData?.data?.attributes || null,
      navCat:
        navCat?.data?.sort(
          (a, b) =>
            new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)
        ) || null,
      navServices:
        navServices?.data?.sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
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
