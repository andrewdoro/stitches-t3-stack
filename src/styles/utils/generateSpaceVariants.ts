import * as Stitches from '@stitches/react';
import { stitchesTheme } from '../stitches.config';

const SPACE_PATTERN = '$--space--';
const REGEX = /\"([^\"]*?\$--space--[^\"]*?)\"/;

export const generateSpaceVariants = (css: Stitches.CSS) => {
  const cssString = JSON.stringify(css);

  return Object.values(stitchesTheme.space).reduce((prev, space) => {
    const substringToReplace = REGEX.exec(cssString);
    if (!substringToReplace?.length) throw Error('No Space Token provided.');
    const replacedSubstring = substringToReplace[0]?.replace(
      SPACE_PATTERN,
      `$${space.token}`
    ) as string;

    const replacedString = cssString.replace(
      substringToReplace[0] as string,
      replacedSubstring
    );

    return { ...prev, [space.token]: JSON.parse(replacedString) };
  }, {}) as Record<keyof typeof stitchesTheme.space, Stitches.CSS>;
};
