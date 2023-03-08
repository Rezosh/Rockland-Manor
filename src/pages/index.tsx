import client from "@/client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Contact from "@/components/contact";

type SanityFileLink = {
  fileUrl: string;
};

type SanityImageLink = {
  title: string;
  imageLinks: string[];
};

export const getStaticProps = async () => {
  const activityCalendar = await client.fetch(
    `*[_type == "activityCalendar"] | order(_createdAt desc)[0] | {"fileUrl": file.asset->url}
    `
  );
  const monthlyNewsletter = await client.fetch(
    `*[_type == "monthlyNewsletter"] | order(_createdAt desc)[0] | {"fileUrl": file.asset->url}
    `
  );

  const activityImages = await client.fetch(
    `*[_type == "activityImages"] {title, "imageLinks": imageGallery[].asset ->url}`
  );

  return {
    props: {
      activityCalendar,
      monthlyNewsletter,
      activityImages,
    },
  };
};

const Index = ({
  activityCalendar,
  monthlyNewsletter,
  activityImages,
}: {
  activityCalendar: SanityFileLink;
  monthlyNewsletter: SanityFileLink;
  activityImages: SanityImageLink[];
}) => {
  return (
    <>
      <div className='space-x-2'>
        <a
          href={activityCalendar.fileUrl}
          target='_blank'
          className='inline-flex items-center gap-x-2 rounded-md bg-brown-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600'>
          Activity Calendar
          <ArrowTopRightOnSquareIcon
            className='-mr-0.5 h-5 w-5'
            aria-hidden='true'
          />
        </a>
        <a
          href={monthlyNewsletter.fileUrl}
          target='_blank'
          className='inline-flex items-center gap-x-2 rounded-md bg-brown-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600'>
          Monthly Newsletter
          <ArrowTopRightOnSquareIcon
            className='-mr-0.5 h-5 w-5'
            aria-hidden='true'
          />
        </a>
      </div>
      <Contact />
    </>
  );
};

export default Index;
