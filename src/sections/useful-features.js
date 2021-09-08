import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import UltimateFeature from "components/cards/ultimate-feature";

import bulb from "assets/images/icons/bulb-2.png";
import diamond from "assets/images/icons/diamond.png";
import coding from "assets/images/icons/coding.png";
import help from "assets/images/icons/help.png";
import award from "assets/images/icons/award.png";

const data = [
  {
    id: 1,
    icon: help,
    title: "Adoption Strategy",
    description: `Whether it's merchant adoption or decentralized finance, we value in educating from the blockchain fundamentals. Our Bitcoin Bay meetups and workshops are beginner-friendly with a wide range of technical and business related content.`,
  },
  {
    id: 2,
    icon: bulb,
    title: "Ideation Assessment",
    description: `Let Bitcoin Bay help your blockchain project with comprehensive analysis and evaluative feedback. With our blockchain expertise, we provide an effective diagnosis and recommended actions for successful execution.`,
  },
  {
    id: 3,
    icon: coding,
    title: "Blockchain Development",
    description: `Bitcoin Bay constantly updates our hands-on knowledge of blockchain development practices. Let our experts help catalyze your blockchain project, providing comprehensive insight into the pros and cons of various approaches.`,
  },
  {
    id: 4,
    icon: award,
    title: "Investor Relations",
    description: `Bitcoin Bay has built a reputation for vetting blockchain projects. Since 2017, our team has evaluated dozens of projects. We help filter out teams that raise red flags, and highlight projects that have strong prospective viability.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Expertise Services"
          description="Providing hands-on engagement, we custom tailored strategies and implementations, helping businesses maximize the value of blockchain."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ["grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"],
    ".feature-item": {
      display: ["block", "block", "block", "block", "flex"],
      px: ["15px", 0],
      maxWidth: ["none"],
      figure: {
        minWidth: "90px",
        m: [
          "0 auto 30px",
          "0 auto 30px",
          "0 auto 30px",
          "0 auto 30px",
          "0 26px 0 0",
        ],
      },
    },
  },
};
