import {ReactElement} from 'react'

type Props = {
    title: string;
    className?: string;
}

const Heading = ({title, className}: Props): ReactElement => {
  return (
    <h1 className={`text-2xl text-center lg:text-left lg:text-4xl font-bold mb-4 ${className}`}>{title}</h1>
  )
}

export default Heading;