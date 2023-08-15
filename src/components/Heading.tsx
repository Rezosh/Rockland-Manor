import { ReactElement } from "react";

type Props = {
  title: string;
  className?: string;
};

const Heading = ({ title, className }: Props): ReactElement => {
  return (
    <h1
      className={`mb-4 text-center text-2xl font-bold md:text-4xl lg:text-left ${className}`}
    >
      {title}
    </h1>
  );
};

const SubHeading = ({ title, className }: Props): ReactElement => {
  return (
    <h2
      className={`mb-4 text-center text-xl font-bold md:text-2xl lg:text-left ${className}`}
    >
      {title}
    </h2>
  );
};

export { Heading, SubHeading };
