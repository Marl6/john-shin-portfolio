import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { MovingCards } from "../../components/ui/About/moving-cards-demo";
import { BusinessTimeline } from "../../components/ui/About/business-timeline";
import { AboutWobbleCard } from "../../components/ui/About/about-me";
import { motion } from "framer-motion";
import johnShin from "../../assets/img/johnshin/ABOUTMEPIC.png";
import whoIsJohnShin from "../../assets/img/johnshin/WHOISJOHNSHIN.png";
import logo from "../../assets/img/logo/john-shin-logo.png";
const { Text } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8 mt-10">
        <Row className="min-h-screen flex flex-col justify-start pt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <Row
              gutter={[32, 32]}
              className="flex items-stretch justify-center h-full"
            >
              {/* First column animations */}
              <Col xs={24} md={8} className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start">
                    <Text className="lg:text-8xl md:text-6xl text-5xl font-extrabold text-[#ef7e45] font-LeagueSpartan tracking-wider text-start">
                      ABOUT
                    </Text>
                    <Text className="lg:text-8xl md:text-6xl text-5xl font-extrabold text-black font-LeagueSpartan tracking-wider text-start">
                      ME
                    </Text>
                    <Divider className="border-black border-[2px]" />
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start">
                    <Text className="text-3xl font-bold text-black font-sans text-start">
                      Start of
                    </Text>
                    <Text className="text-3xl font-bold text-black font-sans text-start">
                      Journey
                    </Text>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="text-md font-normal text-black font-sans text-justify">
                      Shin pursued higher education at the University of
                      Southern California, obtaining a B.A. in Business
                      Administration, an MBA, and a Juris Doctorate in Law.
                      During his college years, he ventured into business by
                      starting a valet parking service and engaging in real
                      estate sales. Post-graduation, he briefly worked with
                      Coca-Cola in an entry-level management role before
                      transitioning to the financial services sector.
                    </Text>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col -mt-6">
                    <div className="relative">
                      <img
                        src={johnShin}
                        alt="John Shin"
                        className="rounded-lg h-[30vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] object-cover filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  </Row>
                </motion.div>
              </Col>

              {/* Second column animations */}
              <Col xs={24} md={8} className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col -mb-5 justify-start">
                    <div className="relative w-full bg-[#ff914d]">
                      <div className="relative">
                        <img
                          src={whoIsJohnShin}
                          alt="John Shin"
                          className="relative z-0 -ml-10 -mb-14 lg:-ml-14 lg:-mb-14 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover filter drop-shadow-[0_0px_25px_rgba(0,0,0,0.5)]"
                        />
                        <div className="z-20 absolute bottom-14 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-70" />
                      </div>
                    </div>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex justify-center -mt-5 relative z-10">
                    <Text className="text-8xl font-extrabold text-[#ef7e45] font-LeagueSpartan text-center [text-stroke:2px_black] [-webkit-text-stroke:2px_black]">
                      SH
                    </Text>
                    <Text className="text-8xl font-extrabold text-black font-LeagueSpartan text-center">
                      IN
                    </Text>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="text-3xl font-bold text-black font-sans text-start">
                      Who is John C. Shin?
                    </Text>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="text-md font-normal text-black font-sans text-justify">
                      John Shin is a serial entrepreneur, philanthropist, movie
                      producer, author, motivational speaker and critically
                      acclaimed business coach. He has started over 26 different
                      companies from scratch which have all become multi-
                      million-dollar enterprises and is the Co-Founder of the
                      ALL FOR ONE Foundation and sits on over 6 different boards
                      of charities.
                    </Text>
                  </Row>
                </motion.div>
              </Col>

              {/* Third column animations */}
              <Col xs={24} md={8} className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Row gutter={[0, 16]} className="w-full">
                    <Col xs={24} md={16} order={1}>
                      <Text className="text-md font-normal text-black font-sans text-justify">
                        John Shin is also the Executive Producer of the featured
                        film, "Think and Grow Rich: The Legacy," which is
                        sweeping the world in multiple countries and the
                        modern-day author of the bestselling book, Think and
                        Grow Rich, written by Napoleon Hill in 1937. His book, A
                        Think and Grow Rich Publication, was released on January
                        6th, 2020 called "HOW RICH ASIANS THINK AND GROW RICH,"
                        published by the Napoleon Hill Foundation.
                      </Text>
                    </Col>
                    <Col
                      xs={24}
                      md={8}
                      className="flex justify-center md:justify-start"
                      order={2}
                    >
                      <motion.img
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        src={logo}
                        alt="John Shin"
                        className="ml-0 md:ml-6 mt-4 md:mt-14 relative z-0 rounded-lg h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[10vh] object-cover"
                      />
                    </Col>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="text-md font-normal text-black font-sans text-justify">
                      John Shin continues his mission to inspire young
                      entrepreneurs around the world. He captivates his audience
                      by educating them with a sense of humor. He commands his
                      audience with an exhilarating intensive energy that keeps
                      people on the edge of their seats for 12 hours. <br />
                      John Shin received his B.S. in Business Administration
                      from the University of Southern California, an M.B.A., and
                      a Juris Doctorate Degree in Law. Immediately after
                      college, John was recruited to work at a Fortune 100
                      company but soon learned that the corporate world was not
                      for him. <br />
                      John Shin was introduced to the financial services
                      industry by his wife, Arlene, in 1994 and since then they
                      have opened over 128 offices in 42 different states.
                      <br /> John Shin knew that this would fit his
                      entrepreneurial vision and mission to spread financial
                      literacy. John Shin has mentored and trained hundreds of
                      thousands of people nationwide to become successful
                      business owners. In John Shin's own words, he says, "Show
                      me your mentor, and I'll show you your future."
                      <br /> John Shin has been featured in Wall Street Journal,
                      Forbes Magazine and numerous Finance Magazines as well as
                      CBS, NBC, Fox News, and MSNBC.
                    </Text>
                  </Row>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Row>

        <div className="space-y-20 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10"
          >
            <Col span={24}>
              <AboutWobbleCard />
            </Col>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Col span={24}>
              <BusinessTimeline />
            </Col>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10"
          >
            <Col span={24}>
              <Text className="block text-2xl font-semibold mb-4 text-center text-black font-lora">
                Testimonies
              </Text>
              <MovingCards />
            </Col>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
