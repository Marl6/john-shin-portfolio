import React from "react";
import { Col, Row, Typography } from "antd";
import { motion } from "framer-motion";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";
import JohnShinNew from "../../assets/img/johnshin/johnshin-new-portrait.png";
import Featured from "../../components/ui/Featured/Featured";

const { Title, Paragraph, Text } = Typography;

const stats = [
  { label: "Companies launched", value: "26+" },
  { label: "States expanded into", value: "42" },
  { label: "Lives mentored", value: "100K+" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100064284123608",
    label: "Facebook",
    icon: <FacebookOutlined />,
  },
  {
    href: "https://www.instagram.com/johnshinofficial/?hl=en",
    label: "Instagram",
    icon: <InstagramOutlined />,
  },
  {
    href: "https://x.com/johnshinceo",
    label: "X",
    icon: <XOutlined />,
  },
  {
    href: "https://www.linkedin.com/in/john-shin-4907b21a/",
    label: "LinkedIn",
    icon: <LinkedinOutlined />,
  },
];

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden py-16 lg:py-24"
    >
      <div className="absolute left-[-16rem] top-[-10rem] h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-10rem] h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Text className="inline-flex rounded-full border border-brand bg-brand-card px-4 py-1 text-sm font-semibold text-brand-accent">
                Entrepreneur • Investor • Philanthropist
              </Text>

              <Title className="!mb-4 !mt-6 !font-LeagueSpartan !text-4xl !leading-tight !text-brand-ink sm:!text-5xl lg:!text-6xl">
                John C. Shin
              </Title>

              <Paragraph className="!mb-8 max-w-2xl !text-base !text-brand-muted sm:!text-lg">
                Building people and businesses through strategic mentorship,
                purpose-driven leadership, and scalable growth frameworks. John
                partners with founders, executives, and organizations to unlock
                performance, culture, and long-term impact.
              </Paragraph>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#bookme"
                  className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book John To Speak
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-accent-soft"
                >
                  Explore Background
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-2xl text-brand-ink transition hover:text-brand-accent"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f4c6a8] to-[#ebd8ca] blur-2xl" />
              <img
                src={JohnShinNew}
                alt="John Shin portrait"
                className="relative z-10 w-full rounded-3xl border border-brand bg-brand-card object-cover p-2 shadow-xl"
              />
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-12">
          {stats.map((item) => (
            <Col key={item.label} xs={24} sm={8}>
              <div className="rounded-2xl border border-brand bg-brand-card p-6 text-center shadow-sm">
                <p className="mb-1 text-3xl font-bold text-brand-accent">
                  {item.value}
                </p>
                <p className="mb-0 text-sm font-medium text-brand-muted">
                  {item.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-14">
          <Text className="mb-3 block text-center text-sm font-semibold uppercase tracking-wide text-brand-muted">
            Featured In
          </Text>
          <Featured />
        </div>
      </div>
    </section>
  );
};

export default Home;
