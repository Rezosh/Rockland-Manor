import client from "@/client";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Heading } from "@/components/Heading";
import {
  CalendarDaysIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/hero-img.png";
import independentServicesImg from "../../public/services-independant.png";
import semiIndependentServicesImg from "../../public/services-semi.png";
import memoryServiceImg from "../../public/services-memory.png";

import useTranslation from "next-translate/useTranslation";

type SanityFileLink = {
  fileUrl: string;
};

type PageProps = {
  activityCalendar: SanityFileLink;
};

export const getStaticProps = async () => {
  const activityCalendar = await client.fetch(
    `*[_type == "activityCalendar"] | order(_createdAt desc)[0] | {"fileUrl": file.asset->url}
    `
  );

  return {
    props: {
      activityCalendar,
    },
    revalidate: 60,
  };
};

const Index = (props: PageProps) => {
  const { t, lang } = useTranslation("common");

  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row-reverse">
          <Image src={heroImage} className="h-auto w-auto lg:w-1/2" alt="" />
          <div className="flex flex-col items-center justify-center bg-cream p-10 text-center lg:w-1/2 lg:items-start lg:p-16 lg:text-left">
            <Heading title={t("hero-title")} />
            <p className="mb-8">{t("hero-paragraph")}</p>
            <div className="w-fit text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center gap-x-2 rounded bg-coral py-3 px-4 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:text-white"
              >
                {t("cta-btn")}
              </a>
            </div>
          </div>
        </div>

        <section className="mt-16 flex flex-col items-center justify-between py-16 text-center  lg:flex-row lg:text-left">
          <Heading title={t("header-2")} className="max-w-xl lg:max-w-lg" />
          <p className="max-w-xl lg:max-w-lg">{t("paragraph-2")}</p>
        </section>
      </Container>

      <section
        className="mt-16 bg-[url('/services-bg.png')] py-16"
        id="services"
      >
        <Container>
          <Heading title={t("services-header")} />
          <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex max-w-sm flex-col">
              <Image
                src={independentServicesImg}
                className="h-full w-auto"
                alt=""
              />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">
                  {t("independent-living-header")}
                </h3>
                <p className="mb-8 text-left">
                  {t("independent-living-paragraph")}
                </p>
                <div className="w-fit">
                  <Link
                    href="/services/independent-living"
                    className="group transition duration-300"
                  >
                    {t("read-more")} &#8594;
                    <span className="block h-0.5 max-w-0 bg-dark-brown-600 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex max-w-sm flex-col">
              <Image
                src={semiIndependentServicesImg}
                className="h-full w-auto"
                alt=""
              />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">
                  {t("semi-independent-living-header")}
                </h3>
                <p className="mb-8 text-left">
                  {t("semi-independent-living-paragraph")}
                </p>
                <div className="w-fit">
                  <Link
                    href="/services/semi-independent"
                    className="group transition duration-300"
                  >
                    {t("read-more")} &#8594;
                    <span className="block h-0.5 max-w-0 bg-dark-brown-600 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex max-w-sm flex-col">
              <Image src={memoryServiceImg} className="h-full w-auto" alt="" />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">
                  {t("memory-care-header")}
                </h3>
                <p className="mb-8 text-left">{t("memory-care-paragraph")}</p>
                <div className="w-fit">
                  <Link
                    href="/services/memory-care"
                    className="group transition duration-300"
                  >
                    {t("read-more")} &#8594;
                    <span className="block h-0.5 max-w-0 bg-dark-brown-600 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 lg:mt-44">
        <Container>
          <div className="mt-10 flex flex-col items-center gap-10 lg:gap-40">
            <div className="flex flex-col items-center gap-10 lg:flex-row">
              <Image
                src="/amenities-dining.jpg"
                height={500}
                width={500}
                className="rounded-tl-3xl rounded-br-3xl"
                alt=""
              />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium ">
                  {t("dining-header")}
                </h3>
                <p className="mb-8 max-w-md">{t("dining-paragraph")}</p>
                <a
                  href="/SampleMenu.pdf"
                  target="_blank"
                  className="inline-flex max-w-sm items-center gap-x-2 rounded underline"
                >
                  {t("dining-cta")}{" "}
                  <DocumentArrowDownIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
              <Image
                src="/amenities-activities.jpg"
                height={500}
                width={500}
                className="rounded-tl-3xl rounded-br-3xl"
                alt=""
              />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">
                  {t("activities-header")}
                </h3>
                <p className="mb-8 max-w-md">{t("activities-paragraph")}</p>

                <a
                  href={props.activityCalendar.fileUrl}
                  target="_blank"
                  className="inline-flex max-w-sm items-center gap-x-2 rounded underline"
                >
                  {t("activities-cta")}{" "}
                  <CalendarDaysIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* small cta section */}
      <section className="mt-16 bg-cream py-16">
        <Container>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-center text-2xl font-medium lg:text-left">
                {t("cta-footer-header")}
              </h3>
              <p className="mb-8 text-center lg:text-left">
                {t("cta-subheader")}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section id="contact">
        <ContactForm props={props} />
      </section>
    </div>
  );
};

export default Index;
