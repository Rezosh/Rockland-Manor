import Image from "next/image";
import Link from "next/link";

import { Heading, SubHeading } from "@/components/Heading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ctaImage from "../../../public/services-cta.jpg";
import headerImage from "../../../public/services-header.jpg";

const MemoryCarePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-t from-[#b9a284]">
        <Image
          src={headerImage}
          className="h-[250px] w-full object-cover mix-blend-overlay"
          alt="Picture of the Rockland Manor front entrance"
        />
        <Heading
          title="Memory Care At Rockland Manor"
          className="absolute text-white"
        />
      </div>

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="flex flex-col gap-20">
            <div>
              <SubHeading title="Advanced Memory Care Program" />
              <p className="text-center lg:text-left">
                At Rockland Manor, we understand the unique needs of individuals
                with Alzheimer&apos;s disease, dementia, and other forms of
                memory loss. Our specialized memory care program is designed to
                provide the support and resources necessary for our residents to
                thrive. Unlike traditional senior care programs, we provide
                extra attention and care tailored to the severity of our
                residents&apos; illness. Our new specialized memory care wing,
                combined with our personalized care methods and activities,
                ensures that our residents have the best possible quality of
                life. Our staff undergo specialized training and are passionate
                about connecting with our residents.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <SubHeading title="The Advantages of Memory-Focused Care" />
                <p>
                  Rockland Manor&apos;s memory-focused care program ensures that
                  our residents experiencing Alzheimer&apos;s disease, dementia,
                  and other forms of memory loss, get the best care possible. We
                  know talking about the future together as a family will ensure
                  that you or your loved one will have the best plan as the
                  disease progresses. Our memory care services are an excellent
                  choice for all of the following reasons:
                </p>
              </div>

              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  We Only Focus on One Type of Care
                </h3>
                <p>
                  As our sole focus is providing care for individuals with
                  memory loss, we are able to dedicate our full attention to our
                  residents. Our efforts are not divided in multiple directions,
                  allowing us to focus all our energy on finding and
                  implementing better care methods tailored to this specific
                  population.
                </p>
              </div>
              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  We Develop Special Activities
                </h3>
                <p>
                  At our residence, we prioritize the enjoyment and well-being
                  of our residents as we recognize that this is their home. We
                  offer a range of engaging and fun activities that are tailored
                  to help those with memory loss promote cognitive function and
                  stimulate memories. Our primary objective is to help our
                  residents retain their happy and special memories for as long
                  as possible.
                </p>
              </div>
              <div>
                <h3 className="mb-5 text-center font-medium lg:text-left">
                  We Employ Specially Trained Staff
                </h3>
                <p>
                  Delivering memory-focused care demands specialized skills and
                  a deep understanding of the disease that our residents face.
                  Our memory-focused care team members have undergone extensive
                  and specialized training, and possess a genuine interest in
                  providing exceptional care to our residents.
                </p>
              </div>
            </div>

            <div>
              <SubHeading title="Dealing with a Loved One's Loss of Memory" />
              <p className="text-center lg:text-left">
                Watching a loved one cope with memory loss due to
                Alzheimer&apos;s disease, dementia, or other forms of memory
                loss can be a challenging experience for everyone involved.
                It&apos;s common to feel a range of emotions, such as
                frustration, anger, sadness, hope, and even a sense of loss.
                However, it&apos;s important to remember that your loved one is
                still the same person you&apos;ve always known, despite their
                fading memory. They still have the ability to feel, and they
                require regular contact with the familiar faces of the people
                they know and love to feel happy, secure, and safe. We encourage
                you to make visiting your loved one a priority during this time.
                It may also be helpful to connect with other families who are
                dealing with a similar memory loss situation. You can check if
                there are any support groups or organizations like the{" "}
                <a
                  href="https://alzheimer.ca/en"
                  className="underline"
                  target="_blank"
                >
                  Alzheimer Society of Canada
                </a>{" "}
                in your area. During these challenging times, it&apos;s
                essential to have confidence that your loved one is in good
                hands. At Rockland Manor, we assure you that your loved one will
                receive specialized care from a professionally trained and
                compassionate team.
              </p>
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

export default MemoryCarePage;
