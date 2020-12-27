/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import Member1 from 'assets/team/Leo.png';
import Member2 from 'assets/team/Ed.png';
import Member3 from 'assets/team/Jerry.png';
import Member4 from 'assets/team/Antoine.png';
import Member5 from 'assets/team/Gaurav.png';
import Member6 from 'assets/team/You.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Leonard Fiadzinu',
    title: 'Leonard Fiadzinu',
    designation: 'CEO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/leonard-fiadzinu-cfa-cmt-caia-a43a1a1/',
        icon: <FaLinkedinIn />,
      },
/*
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.linkedin.com/nhome/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
*/
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Edward Buchi',
    title: 'Edward Buchi',
    designation: 'COO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/edward-buchi-1a103a33/',
        icon: <FaLinkedinIn />,
      },
      /*
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      */
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Jerry Qian',
    title: 'Jerry Qian',
    designation: 'CTO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jerry-qian-4ba2a79a/',
        icon: <FaLinkedinIn />,
      },
      /*
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      */
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Antoine De Vuyst',
    title: 'Antoine De Vuyst',
    designation: 'Title',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/antoine-de-vuyst-49a74194/',
        icon: <FaLinkedinIn />,
      },
      /*
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      */
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Gaurav Sharma',
    title: 'Gaurav Sharma',
    designation: 'Title',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/gauravksharma9/',
        icon: <FaLinkedinIn />,
      },
      /*
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      */
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'You',
    title: 'You',
    designation: '',
    socialProfile: [
      /*
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      */
    ],
  },
];

export default function TeamSection() {
  return (
    <Box as="section" id="team-section" variant="section.team-section">
      <Container>
        <SectionHeader
          // slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
