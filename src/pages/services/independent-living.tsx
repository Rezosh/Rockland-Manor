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

const IndependentCarePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-t from-[#b9a284]">
        <Image
          src={headerImage}
          className="h-[250px] w-full object-cover mix-blend-overlay"
          alt="Picture of the Rockland Manor front entrance"
        />
        <Heading
          title="Independent Living At Rockland Manor"
          className="absolute text-white"
        />
      </div>

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="flex flex-col gap-20">
            <div>
              <SubHeading title="Join Our Independent Living Community" />
              <p className="text-center lg:text-left">
                As we enter our golden years, we all want to stay active,
                social, and have fun! Our focus shifts from taking care of our
                homes and families to cherishing time with loved ones, friends,
                and enjoying life. If you&apos;re at this stage in life, you
                might be exploring different living options. Imagine living in a
                community of people just like you, where you can connect and
                socialize while enjoying your freedom and independence. At
                Rockland Manor, we offer an independent living community in
                Rockland, ON (just 20 minutes east of Ottawa) for
                self-sufficient seniors looking for a new place to call home. We
                welcome you to come and visit our community for a complimentary
                tour, and we can&apos;t wait to show you around our home!
              </p>
            </div>

            <div>
              <SubHeading title="An Independent Lifestyle for Active Seniors" />
              <p className="text-center lg:text-left">
                At our independent living community, you can enjoy the freedom
                to live as you please while having access to a wide range of
                amenities. Now is the time to unwind and savor your retirement
                years. At Rockland Manor, we take care of the maintenance of
                your home, as well as daily tasks such as cooking and cleaning,
                so that you can spend your days engaging in fun activities with
                other residents, visiting with family and friends, or taking
                care of errands. We understand that you deserve to continue
                pursuing your passions and interests, and we&apos;re here to
                provide support when you need it and a secure place to call
                home. As we age, we face unique challenges, and having medical
                professionals nearby ensures that you can enjoy a happy and
                healthy lifestyle.
              </p>
            </div>

            <div>
              <SubHeading title="Comforts and Conveniences Included with Your Home" />
              <p className="text-center lg:text-left">
                At Rockland Manor, your independent living apartment includes
                everything you need to make your new home comfortable and
                convenient. Each apartment is equipped a private bathroom, ample
                storage space and air conditioner/heater. In addition, our
                community offers a wide range of amenities and services to make
                your life easier and more enjoyable, such as:
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

export default IndependentCarePage;
