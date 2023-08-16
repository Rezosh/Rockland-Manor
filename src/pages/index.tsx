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

type SanityFileLink = {
  fileUrl: string;
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

const Index = ({ activityCalendar }: { activityCalendar: SanityFileLink }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row-reverse">
          <Image src={heroImage} className="h-auto w-auto lg:w-1/2" alt="" />
          <div className="flex flex-col items-center justify-center bg-cream p-10 text-center lg:w-1/2 lg:items-start lg:p-16 lg:text-left">
            <Heading title="Experience the Carefree Lifestyle You Deserve." />
            <p className="mb-8">
              At Rockland Manor, we believe in helping our residents live life
              to the fullest by providing a comfortable and enjoyable lifestyle,
              with a range of services and amenities designed to allow them to
              pursue their passions and maintain their independence
            </p>
            <div className="w-fit text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center gap-x-2 rounded bg-coral py-3 px-4 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:text-white"
              >
                Book A Tour
              </a>
            </div>
          </div>
        </div>

        <section className="mt-16 flex flex-col items-center justify-between py-16 text-center  lg:flex-row lg:text-left">
          <Heading
            title="Experience Comfortable Living At Rockland Manor"
            className="max-w-xl lg:max-w-lg"
          />
          <p className="max-w-xl lg:max-w-lg">
            At Rockland Manor, we understand that every resident is unique, with
            their own needs and preferences. That&apos;s why we offer a wide
            range of services and amenities to cater to your individual needs.
            Whether you&apos;re looking for assistance with daily tasks, such as
            housekeeping and meal preparation, or simply want to enjoy some
            social activities with like-minded individuals, we&apos;ve got you
            covered.
          </p>
        </section>
      </Container>

      <section
        className="mt-16 bg-[url('/services-bg.png')] py-16"
        id="services"
      >
        <Container>
          <Heading title="Our Care" />
          <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex max-w-sm flex-col">
              <Image
                src={independentServicesImg}
                className="h-full w-auto"
                alt=""
              />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">
                  Independent Living
                </h3>
                <p className="mb-8">
                  Our independent living program is designed to provide a
                  carefree and enjoyable lifestyle, allowing residents to focus
                  on the things they love without worrying about the upkeep of a
                  home.
                </p>
                <div className="w-fit">
                  <Link
                    href="/services/independent-living"
                    className="group transition duration-300"
                  >
                    Read More &#8594;
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
                  Semi-Independent Living
                </h3>
                <p className="mb-8">
                  Our semi-independent living program allows residents to live
                  comfortably and independently while enjoying the peace of mind
                  that comes with having access to support and assistance when
                  needed.
                </p>
                <div className="w-fit">
                  <Link
                    href="/services/semi-independent"
                    className="group transition duration-300"
                  >
                    Read More &#8594;
                    <span className="block h-0.5 max-w-0 bg-dark-brown-600 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex max-w-sm flex-col">
              <Image src={memoryServiceImg} className="h-full w-auto" alt="" />
              <div className="flex flex-col bg-white py-6 px-8">
                <h3 className="mb-6 text-2xl font-medium">Memory Care</h3>
                <p className="mb-8">
                  Our memory care program provides a supportive and caring
                  environment for our residents, allowing them to maintain their
                  independence and while receiving the care and assistance they
                  need to thrive.
                </p>
                <div className="w-fit">
                  <Link
                    href="/services/memory-care"
                    className="group transition duration-300"
                  >
                    Read More &#8594;
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
                <h3 className="mb-6 text-2xl font-medium">
                  Restaurant-Style Dining
                </h3>
                <p className="mb-8 max-w-md">
                  We know how good meals are important and promise to prepare
                  delicious home-cooked meals made from scratch each day by our
                  team of trained culinary professionals. Residents can select
                  from a variety of “à la carte” menu choices designed with
                  their health, tastes and preferences in mind.
                </p>
                <a
                  href="#"
                  className="inline-flex max-w-sm items-center gap-x-2 rounded underline"
                >
                  Sample Menu{" "}
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
                  Stay Active and Engaged
                </h3>
                <p className="mb-8 max-w-md">
                  At Rockland Manor, we believe that staying active and engaged
                  is an essential part of maintaining physical and mental
                  well-being. That&apos;s why we offer a diverse range of
                  recreational activities, including fitness classes, crafts,
                  music, and outings. Whether you&apos;re looking to try
                  something new or stick with familiar hobbies, there&apos;s
                  something for everyone at Rockland Manor.
                </p>

                <a
                  href={activityCalendar.fileUrl}
                  target="_blank"
                  className="inline-flex max-w-sm items-center gap-x-2 rounded underline"
                >
                  Activity Calendar
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
                Ready to experience the comfort and community of Rockland Manor
                for yourself?
              </h3>
              <p className="mb-8 text-center lg:text-left">
                Schedule a tour today and discover your new home!
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default Index;
