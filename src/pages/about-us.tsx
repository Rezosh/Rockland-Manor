import Container from "@/components/Container";
import { SubHeading } from "@/components/Heading";
import Image from "next/image";

import aboutUsRocklandImg from "../../public/about-us-rockland-image.png";
import useTranslation from "next-translate/useTranslation";

const AboutUsPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <Container>
        <div className="flex flex-col space-y-5 bg-cream md:flex-row-reverse ">
          <Image
            src={aboutUsRocklandImg}
            alt=""
            placeholder="blur"
            className="h-auto w-full object-cover md:w-1/2"
          />
          <div className="p-12 text-center lg:text-left">
            <SubHeading>{t("about-us-header")}</SubHeading>
            <p>{t("about-us-paragraph")}</p>
            <p className="mt-10">{t("about-us-paragraph-2")}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
