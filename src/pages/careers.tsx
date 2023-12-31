import Container from "@/components/Container";
import { Heading, SubHeading } from "@/components/Heading";

const Careers = () => {
  return (
    <>
      <section>
        <Container>
          <Heading>Careers</Heading>
          <p className="text-left">
            Welcome to Rockland Manor, a place where we prioritize a
            family-oriented environment that fosters job satisfaction,
            responsibility, loyalty, personal growth, and respect among our
            employees. We are in search of positive, honest, caring individuals
            who not only want to be part of a dynamic team but also value the
            importance of a family-like atmosphere. Join us in creating a warm
            and supportive community where everyone can thrive and contribute to
            our shared success.
          </p>
        </Container>
      </section>
      <section className="mt-16">
        <Container>
          <SubHeading>Current Openings</SubHeading>
          <p className="text-left">
            We currently dont have any available positions. We are always
            willing to accept resumes for future positions. Please email your
            resume to{" "}
            <a
              href="mailto:reception@manoirrocklandmanor.com"
              className="underline"
            >
              reception@manoirrocklandmanor.com
            </a>{" "}
          </p>
        </Container>
      </section>
    </>
  );
};

export default Careers;
