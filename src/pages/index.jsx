import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
	render() {
		const allSEOMarkdown = this.props.data.allMarkdown.edges;

		const centerAlign = {
			textAlign: 'center'
		};

		return (
			<div className="index-container">
				<Helmet title={config.siteTitle} />
				<SEO postEdges={allSEOMarkdown} />
				<main>
					<IndexHeadContainer>
						<Navigation />
						<Hero>
							<img src={config.siteLogo} width="150px" alt="" />
							<h1>{config.siteTitle}</h1>
							<h4>{config.siteDescription}</h4>
						</Hero>
					</IndexHeadContainer>

					<BodyContainer>
						<h2 style={centerAlign}>Simple and Restful Blockchain API</h2>
						<img src="/images/codepiece.gif" width="100%"  alt="code example"/>
					</BodyContainer>
				</main>
			</div>
		)
	}
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
