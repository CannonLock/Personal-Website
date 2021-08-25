import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"

import SEO from "../components/seo"
import Layout from "../components/layout/Layout"
import TextContainer from "../components/TextContainer"


const HeadShotImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "WebsiteHeadshotCompressed.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      sx = {{
        bg: 'primary',
        pt: "15px",
        pl: "20px",
        pr: "20px",
        pb: "20px",
        m: 'auto',
        minWidth: "250px",
        width: "250px", 
        height: "auto",
        borderRadius: 30,
        float: 'right'
      }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Headshot"
      />
    </Box>
  )
}

const SegmentHeader = ( props ) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
      <Box
        sx={{
          display : 'flex',
          flexDirection : 'row',
          flexWrap : 'wrap',
        }}
      >
        {props.children}
      </Box>
    </Box>
    
  )
} 

const AboutPage = ( props ) => {

  return (
    <Layout>
      <SEO title="About" />
      <Heading as={"h1"}>About Me</Heading>
      <Flex
        sx = {{
          display: 'flex',
          flexDirection: ['column', 'row', 'row']
        }}
      >
        <TextContainer
          sx={{
            mr: 1,
          }}
        >
          <p>
            Hello, my name is Cannon Lock. This page can be considered somewhat of a online cv. If you are looking for a more informal perspective the Interests page is going to be your best bet.
          </p>
          <h2>Summary:</h2>
          <p>
            I am a Double Computer Science and Statistics Major graduating from University of Wisconsin-Madison. I currently work in the apart of the Long-Term Care Quality Improvement group within the Department of Medicine. Additionally I am actively apart of two on campus clubs, Helios, which is working towards a energy sustainable future, and the Stats Club.
          </p>
        </TextContainer>
      </Flex>
      <TextContainer>
        <h2>Education:</h2>
        <SegmentHeader>
          <span>| UW-Madison |</span>
          <span>| Computer Science and Statistics |</span>
          <span>| 1/24/19 - 5/14/2021 |</span>
        </SegmentHeader>
        <ul>
          <li>3.73 Cumulative GPA</li>
        </ul>
        <SegmentHeader>
          <span>| UW-Oshkosh |</span>
          <span>| Computer Science and Mathematics |</span>
          <span>| 9/6/17 – 12/14/18 |</span>
        </SegmentHeader>
        <ul>
          <li>Two-time Dean’s List and one-time Honor Roll</li>
          <li>3.73 Cumulative GPA</li>
        </ul>
      </TextContainer>
      <TextContainer>
        <h2>Work Experience:</h2>
        <SegmentHeader>
          <span>| Student Programmer |</span>
          <span>| Quality Improvement With Data – DOM |</span>
          <span>| 10/14/2019 – Present |</span>
        </SegmentHeader>
        <ul>
          <li>Work with long term care associations to retrieve data and then provide useful benchmarks to assess and improve their own quality of care</li>
          <li>Major projects include expanding the functionality of data tables and creating dashboards to manage user login error and organize worker tasks</li>
          <li>Full-Stack experience using jQuery, PHP, and MySQL</li>
        </ul>
        <SegmentHeader>
          <span>| Mobile Programmer |</span>
          <span>| Epic - Capstone |</span>
          <span>| 9/14/2020 – 12/14/2020 |</span>
        </SegmentHeader>
        <ul>
          <li>Worked on mobile COVID application looking to provide local, personalised data for quick user consumption</li>
          <li>Used Scrum to create weekly deliverables</li>
          <li>Used React Native for dual IOS and Android development</li>
        </ul>
        <SegmentHeader>
          <span>| Landscape Maintenance Foreman |</span>
          <span>| Stuart's Landscaping |</span>
          <span>| 6/15/2017 – 8/30/19 |</span>
        </SegmentHeader>
        <ul>
          <li>
            Coordinated team of workers to meet client needs
          </li>
          <li>
            Use of time and worker management to maximize client benefit
          </li>
        </ul>
      </TextContainer>
      <TextContainer>
        <h2>College Engagement</h2>
        <Text>
          Statistics Club
        </Text>
        <ul>
          <li>
            2019 and 2020 Data Challenge award winner
          </li>
          <li>
            <Link>2020 Challenge Report</Link>
          </li>
        </ul>
        <Text>
          Helios
        </Text>
        <ul>
          <li>
            Sustainability club orientated on conversion to clean energy and sustainable practices
          </li>
          <li>
            Member of the Tech Team which build the club website using React.js
          </li>
          <li>
            <Link>Website Link (Publish Date 12/14/2020)</Link>
          </li>
        </ul>
        <Text>
          Peer Mentor
        </Text>
        <ul>
          <li>
            Helped new students get engaged in coursework and campus activities
          </li>
          <li>
            Teacher recommended applicant
          </li>
        </ul>
      </TextContainer>
    </Layout>
  )
}

export default AboutPage;