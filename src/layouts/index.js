import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import Logo from './dashwork';

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{ marginBottom: '2em' }}>
          {<Link style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }} to={'/'}>{Logo}</Link>}
        </header>
        {children()}
        <footer style={{
          color: '#6d6e71',
          borderTop: '1px solid #c6c1be',
          marginTop: '4rem',
          padding: '1.8rem 0 3rem',
          fontSize: '0.92rem',
        }}>
          &copy; 2018 Dashwork
        </footer>
      </Container>
    )
  }
}

export default Template
