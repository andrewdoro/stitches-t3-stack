import { Card } from '../../Card/Card';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

export const TechnologyCard = ({
  name,
  description,
  documentation
}: TechnologyCardProps) => {
  return (
    <Card>
      <Card.Title>
        <h3>{name}</h3>
      </Card.Title>
      <Card.Body>
        <p>{description}</p>
        <a href={documentation} target="_blank" rel="noreferrer">
          Documentation
        </a>
      </Card.Body>
    </Card>
  );
};
