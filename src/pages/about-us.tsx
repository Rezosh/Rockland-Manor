import Container from "@/components/Container";
import { SubHeading } from "@/components/Heading";

const AboutUsPage = () => {
  return (
    <>
      <Container>
        <div className=" space-y-5 bg-cream ">
          <img
            src="/services-cta.jpg"
            alt=""
            className="absolute -mr-60 w-96"
          />
          <SubHeading title="Situated In a Beautiful, Family-Oriented Neighbourhood" />
          <p>
            Rockland Manor is located in the rapidly growing city of Rockland,
            ON, approximately 20 minutes east of Ottawa. Our community is
            surrounded by beautiful landscaping with courtyards full of trees,
            flowers, and pathways. We are in close proximity to parks, a marina,
            and other areas with walkways and biking paths. All amenities,
            including shopping, hair and nail salons, barbers, spas, many
            restaurants, optometrists, and medical and dental clinics are easily
            accessible from our location.
          </p>
          <p>
            Our goal is to make all our residents feel completely at home, which
            is why we've created a warm and inviting atmosphere. Every inch of
            our community is beautifully and tastefully decorated, reminiscent
            of a family home instead of feeling cold, uninviting, and
            institutional. We pride ourselves on being a home and a community,
            not just another seniors' care residence.
          </p>
        </div>
      </Container>
    </>
  );
};

export default AboutUsPage;
