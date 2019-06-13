import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

const theme = {
  title: 'Thomasheller.net',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Arvo',
      styles: ['600'],
    },
    {
      name: 'Fira Sans',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Arvo', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '600',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = 'rgb(63, 8, 134)';
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '24.65px',
    });
    return {
      a: {
        color: linkColor,
        textDecoration: 'underline',
      },
      'a:hover,a:active': {
        textShadow: 'none',
        backgroundImage: 'none',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    };
  },
};

export default theme;
