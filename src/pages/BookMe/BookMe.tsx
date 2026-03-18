import React from "react";
import { Row, Col, Typography } from "antd";
import { motion } from "framer-motion";
import bookme from "../../assets/img/bookme/bookmebg.png";

const { Text, Title, Paragraph } = Typography;

const speakingTopics = [
  "Leadership and execution culture",
  "Growth strategy for business owners",
  "Entrepreneurship and mindset performance",
  "Financial literacy and long-term value creation",
];

const BookMe: React.FC = () => {
  return (
    <section
      id="bookme"
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 244, 238, 0.95), rgba(248, 244, 238, 0.95)), url(${bookme})`,
      }}
    >
      <div className="container mx-auto">
        <Row gutter={[28, 28]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-brand bg-brand-card p-8 shadow-sm"
            >
              <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Speaking Engagements
              </Text>

              <Title className="!mb-4 !mt-3 !font-LeagueSpartan !text-4xl !leading-tight !text-brand-ink sm:!text-5xl">
                Bring John Shin to your next event
              </Title>

              <Paragraph className="!mb-0 !text-base !text-brand-muted sm:!text-lg">
                John delivers high-energy, business-relevant keynotes designed
                to move audiences from inspiration to execution. Sessions are
                tailored to founders, leadership teams, and growth-focused
                communities.
              </Paragraph>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-brand bg-brand-card p-8 shadow-sm"
            >
              <Title level={4} className="!mb-4 !text-brand-ink">
                Popular speaking topics
              </Title>

              <ul className="mb-0 space-y-3 pl-5 text-brand-muted">
                {speakingTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book A Discovery Call
                </a>
                <a
                  href="#event"
                  className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-accent-soft"
                >
                  View Event Formats
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-3xl border border-brand bg-brand-card p-8 text-center shadow-sm">
              <Text className="text-lg text-brand-muted">
                For speaking inquiries, private mentorship, or collaboration
                opportunities, submit a request through the contact section and
                include your event goals, audience size, location, and timeline.
              </Text>
            </div>
          </motion.div>
        </Row>
      </div>
    </section>
  );
};

export default BookMe;
