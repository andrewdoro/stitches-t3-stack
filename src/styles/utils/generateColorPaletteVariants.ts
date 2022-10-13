import * as Stitches from '@stitches/react';
import { stitchesTheme } from '../stitches.config';

const COLOR_PATTERN = '$--color--';
const REGEX = /\"([^\"]*?\$--color--[^\"]*?)\"/;

export const generateColorPaletteVariants = (css: Stitches.CSS) => {
  const cssString = JSON.stringify(css);

  return Object.values(stitchesTheme.colors).reduce((prev, color) => {
    const substringToReplace = REGEX.exec(cssString);
    if (!substringToReplace?.length) throw Error('No Color Token provided.');
    const replacedSubstring = substringToReplace[0]?.replace(
      COLOR_PATTERN,
      `$${color.token}`
    ) as string;

    const replacedString = cssString.replace(
      substringToReplace[0] as string,
      replacedSubstring
    );

    return { ...prev, [color.token]: JSON.parse(replacedString) };
  }, {}) as Record<keyof typeof stitchesTheme.colors, Stitches.CSS>;
};
