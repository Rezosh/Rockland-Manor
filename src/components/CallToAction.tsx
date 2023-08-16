import Image from "next/image";
import Link from "next/link";

import { SubHeading } from "@/components/Heading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "../../public/services-cta.jpg";

export default function CTA() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center bg-cream lg:flex-row">
      <Image
        src={ctaImage}
        className="h-[400px] w-full object-cover lg:w-1/2"
        alt="Image of rockland manor exterior"
      />
      <div className="p-12 text-center lg:text-left">
        <SubHeading title="Join Our Vibrant Community Today!" />
        <p>
          Ready to experience the comfort and convenience of living at Rockland
          Manor? Schedule a complimentary visit to see our community and learn
          more about our amenities and services. Join our vibrant community
          today and start living your best life!
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
  );
}
