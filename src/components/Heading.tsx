import { ReactElement } from "react";

type Props = {
  title: string;
  className?: string;
};

const Heading = ({ title, className }: Props): ReactElement => {
  return (
    <h1
      className={`mb-4 text-center text-2xl font-bold md:text-3xl lg:text-left lg:text-4xl ${className}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
