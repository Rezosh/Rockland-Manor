import client from "@/client";
import Container from "@/components/Container";
import { Heading } from "@/components/Heading";
import groq from "groq";
import Link from "next/link";

type PageProps = {
  post: {
    title: string;
    slug: string;
    thumbnail: string;
    description: string;
    _createdAt: string;
  }[];
};

export default function Activities({ post }: PageProps) {
  return (
    <Container>
      <Heading>Activities</Heading>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {post.map((activity, idx) => {
          const date = new Date(activity._createdAt).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          );
          return (
            <article
              key={idx}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={activity.thumbnail}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark-brown-900 via-dark-brown-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <time
                dateTime={activity._createdAt}
                className="text-sm leading-6 text-gray-300"
              >
                {date}
              </time>

              <h1 className="mt-1.5 text-xl font-semibold leading-6 text-white">
                <Link href={`/activities/post/${activity.slug}`}>
                  <span className="absolute inset-0" />
                  {activity.title}
                </Link>
              </h1>
            </article>
          );
        })}
      </div>
    </Container>
  );
}

const query = groq`*[_type == "activityImages"]{
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    description,
    _createdAt,
}`;

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
