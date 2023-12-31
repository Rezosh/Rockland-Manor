import Image from "next/image";
import Link from "next/link";

import { Heading, SubHeading } from "@/components/Heading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import headerImage from "../../../public/services-header.jpg";
import ctaImage from "../../../public/services-cta.jpg";
import useTranslation from "next-translate/useTranslation";

const SemiIndependentCarePage = () => {
  const { t } = useTranslation("semi-independent-living");

  const amenities = [
    t("weekly-housekeeping"),
    t("weekly-laundry"),
    t("beauty-salon"),
    t("library"),
    t("fitness-center"),
    t("games-and-billiard-room"),
    t("movie-theatre"),
    t("delicious-meals-daily"),
    t("on-site-chapel"),
    t("social-events-and-activities"),
    t("outdoor-terrace"),
    t("24-hour-on-site-staff"),
  ];
  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-t from-[#b9a284]">
        <Image
          src={headerImage}
          className="h-[250px] w-full object-cover mix-blend-overlay"
          alt="Picture of the Rockland Manor front entrance"
        />
        <Heading className="absolute text-white">{t("header")}</Heading>
      </div>

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="flex flex-col gap-20">
            <div>
              <SubHeading>{t("subheader")}</SubHeading>
              <p className="text-center lg:text-left">{t("paragraph")}</p>
            </div>

            <div>
              <SubHeading>{t("subheader2")}</SubHeading>
              <p className="text-center lg:text-left">{t("paragraph2")}</p>
            </div>

            <div>
              <SubHeading>{t("subheader3")}</SubHeading>
              <p className="text-center lg:text-left">{t("paragraph3")}</p>
              <ul className="mt-10 grid lg:grid-cols-3 ">
                {amenities.map((amenity) => (
                  <li
                    key={amenities.indexOf(amenity)}
                    className="mb-2 inline-flex items-center gap-1.5"
                  >
                    <span>
                      <CheckIcon className="h-5 w-5 text-dark-brown-600" />
                    </span>{" "}
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center bg-cream lg:flex-row">
        <Image
          src={ctaImage}
          className="h-[400px] w-full object-cover lg:w-1/2"
          alt="Image of rockland manor exterior"
        />
        <div className="p-12 text-center lg:text-left">
          <SubHeading>{t("cta-header")}</SubHeading>
          <p>{t("cta-paragraph")}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-x-1.5 rounded bg-coral px-4 py-2.5 text-sm font-semibold text-white hover:bg-coral/80 hover:text-white"
          >
            {t("cta-button")}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SemiIndependentCarePage;
