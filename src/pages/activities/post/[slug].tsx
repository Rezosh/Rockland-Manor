import client from "@/client";
import Container from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import groq from "groq";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Post = {
  title: string;
  slug: string;
  description: string;
  imageGallery: string[];
  _createdAt: string;
};

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const {
    title = "Missing title",
    description,
    imageGallery,
    _createdAt,
  } = post;
  const date = new Date(_createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slides = React.useMemo(
    () => imageGallery.map((image) => ({ src: image })),
    [imageGallery]
  );
  return (
    <Container className="max-w-3xl pt-10">
      <article>
        <Heading>{title}</Heading>
        <span className="text-gray-500">Created on: {date}</span>
        <p className="mt-6">{description}</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {imageGallery.slice(0, 6).map((image, idx) => {
            return (
              <img
                key={idx}
                src={image}
                onClick={() => {
                  setIndex(idx);
                  setBasicExampleOpen(true);
                }}
                alt=""
                className="h-40 w-full max-w-full cursor-pointer rounded-lg object-cover object-center"
              />
            );
          })}
        </div>
        <div className="mt-2 text-center text-dark-brown-900">
          {imageGallery.length > 6 && (
            <Button variant="link" onClick={() => setBasicExampleOpen(true)}>
              +{imageGallery.length - 6} more
            </Button>
          )}
        </div>
        <Lightbox
          open={basicExampleOpen}
          index={index}
          close={() => {
            setBasicExampleOpen(false);
            setIndex(0);
          }}
          slides={slides}
        />
      </article>
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "activityImages" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
const query = groq`*[_type == "activityImages" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  description,
  "imageGallery": imageGallery[].asset->url,
  _createdAt,
}`;

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export default Post;
