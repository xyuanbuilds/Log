import Typography from 'typography';
import Theme from 'typography-theme-fairy-gates';
import './global.css';

/**
 * From Ariake Dark -> great VSCode theme
 * github.com/pathtrk/ariake-dark-syntax/blob/master/styles/colors.less
 */
// Base  -----------------------------------
// hsl(228, 25%, 78%); // font
// hsl(228, 13%, 19%); // bg
// hsl(228, 25%, 42%) // gutter(darken(font, 36%); )
// hsla(228, 25%, 78%, .15); // guide(fade(font, 15%);)
// hsl(228, 100%, 66%); // accent
// Monochrome ------------------------------
// hsl(228, 25%, 78%);
// hsl(228, 15%, 55%);
// hsl(228, 17%, 45%);
// Colors ----------------------------------
// hsl(197, 92%, 78%);
// hsl(211, 97%, 98%);
// hsl(240, 58%, 68%);
// hsl(177, 72%, 77%);
// hsl(211, 60%, 70%);
// hsl(211, 55%, 55%);
// hsl(282, 82%, 80%);
// hsl(264, 86%, 70%);
// Git -------------------------------------
// hsl(208, 100%, 60%); // renamed
// hsl(150,  60%, 54%); // added
// hsl(40,   60%, 70%); // modified
// hsl(0,    70%, 60%); // removed

const MOBILE_MEDIA_QUERY = '@media only screen and (max-width:480px)';
Theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  a: {
    textShadow: 'none',
    color: 'var(--linkColor)',
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, var(--linkColor) 1px, var(--linkColor) 2px, rgba(0, 0, 0, 0) 2px)`,
  },
  blockquote: {
    borderLeft: `${rhythm(4 / 16)} solid var(--bqBorder)`,
    color: 'var(--bqColor)',
    background: 'var(--bqBg)',
    paddingTop: `${rhythm(4 / 16)}`,
    paddingBottom: `${rhythm(4 / 16)}`,
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      borderLeft: `${rhythm(3 / 16)} solid var(--bqBorder)`,
    },
  },
  ':not(pre) > code': {
    padding: `0 ${rhythm(2 / 16)}`,
  },
});

const typography = new Typography({ ...Theme, headerColor: 'var(--hColor)' });

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
