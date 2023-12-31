import { ReactElement } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props): ReactElement => {
  return (
    <h1
      className={`mb-4 text-center text-2xl font-bold md:text-4xl lg:text-left ${className}`}
    >
      {children}
    </h1>
  );
};

const SubHeading = ({ children, className }: Props): ReactElement => {
  return (
    <h2
      className={`mb-4 text-center text-xl font-bold md:text-2xl lg:text-left ${className}`}
    >
      {children}
    </h2>
  );
};

export { Heading, SubHeading };
