import React from "react";
import { Row, Typography } from "antd";
import { JSTVParallax } from "../../components/ui/JSTV/parallax-jstv";

const { Paragraph, Text, Title } = Typography;

const JSTV: React.FC = () => {
  return (
    <section id="jstv" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            JSTV
          </Text>
          <Title className="!mb-4 !mt-3 !font-LeagueSpartan !text-4xl !text-brand-ink sm:!text-5xl">
            Conversations that sharpen business thinking
          </Title>
          <Paragraph className="!mb-0 !text-base !text-brand-muted sm:!text-lg">
            Explore interviews and strategy sessions covering leadership,
            entrepreneurship, wealth-building, and high-performance execution.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          <JSTVParallax />
        </Row>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-accent-soft"
          >
            Request A Media Collaboration
          </a>
        </div>
      </div>
    </section>
  );
};

export default JSTV;
