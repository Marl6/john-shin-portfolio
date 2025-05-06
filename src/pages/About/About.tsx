import React from "react";
import { Row, Col, Typography } from "antd";
import { MovingCards } from "../../components/ui/moving-cards-demo";
import { MainBanner } from "../../components/ui/main-banner";
import { BusinessTimeline } from "../../components/ui/business-timeline";
import { AboutWobbleCard } from "../../components/ui/about-me";
import { motion } from "framer-motion";

const { Text } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row>
            <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-5">
              <span className="text-[#ef7e45]">About</span> Me
            </Text>
          </Row>
        </motion.div>

        <Row gutter={[32, 32]} className="mt-10">
          <Row gutter={[32, 32]} className="mt-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} md={12} className="text-center">
                  <Text className="text-xl font-medium text-black font-lora">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </Col>
                <Col xs={24} md={12}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <MainBanner />
                  </motion.div>
                </Col>
              </Row>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Col span={24}>
                <AboutWobbleCard />
              </Col>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Col span={24}>
                <BusinessTimeline />
              </Col>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Col span={24}>
                <Text className="block text-2xl font-semibold mb-4 text-center text-black font-lora">
                  Testimonies
                </Text>
                <MovingCards />
              </Col>
            </motion.div>
          </Row>
        </Row>
      </div>
    </section>
  );
};

export default About;
