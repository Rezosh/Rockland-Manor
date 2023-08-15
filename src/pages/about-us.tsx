import Container from "@/components/Container";
import { SubHeading } from "@/components/Heading";

const AboutUsPage = () => {
  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col space-y-5 bg-cream md:flex-row-reverse ">
          <img
            src="/about-us-rockland-image.png"
            alt=""
            className="h-auto w-full object-cover md:w-1/2"
          />
          <div className="p-12 text-center lg:text-left">
            <SubHeading title="Situated In a Beautiful, Family-Oriented Neighbourhood" />
            <p>
              Rockland Manor is located in the rapidly growing city of Rockland,
              ON, approximately 20 minutes east of Ottawa. Our community is
              surrounded by beautiful landscaping with courtyards full of trees,
              flowers, and pathways. We are in close proximity to parks, a
              marina, and other areas with walkways and biking paths. All
              amenities, including shopping, hair and nail salons, barbers,
              spas, many restaurants, optometrists, and medical and dental
              clinics are easily accessible from our location.
            </p>
            <p className="mt-10">
              Our goal is to make all our residents feel completely at home,
              which is why we've created a warm and inviting atmosphere. Every
              inch of our community is beautifully and tastefully decorated,
              reminiscent of a family home instead of feeling cold, uninviting,
              and institutional. We pride ourselves on being a home and a
              community, not just another seniors' care residence.
            </p>
          </div>
        </div>
        <div>
          <img src="/about-us-donation.jpg" alt="h-96 w-auto" />
          <SubHeading title="Social Responsibility: Giving Back to Our Community" />
          <p className="mt-10"></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
