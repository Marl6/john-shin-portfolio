import React from "react";
import movieBanner from "../../../src/assets/img/movie/Movie.png";
import { Col, Row, Typography } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import tgr1 from "../../../src/assets/img/movie/tgr1.png";
import tgr2 from "../../../src/assets/img/movie/tgr2.png";
import tgr3 from "../../../src/assets/img/movie/tgr3.png";
import tgr4 from "../../../src/assets/img/movie/tgr4.png";
import contributorLogo1 from "../../../src/assets/img/movie/tgr-contributor-logos/SHARKTANK.png";
import contributorLogo2 from "../../../src/assets/img/movie/tgr-contributor-logos/10X.png";
import contributorLogo3 from "../../../src/assets/img/movie/tgr-contributor-logos/DARREN.png";
import contributorLogo4 from "../../../src/assets/img/movie/tgr-contributor-logos/TSOG.png";

const { Text } = Typography;

const Movie: React.FC = () => {
  return (
    <section
      id="movie"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-white to-orange-200"
    >
      <div className="container mx-auto  mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row>
            <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-5">
              Think{" "}
              <span className="text-[#ef7e45] font-Baskerville italic">&</span>{" "}
              Grow Rich The Legacy Movie
            </Text>
          </Row>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <Row className="relative w-full h-[60vh]">
            <Col className="flex items-center justify-center ml-10">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                src={movieBanner}
                alt="Think & Grow Rich Movie"
                className="max-w-full max-h-full object-contain"
              />
            </Col>
          </Row>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <a
            href="https://vimeo.com/ondemand/tgrlegacymovie"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-[#ef7e45] text-white font-bold font-inter transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#ef7e45] text-1xl flex items-center"
          >
            <IoCartOutline className="text-2xl mr-2" />
            Get Your Copy Now!
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Row className="flex-1 flex flex-col justify-center">
            <Text className="mx-auto -mb-5 md:text-5xl font-extrabold text-center text-[#ef7e45] font-lora">
              TGR
            </Text>
            <Text className="mx-auto text-3xl font-bold text-center text-black font-LeagueSpartan uppercase">
              <br />
              The Legacy Contributors
            </Text>
          </Row>
        </motion.div>

        <Row
          gutter={[32, 32]}
          className="flex items-stretch justify-center h-full w-full mt-5"
        >
          {/* First Column */}
          <Col xs={24} sm={12} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Row className="orange-200 p-6 h-[75%] md:border-r-2 lg:md:border-r-2 border-black items-center justify-center">
                <Col span={24} className="flex justify-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    src={tgr1}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover"
                  />
                </Col>
                <Col span={24} className="flex flex-col items-center lg:-mt-40">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Text className="uppercase text-black font-extrabold text-xl">
                      CORCORAN
                    </Text>
                    <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                      BARBARA
                    </Text>
                  </motion.div>
                </Col>
                <Col span={24} className="flex justify-center lg:-mt-28">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    src={contributorLogo1}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                  />
                </Col>
              </Row>
            </motion.div>
          </Col>

          {/* Second Column */}
          <Col xs={24} sm={12} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Row className="orange-200 p-6 h-[75%] md:border-r-2 lg:md:border-r-2 border-black items-center justify-center">
                <Col span={24} className="flex justify-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    src={tgr2}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover"
                  />
                </Col>
                <Col span={24} className="flex flex-col items-center lg:-mt-40">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Text className="uppercase text-black font-extrabold text-xl">
                      CARDONE
                    </Text>
                    <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                      GRANT
                    </Text>
                  </motion.div>
                </Col>
                <Col span={24} className="flex justify-center lg:-mt-28">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    src={contributorLogo2}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                  />
                </Col>
              </Row>
            </motion.div>
          </Col>

          {/* Third Column */}
          <Col xs={24} sm={12} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Row className="orange-200 p-6 h-[75%] md:border-r-2 lg:md:border-r-2 border-black items-center justify-center">
                <Col span={24} className="flex justify-center mt-1">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    src={tgr3}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover"
                  />
                </Col>
                <Col span={24} className="flex flex-col items-center lg:-mt-40">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Text className="uppercase text-black font-extrabold text-xl">
                      HARDY
                    </Text>
                    <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                      DARREN
                    </Text>
                  </motion.div>
                </Col>
                <Col span={24} className="flex justify-center lg:-mt-28">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    src={contributorLogo3}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                  />
                </Col>
              </Row>
            </motion.div>
          </Col>

          {/* Fourth Column */}
          <Col xs={24} sm={12} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Row className="orange-200 p-6 h-[75%] items-center justify-center">
                <Col span={24} className="flex justify-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    src={tgr4}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover"
                  />
                </Col>
                <Col span={24} className="flex flex-col items-center lg:-mt-40">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Text className="uppercase text-black font-extrabold text-xl">
                      HOWES
                    </Text>
                    <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                      LEWIS
                    </Text>
                  </motion.div>
                </Col>
                <Col span={24} className="flex justify-center lg:-mt-28">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    src={contributorLogo4}
                    alt="John Shin"
                    className="md:-mt-28 lg:-mt-28 rounded-lg h-[50vh] sm:h-[20vh] md:h-[30vh] lg:h-[50vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                  />
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Movie;
