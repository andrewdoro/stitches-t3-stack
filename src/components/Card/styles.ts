import { styled } from '../../styles/stitches.config';

export interface CardProps {
  variant: 'shadow' | 'border';
}
export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

export const CardTitle = styled('div', {});

export const CardHeading = styled('div', {});

export const CardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export const CardFooter = styled('div', {
  marginTop: 'auto'
});
