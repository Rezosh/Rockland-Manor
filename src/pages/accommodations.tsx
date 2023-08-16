import CTA from "@/components/CallToAction";
import Container from "@/components/Container";
import { Heading, SubHeading } from "@/components/Heading";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { BiBath, BiBed, BiHome } from "react-icons/bi";

const suites = [
  {
    name: "Studio Suite",
    heading: "Suitable for a single person with a living area and a bathroom.",
    description:
      "Studio suites are open concept bedroom and sitting area varying in sizes, some with balconies and/or kitchenettes. Suites are availible with a 3-piece bathroom, and a large closet.",

    features: {
      type: "Studio",
      bath: "1 Bath",
      size: "300 - 400 Sq. Ft.",
    },
    images: [
      {
        src: "/small-studio.png",
        alt: "Small Studio",
        caption: "Studio Suite",
      },
      {
        src: "/studio-with-balcony.png",
        alt: "Studio with Balcony",
        caption: "Studio with Balcony",
      },
    ],
  },
  {
    name: "Studio Suite with Den",
    heading:
      "Suitable for a single person with a living area, a bathroom, and a den.",
    description:
      "Studio suites with a den are open and spacious with a separate bedroom and sitting area varying in sizes. All suites have a kitchenette, a 3-piece bathroom, and a large closet.",
    features: {
      type: "Studio",
      bath: "1 Bath",
      size: "400 - 550 Sq. Ft.",
    },
    images: [
      {
        src: "/studio-with-den.png",
        alt: "Studio with Den",
        caption: "Studio with Den",
      },
    ],
  },
  {
    name: "One Bedroom Suite",
    heading:
      "Suitable for a single person or a couple with a living area, a bathroom, and a bedroom.",
    description:
      "Our one bedroom suites are spacious with a separate bedroom and sitting area varying in sizes, some with balconies. All suites have a kitchenette, a 3-piece bathroom, and a large closet.",
    features: {
      type: "1 Bedroom",
      bath: "1 Bath",
      size: "650 - 800 Sq. Ft.",
    },
    images: [
      {
        src: "/one-bed-suite.png",
        alt: "One Bedroom",
        caption: "One Bedroom Suite",
      },
    ],
  },
  {
    name: "Studio Suite - Assisted Living/Memory Care",
    heading: "Suitable for a single person with a living area, and a bathroom.",
    description:
      "Studio suites are open concept bedroom and sitting area varying in sizes, some with balconies. All suites have a 3-piece barrier free bathroom, and a large closet.",
    features: {
      type: "Studio",
      bath: "1 Bath",
      size: "350 - 400 Sq. Ft.",
    },
    images: [
      {
        src: "/studio-assisted.png",
        alt: "Studio Assisted Living",
        caption: "Studio Assisted Living",
      },
    ],
  },
];

const Accommodations = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-24">
            <div className="mb-20 flex w-full flex-col text-center">
              <Heading
                title="Accommodations"
                className="text-center lg:text-center"
              />
              <p className="mx-auto text-center text-base leading-relaxed">
                Explore some of our beautiful spaces at Rockland Manor.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-4 ">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-theatre.png"
                  alt=""
                />
                <div className="py-4 text-center">Theatre</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-bar.png"
                  alt=""
                />
                <div className="py-4 text-center">Bar</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-library.png"
                  alt=""
                />
                <div className="py-4 text-center">Library</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-chapel.jpg"
                  alt=""
                />
                <div className="py-4 text-center">Chapel</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-salon.png"
                  alt=""
                />
                <div className="py-4 text-center">Hair Salon</div>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/manor-lobby.png"
                  alt=""
                />
                <div className="py-4 text-center text-base">Lobby</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-10">
        <Container>
          <div className="px-4">
            <SubHeading
              title="Suite Options"
              className="text-center lg:text-center"
            />
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              All suites feature a 3-piece bathroom with safety grab bars, vinyl
              and laminate flooring, blinds, and casement style windows as well
              as individually set heating/cooling system. For your safety each
              suite constains a nurse call bell system via telephone in the room
              as well as a pull cord in the bathroom, smoke and heat detectors.
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
                            {suite.images.map((image, idx) => {
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
                            })}
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
