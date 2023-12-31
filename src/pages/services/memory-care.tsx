import Image from "next/image";
import Link from "next/link";

import { Heading, SubHeading } from "@/components/Heading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "../../../public/services-cta.jpg";
import headerImage from "../../../public/services-header.jpg";
import useTranslation from "next-translate/useTranslation";

const MemoryCarePage = () => {
  const { t } = useTranslation("memory-care");
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

            <div className="space-y-10">
              <div>
                <SubHeading>{t("subheader2")}</SubHeading>
                <p>{t("paragraph2")}</p>
              </div>

              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  {t("list-1-header")}
                </h3>
                <p>{t("list-1-paragraph")}</p>
              </div>
              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  {t("list-2-header")}
                </h3>
                <p>{t("list-2-paragraph")}</p>
              </div>
              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  {t("list-3-header")}
                </h3>
                <p>{t("list-3-paragraph")}</p>
              </div>
            </div>

            <div>
              <SubHeading>{t("subheader3")}</SubHeading>
              <p className="text-center lg:text-left">{t("paragraph3")}</p>
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

export default MemoryCarePage;
