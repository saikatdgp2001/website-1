/* eslint-disable no-unused-vars */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '~components/layout'
import RaceSocialCards from '~components/social-media-graphics/race/state'
import SocialCardsSelect from '~components/pages/race/social-media-graphics/select'

export default ({ data }) => {
  const { contentfulSnippet } = useStaticQuery(graphql`
    query {
      contentfulSnippet(slug: { eq: "crdt-social-cards-preamble" }) {
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <Layout
      title="Social Media Graphics"
      returnLinks={[
        { link: '/race' },
        { link: `/race/dashboard`, title: 'Racial Data Dashboard' },
      ]}
      path="/race/social-media-graphics"
      centered
    >
      <div
        dangerouslySetInnerHTML={{
          __html: contentfulSnippet.content.childMarkdownRemark.html,
        }}
      />
      <h3>Share the facts about COVID-19 and Race</h3>
      <p>
        Select a state or territory to see the latest information about COVID-19
        cases and deaths by race and ethnicity. These charts are updated twice a
        week.
      </p>
      <SocialCardsSelect />
      <RaceSocialCards />
    </Layout>
  )
}