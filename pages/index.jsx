import { adminPath } from "../utils/constants";
import dynamic from "next/dynamic";
import PatientForm from "../src/components/PatientForms";
const AboutUs = dynamic(() => import("../src/components/AboutUs"), {
  ssr: false,
});
const HeroCarousal = dynamic(() => import("../src/components/HeroCarousal"));
const GeneralServices = dynamic(() =>
  import("../src/components/GeneralServices")
);
const Welcome = dynamic(() => import("../src/components/Welcome"));
const OurDentists = dynamic(() => import("../src/components/OurDentists"));
const OurServices = dynamic(() => import("../src/components/OurServices"));
const ImageSlider = dynamic(() => import("../src/components/ImageSlider"));
const KeepTouch = dynamic(() => import("../src/components/KeepTouch"));
const DentalProblemsCard = dynamic(() =>
  import("../src/components/OurServices/dentalProblemsCard")
);
const Layout = dynamic(() => import("../src/components/Layout"));

export default function Home({
  siteData,
  pageData,
  navServices,
  Services,
  ModalServices,
  navCat,
}) {
  return (
    <>
      <Layout
        data={siteData}
        SeoData={pageData?.seo}
        navServices={navServices}
        ourservices={ModalServices}
        navCat={navCat}
      >
        <HeroCarousal data={pageData?.hero} home={pageData} />
        <PatientForm />
        <Welcome
          data={pageData?.care}
          title={pageData?.titles && pageData?.titles[0]}
        />
        <GeneralServices data={Services} />
        <OurServices
          data={pageData?.services}
          title={pageData?.titles && pageData?.titles[2]}
        />
        <DentalProblemsCard />;
        <OurDentists
          data={pageData?.team}
          title={pageData?.titles && pageData?.titles[1]}
        />
        <ImageSlider data={pageData?.imgSlider} />
        <KeepTouch title={pageData?.titles && pageData?.titles[3]} />
        <AboutUs
        // data={pageData?.testimonials}
        // title={pageData?.titles && pageData?.titles[4]}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let siteData = null;
  let pageData = null;
  let navServices = null;
  let Services = null;
  let ModalServices = null;
  let navCat = null;

  try {
    siteData = await (await fetch(`${adminPath}/site?populate=deep`)).json();
    pageData = await (await fetch(`${adminPath}/home?populate=deep`)).json();
    Services = await (
      await fetch(`${adminPath}/services?populate=deep`)
    ).json();
    ModalServices = await (
      await fetch(`${adminPath}/services?fields[0]=title&fields[1]=slug`)
    ).json();
    navServices = await (
      await fetch(
        `${adminPath}/services?populate[0]=services_categories&fields[1]=title&fields[2]=slug`
      )
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
      Services:
        Services?.data
          ?.sort(
            (a, b) =>
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
          )
          .slice(0, 6) || null,
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
