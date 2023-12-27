import CTA from "@/components/CallToAction";
import Container from "@/components/Container";
import { Heading, SubHeading } from "@/components/Heading";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { BiBath, BiBed, BiHome } from "react-icons/bi";

import manorTheatre from "../../public/manor-theatre.png";
import manorBar from "../../public/manor-bar.png";
import manorLibrary from "../../public/manor-library.png";
import manorChapel from "../../public/manor-chapel.jpg";
import manorSalon from "../../public/manor-salon.png";
import manorLobby from "../../public/manor-lobby.png";
import Carousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import useTranslation from "next-translate/useTranslation";

const Accommodations = () => {
  const { t } = useTranslation("accommodations");
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;

  const suites = [
    {
      name: t("studio-suite"),
      heading: t("studio-suite-subheader"),
      description: t("studio-suite-desc"),

      features: {
        type: "Studio",
        bath: `1 ${t("bath")}`,
        size: `300 - 400 ${t("sqft")}`,
      },
      images: [
        "/small-studio.png",
        "/studio-with-balcony.png",
        "/studio-suite-1.jpg",
        "/studio-suite-2.jpg",
        "/studio-suite-3.jpg",
      ],
    },
    {
      name: t("studio-with-den"),
      heading: t("studio-with-den-subheader"),
      description: t("studio-with-den-desc"),
      features: {
        type: "Studio",
        bath: `1 ${t("bath")}`,
        size: `400 - 550 ${t("sqft")}`,
      },
      images: [
        "/studio-with-den.png",
        "/studio-den-1.jpg",
        "/studio-den-2.jpg",
      ],
    },
    {
      name: t("one-bedroom-suite"),
      heading: t("one-bedroom-suite-subheader"),
      description: t("one-bedroom-suite-desc"),
      features: {
        type: "1 Bedroom",
        bath: `1 ${t("bath")}`,
        size: `650 - 800 ${t("sqft")}`,
      },
      images: ["/one-bed-suite.png"],
    },
    {
      name: t("studio-suite-care-side"),
      heading: t("studio-suite-care-side-subheader"),
      description: t("studio-suite-care-side-desc"),
      features: {
        type: "Studio",
        bath: `1 ${t("bath")}`,
        size: `350 - 400 ${t("sqft")}`,
      },
      images: ["/studio-assisted.png"],
    },
  ];

  return (
    <>
      <section>
        <Container>
          <div className="py-24">
            <div className="mb-20 flex w-full flex-col text-center">
              <Heading
                title={t("header")}
                className="text-center lg:text-center"
              />
              <p className="mx-auto text-center text-base leading-relaxed">
                {t("subheader")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-4 ">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorTheatre}
                  alt=""
                />
                <div className="py-4 text-center">{t("theatre")}</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorBar}
                  alt=""
                />
                <div className="py-4 text-center">{t("bar")}</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorLibrary}
                  alt=""
                />
                <div className="py-4 text-center">{t("library")}</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorChapel}
                  alt=""
                />
                <div className="py-4 text-center">{t("chapel")}</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorSalon}
                  alt=""
                />
                <div className="py-4 text-center">{t("hair-salon")}</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={manorLobby}
                  alt=""
                />
                <div className="py-4 text-center text-base">{t("lobby")}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-10">
        <Container>
          <div className="px-4">
            <SubHeading
              title={t("suite-options")}
              className="text-center lg:text-center"
            />
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              {t("suite-options-subheader")}
            </p>
          </div>
          <div className="w-full space-y-2 px-4 pt-16">
            {suites.map((suite) => {
              return (
                <Disclosure key={suite.name}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 p-4 text-left text-base text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{suite.name}</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="p-3 py-6 text-sm text-gray-500 md:p-6">
                        <div className="mx-auto flex max-w-full flex-col space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0">
                          <div>
                            <h1 className="text-base font-medium">
                              {suite.heading}
                            </h1>
                            <div className="mt-3">
                              <div>
                                <div className="flex flex-col gap-1 lg:flex-row lg:gap-4">
                                  <span className="inline-flex items-center text-dark-brown-900">
                                    <BiBed className="mr-2 h-4 w-4" />
                                    {suite.features.type}
                                  </span>
                                  <span className="inline-flex items-center text-dark-brown-900">
                                    <BiBath className="mr-2 h-4 w-4" />
                                    {suite.features.bath}
                                  </span>
                                  <span className="inline-flex items-center text-dark-brown-900">
                                    <BiHome className="mr-2 h-4 w-4" />
                                    {suite.features.size}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="my-6">
                              <p className="text-left">{suite.description}</p>
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-center justify-evenly gap-4 lg:flex-row">
                            <Carousel images={suite.images} options={OPTIONS} />
                            {/* {suite.images.map((image, idx) => {
                              return (
                                <figure key={idx}>
                                  <Image
                                    src={image.src}
                                    className="h-96 w-auto"
                                    alt={image.alt}
                                  />
                                  <figcaption className="pt-2 text-center">
                                    {image.caption}
                                  </figcaption>
                                </figure>
                              );
                            })} */}
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
          <div className="mt-24">
            <CTA />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Accommodations;
