import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { ShoppingOutlined } from "@ant-design/icons";
import bookPortrait from "../../../src/assets/img/book/book-portrait.png";
import book from "../../../src/assets/img/book/book.png";
import testimony from "../../../src/assets/img/book/testimony.png";
import bookcontributor1 from "../../../src/assets/img/book/ROCK.png";
import bookcontributor2 from "../../../src/assets/img/book/WANG.png";
import bookcontributor3 from "../../../src/assets/img/book/aoki.png";

const { Text } = Typography;

const Book: React.FC = () => {
  return (
    <section
      id="my-book"
      className="min-h-screen bg-white py-14 w-full relative"
    >
      {/* Top SVG Divider */}
      <div className="custom-shape-divider-top-1746093001 absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(131%+1.3px)] h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#fed7aa"
          ></path>
        </svg>
      </div>

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
              <Col xs={24} md={8} className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-28">
                    <Text className="text-5xl font-bold text-[#ef7e45] text-start font-Arapey italic">
                      HOW
                    </Text>
                    <Text className="text-6xl font-extrabold text-black font-LeagueSpartan text-center lg:-mt-1">
                      RICH ASIANS
                    </Text>
                    <Text className="text-5xl font-bold text-[#ef7e45] font-Arapey text-end italic lg:-mt-3">
                      THINK
                    </Text>
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-14">
                    <Text className="text-lg font-light text-black font-sans text-justify leading-6 [word-spacing:0.5em]">
                      Think and Grow Rich has emerged as one of the most read
                      self-help books of all time. Think and Grow Rich, by far,
                      is Napoleon Hill’s most popular book. He summarizes his
                      Philosophy of Success and explains it to the general
                      public. Since the release of the book in 1937, countless
                      millionaires and billionaires have used Napoleon’s work to
                      achieve their success and lead a rich life. The book is a
                      true work of art and radiates entrepreneurial spirit with
                      intellectual thought.
                    </Text>
                  </Row>
                </motion.div>
              </Col>

              <Col xs={24} md={8} className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full h-full relative lg:min-h-[762px]"
                >
                  <div
                    className="absolute inset-0 opacity-20 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${bookPortrait})`,
                    }}
                  ></div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Row
                      className="mt-14 w-4/5 mx-auto px-4 py-2 flex flex-col justify-center relative z-10 rounded-2xl bg-orange-400 cursor-pointer hover:bg-orange-500 transition-colors"
                      onClick={() =>
                        window.open(
                          "https://www.barnesandnoble.com/w/how-rich-asians-think-john-c-shin/1131290001",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <ShoppingOutlined className="text-white text-xl mb-1" />
                        <Text className="text-white text-center font-LeagueSpartan font-bold md:text-xl text-lg">
                          GET YOUR COPY TODAY!
                        </Text>
                      </div>
                    </Row>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                  >
                    <Row className="flex-1 flex flex-col mt-28 ml-5">
                      <div className="relative">
                        <img
                          src={book}
                          alt="John Shin"
                          className=" h-[30vh] sm:h-[25vh] md:h-[30vh] lg:h-[32vh] object-cover filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                    </Row>
                  </motion.div>

                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="md:text-xl text-lg font-bold text-black font-sans text-center">
                      A publication of the Napoleon Hill Foundation & Think &
                      Grow Rich
                    </Text>
                  </Row>
                </motion.div>
              </Col>

              <Col xs={24} md={8} className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-row items-center justify-end mt-5 md:mt-0">
                    <Text className="mr-4 lg:text-7xl md:text-6xl text-5xl font-extrabold text-[#ef7e45] font-LeagueSpartan tracking-wide">
                      MY
                    </Text>
                    <Text className="lg:text-7xl md:text-6xl text-5xl font-extrabold text-black font-LeagueSpartan tracking-wide">
                      BOOK
                    </Text>
                    <Divider className="border-black border-[2px] flex-grow lg:-mt-1" />
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-col justify-start mt-5">
                    <Text className="text-lg font-normal text-black font-sans text-justify">
                      Each chapter includes{" "}
                      <span className="font-bold">ACTION STEPS</span> on how to
                      effectively apply the principles of the book!
                    </Text>
                  </Row>
                </motion.div>

                <Row className="mt-8 w-full px-4 items-center md:items-start lg:items-start">
                  <Col className="px-6 w-full mx-auto py-7 bg-orange-400 rounded-2xl">
                    <Text className="text-white text-justify font-LeagueSpartan font-normal text-xl">
                      <span className="font-bold">Bill Walsh said</span> “ John
                      is the real deal and brings the principles of TGR alive in
                      a unique and impactful way”.
                    </Text>
                  </Col>
                  <Col className="-mt-1 flex flex-col md:mt-2">
                    <Row className="flex flex-col order-2 md:order-1 md:-ml-40 ml-5 md:mt-0 -mt-3">
                      <Text className="text-black font-LeagueSpartan font-bold text-2xl md:text-xl md:ml-24 text-center">
                        Bill Walsh
                      </Text>
                      <Text className="text-black font-LeagueSpartan font-normal text-lg md:text-base text-center md:-ml-7">
                        America’s Small Business Expert
                      </Text>
                    </Row>
                    <Row className="order-1 md:order-2 ml-5 md:ml-0">
                      <div className="relative">
                        <img
                          src={testimony}
                          alt="John Shin"
                          className="lg:-mt-32 md:ml-[162px] h-[25vh] sm:h-[25vh] md:h-[30vh] lg:h-[20vh] object-cover"
                        />
                      </div>
                    </Row>
                  </Col>
                </Row>

                <Row className="w-full justify-center md:mt-5 mt-10">
                  <Col>
                    <Text className="text-black font-LeagueSpartan font-bold text-xl">
                      BOOK <span className="text-[#ef7e45]">CONTRIBUTORS</span>{" "}
                      INCLUDE:
                    </Text>
                  </Col>
                  <Col span={24} className="mt-4">
                    <Row gutter={[16, 16]} justify="space-between">
                      <Col span={7} className="text-center flex flex-col">
                        <Text className="uppercase text-black font-extrabold text-xl">
                          THE
                        </Text>
                        <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                          ROCK
                        </Text>
                        <div className="flex items-center justify-center">
                          <img
                            src={bookcontributor1}
                            alt="John Shin"
                            className="lg: h-[15vh] sm:h-[25vh] md:h-[30vh] lg:h-[20vh] object-cover mt-1.5 filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </Col>
                      <Col span={7} className="text-center flex flex-col">
                        <Text className="uppercase text-black font-extrabold text-xl">
                          VERA
                        </Text>
                        <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                          WANG
                        </Text>
                        <div className="flex items-center justify-center">
                          <img
                            src={bookcontributor2}
                            alt="John Shin"
                            className="lg: h-[15vh] sm:h-[25vh] md:h-[30vh] lg:h-[20vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </Col>
                      <Col span={7} className="text-center flex flex-col">
                        <Text className="uppercase text-black font-extrabold text-xl">
                          STEVE
                        </Text>
                        <Text className="text-[#ef7e45] uppercase font-bold text-lg md:-mt-2 lg:-mt-2">
                          AOKI
                        </Text>
                        <div className="flex items-center justify-center">
                          <img
                            src={bookcontributor3}
                            alt="John Shin"
                            className="lg: h-[15vh] sm:h-[25vh] md:h-[30vh] lg:h-[20vh] object-cover filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </motion.div>
        </Row>
      </div>
    </section>
  );
};

export default Book;
