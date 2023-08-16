import Image from "next/image";
import Link from "next/link";

import { Heading, SubHeading } from "@/components/Heading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import headerImage from "../../../public/services-header.jpg";
import ctaImage from "../../../public/services-cta.jpg";

const amenities = [
  "Weekly Housekeeping",
  "Weekly Laundry",
  "Beauty Salon",
  "Library",
  "Fitness Centre",
  "Games and Billiard Room",
  "Movie Theatre",
  "3 Delicious Meals Daily",
  "On-Site Chapel",
  "Social Events and Activities",
  "Outdoor Terrace",
  "24 Hour On-Site Staff",
];

const SemiIndependentCarePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-t from-[#b9a284]">
        <Image
          src={headerImage}
          className="h-[250px] w-full object-cover mix-blend-overlay"
          alt="Picture of the Rockland Manor front entrance"
        />
        <Heading
          title="Semi - Independent Living At Rockland Manor"
          className="absolute text-white"
        />
      </div>

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="flex flex-col gap-20">
            <div>
              <SubHeading title="Semi - Independent Living at Rockland Manor" />
              <p className="text-center lg:text-left">
                As we get older, sometimes we need a little extra help to
                maintain our independence. That&apos;s why at Rockland Manor, we
                offer semi-independent living for individuals who could use some
                assistance but still want to retain their freedom. You&apos;ll
                have your own private room and belongings, and access to all of
                our amenities and activities. Plus, our health professionals and
                staff are always available to lend a helping hand when needed.
                If you or a loved one is looking for a supportive community,
                choose Rockland Manor for a comfortable and worry-free
                lifestyle.
              </p>
            </div>

            <div>
              <SubHeading title="Find a Supportive Community with Top-Notch Amenities and a Helping Hand" />
              <p className="text-center lg:text-left">
                Leaving your longtime home can be a difficult transition. But at
                Rockland Manor, we&apos;re here to make it easier. Our community
                offers semi-independent living that gives you the privacy of
                your own room or suite, while also providing access to all of
                our common areas, amenities, and social activities. Plus, our
                24-hour staff is always available to lend a helping hand
                whenever you need it. We offer assistance with a wide range of
                tasks, so you can focus on enjoying your new worry-free
                lifestyle.
              </p>
            </div>

            <div>
              <SubHeading title="Experience Supportive and Independent Living with Our Semi-Independent Services and Amenities" />
              <p className="text-center lg:text-left">
                At Rockland Manor, our semi-independent living services provide
                assistance with a variety of daily activities, including
                bathing, dressing, and ambulation. Our 24-hour staff is always
                on hand to help you maintain your independence while providing
                the support you need. In addition, we offer medication
                management, regular health assessments, and other personalized
                care services. In addition, our community offers a wide range of
                amenities and services to make your life easier and more
                enjoyable, such as:
              </p>
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
          <SubHeading title="Join Our Vibrant Community Today!" />
          <p>
            Ready to experience the comfort and convenience of living at
            Rockland Manor? Schedule a complimentary visit to see our community
            and learn more about our amenities and services. Join our vibrant
            community today and start living your best life!
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-x-1.5 rounded bg-coral px-4 py-2.5 text-sm font-semibold text-white hover:bg-coral/80 hover:text-white"
          >
            Book a Tour
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SemiIndependentCarePage;
