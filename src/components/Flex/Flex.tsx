import { styled } from '../../styles/stitches.config';
import { generateSpaceVariants } from '../../styles/utils/generateSpaceVariants';

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    gap: generateSpaceVariants({ gap: '$--space--' }),
    dir: {
      row: {
        flexDirection: 'row'
      },
      col: {
        flexDirection: 'column'
      }
    },
    align: {
      start: {
        alignItems: 'start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      }
    },
    justify: {
      start: {
        justifyContent: 'start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'end'
      }
    }
  }
});
