import React from "react";
import { Row, Typography } from "antd";
import { UpcomingEvents } from "../../components/ui/Event/upcoming-events";
import { motion } from "framer-motion";

const { Text, Paragraph, Title } = Typography;

const Event: React.FC = () => {
  return (
    <section id="event" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Events
          </Text>
          <Title className="!mb-4 !mt-3 !font-LeagueSpartan !text-4xl !text-brand-ink sm:!text-5xl">
            Signature talks and leadership experiences
          </Title>
          <Paragraph className="!mb-0 !text-base !text-brand-muted sm:!text-lg">
            Programs are designed for organizations, founder communities, and
            leadership teams seeking actionable growth strategy with measurable
            outcomes.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Row gutter={[32, 32]}>
            <UpcomingEvents />
          </Row>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Request Event Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Event;
