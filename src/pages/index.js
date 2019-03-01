import Link from 'gatsby-link';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        <section style={{
          fontSize: '30px',
          lineHeight: '1.5',
          fontWeight: '400',
          color: 'black',
          marginBottom: '2em',
        }}>
          We are a small team dedicated to create unique presence for customers. We help startups, companies, and artists build for the web.
        </section>

        <section className="faq">
          <p>
            <strong>Who are you?</strong>{' '}
            A small team of developer and designer: <a href="https://twitter.com/mauryaratan">Ram</a>, <a href="https://twitter.com/JohnPixle">John</a>, and <a href="https://twitter.com/lushkant">Krishna</a>. Together, we make beautiful WordPress themes and plugins.
          </p>

          <p>
            <strong>What do you do?</strong>{' '}
            Primarily, we create awesome WordPress themes and plugins over at <a href="https://codestag.com/?ref=dashwork">Codestag</a>. Focused towards minimal design and solid code.
          </p>

          <p>
            <strong>How old are you?</strong>{' '}
            We've been running Codestag successfully for over 5 years now, but we're just starting out as Dashwork where we plan to do more than just making themes and plugins.
          </p>

          <p>
            <strong>What technologies do you specialize in?</strong>{' '}
            We're experienced with WordPress, PHP, JavaScript while keeping the latest tech in mind.
          </p>

          <p>
            <strong>How can I contact you?</strong>{' '}
            If you'd like to say hi, feel free to send us a tweet over at <a href="https://twitter.com/dashworkio">@dashworkio‏</a>.
          </p>

          <h3>Check our <Link to="/projects">Projects</Link>.</h3>
        </section>

        <p style={{ textAlign: 'center', marginTop: '2em' }}>👋</p>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
