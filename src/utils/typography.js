import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'body': {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: "-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",
    color: '#333',
    fontSize: '18px',
  },
  'h1': {
    fontFamily: 'inherit',
  }
})

delete Wordpress2016.googleFonts
delete Wordpress2016.headerFontFamily
delete Wordpress2016.bodyFontFamily
delete Wordpress2016.headerWeight

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
