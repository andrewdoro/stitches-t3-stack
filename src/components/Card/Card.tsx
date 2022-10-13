import { ReactNode } from 'react';
import {
  CardBody,
  CardTitle,
  CardHeading,
  CardFooter,
  CardWrapper
} from './styles';

interface ChildrenProps {
  children: ReactNode;
}

const Heading = ({ children }: ChildrenProps) => {
  return <CardHeading>{children}</CardHeading>;
};
const Title = ({ children }: ChildrenProps) => {
  return <CardTitle>{children}</CardTitle>;
};
const Body = ({ children }: ChildrenProps) => {
  return <CardBody>{children}</CardBody>;
};

const Footer = ({ children }: ChildrenProps) => {
  return <CardFooter>{children}</CardFooter>;
};

const Card = ({ children, ...rest }: ChildrenProps) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
};
Card.Footer = Footer;
Card.Title = Title;
Card.Body = Body;
Card.Heading = Heading;

export { Card };
