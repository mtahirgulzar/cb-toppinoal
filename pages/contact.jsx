import React from "react";
import dynamic from "next/dynamic";
import { adminPath } from "../utils/constants";
const Layout = dynamic(() => import("../src/components/Layout"));
const Hero = dynamic(() => import("../src/components/Hero"));
const Title = dynamic(() => import("../src/components/common/Title"));
const MarkBody = dynamic(() => import("../src/components/MarkBody"));
const Info = dynamic(() => import("../src/components/Info"));
const KeepTouch = dynamic(() => import("../src/components/KeepTouch"));
const LocIframe = dynamic(() => import("../src/components/LocIframe"));

const Contact = ({
  siteData,
  pageData,
  navServices,
  navCat,
  ModalServices,
}) => {
  return (
    <Layout
      data={siteData}
      SeoData={pageData?.seo}
      navServices={navServices}
      ourservices={ModalServices}
      navCat={navCat}
    >
      <Hero data={pageData?.hero} contact={pageData} />
      <Title data={pageData?.title && pageData?.title[0]} red />
      <MarkBody cusClass={`cus-contact-body`} data={pageData?.body} />
      <Info data={pageData?.info} />
      <KeepTouch title={pageData?.title && pageData?.title[1]} />
      <LocIframe />
    </Layout>
  );
};

export default Contact;

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let navCat = null;
  let ModalServices = null;

  try {
    navCat = await (
      await fetch(`${adminPath}/services-categories?fields[0]=name`)
    ).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    pageData = await (await fetch(`${adminPath}/contact?populate=deep`)).json();
    navServices = await (
      await fetch(
        `${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`
      )
    ).json();
    ModalServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
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
