import React from "react";
import { Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import johnShin from "../../assets/img/aboutme/aboutmejohn.png";
import { BusinessTimeline } from "../../components/ui/About/business-timeline";
import { FeaturedPreview } from "../../components/ui/About/featured-preview";
import { ImageGrid } from "../../components/ui/About/image-grid";

const { Title, Paragraph, Text } = Typography;

const pillars = [
  {
    title: "Business Acceleration",
    description:
      "Hands-on frameworks for growth, leadership accountability, and predictable revenue outcomes.",
  },
  {
    title: "Mentorship At Scale",
    description:
      "Training systems that develop decision-making, confidence, and execution discipline across teams.",
  },
  {
    title: "Purpose-Led Leadership",
    description:
      "A values-driven model that combines performance, philanthropy, and long-term legacy.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                About John
              </Text>
              <Title className="!mb-5 !mt-3 !font-LeagueSpartan !text-4xl !leading-tight !text-brand-ink sm:!text-5xl">
                A proven operator focused on growth, leadership, and impact
              </Title>

              <Paragraph className="!mb-4 !text-base !text-brand-muted sm:!text-lg">
                John C. Shin is a serial entrepreneur, investor, author, and
                executive producer whose work spans business development,
                financial education, and strategic mentorship. He has launched
                and scaled multiple ventures while helping business owners build
                stronger teams, clearer strategy, and measurable momentum.
              </Paragraph>

              <Paragraph className="!mb-0 !text-base !text-brand-muted sm:!text-lg">
                With a foundation in business, law, and real-world execution,
                John is known for translating complex goals into practical
                action. His mission is simple: equip people to lead better,
                think bigger, and create sustainable success.
              </Paragraph>
            </motion.div>
          </Col>

          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-2xl bg-brand-accent/20" />
              <img
                src={johnShin}
                alt="John Shin speaking"
                className="relative z-10 w-full rounded-3xl border border-brand bg-brand-card object-cover p-2 shadow-xl"
              />
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-12">
          {pillars.map((pillar) => (
            <Col key={pillar.title} xs={24} md={8}>
              <div className="h-full rounded-2xl border border-brand bg-brand-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-brand-ink">
                  {pillar.title}
                </h3>
                <p className="mb-0 text-sm text-brand-muted">
                  {pillar.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-16 rounded-3xl border border-brand bg-brand-card p-6 shadow-sm sm:p-10">
          <BusinessTimeline />
        </div>

        <div className="mt-12 rounded-3xl border border-brand bg-brand-card p-6 shadow-sm sm:p-10">
          <ImageGrid />
        </div>

        <div className="mt-12 rounded-3xl border border-brand bg-brand-card p-6 shadow-sm sm:p-10">
          <FeaturedPreview />
        </div>
      </div>
    </section>
  );
};

export default About;
