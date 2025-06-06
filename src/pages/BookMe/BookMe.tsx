import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { JohnDescription1 } from "../../components/ui/BookMe/john-description1";
import bookme from "../../assets/img/bookme/bookmebg.png";

const { Text } = Typography;

const BookMe: React.FC = () => {
  return (
    <section
      id="bookme"
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url(${bookme})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[120px] sm:h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
              172-41.86,82.39-16.72,168.19-17.73,
              250.45-.39C823.78,31,906.67,72,
              985.66,92.83c70.05,18.48,146.53,26.09,
              214.34,3V0H0V27.35A600.21,600.21,
              0,0,0,321.39,56.44Z"
            className="fill-[#131213]"
          />
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
                  <Row className="flex-1 flex flex-col justify-start mt-[8.5rem]">
                    <JohnDescription1 />
                  </Row>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-14"
                >
                  <button className="p-[3px] relative" type="button">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ef7e45] to-orange-800 rounded-lg" />
                    <div className="px-8 py-2  bg-[black] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      <Text className="font-LeagueSpartan text-md font-bold tracking-widest">
                        Book Now!
                      </Text>
                    </div>
                  </button>
                </motion.div>
              </Col>

              <Col xs={24} md={8} className="flex flex-col h-full"></Col>

              <Col xs={24} md={8} className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Row className="flex-1 flex flex-row items-center justify-end mt-32">
                    <Text className="mr-4 lg:text-7xl md:text-6xl text-5xl font-extrabold text-black font-LeagueSpartan">
                      HIRE <br />
                      <span className="text-[#ef7e45]">JOHN SHIN</span>
                    </Text>
                    <Text className="lg:text-7xl md:text-6xl text-5xl font-extrabold text-black font-LeagueSpartan">
                      TO SPEAK!
                    </Text>
                    <Divider className="border-black border-[2px] flex-grow lg:-mt-1" />
                  </Row>

                  <Row className="flex-1 flex flex-col justify-start mt-14">
                    <Text className="text-lg font-light text-black font-sans text-justify leading-6 [word-spacing:0.5em]">
                      <span className="font-extrabold">John C. Shin</span> is
                      one of the most sought after and dynamic speakers of the
                      21st century. His success in life and business make him
                      2nd to none in delivering an experience that is sure to
                      captivate your audience and or corporation. John C. Shin
                      is also a bestselling author, investor, philanthropist and
                      success mentor! Don’t wait another minute or look anywhere
                      else, John is ready to wow your crowd and leave them
                      empowered and inspired!
                    </Text>
                  </Row>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Row>
      </div>
    </section>
  );
};

export default BookMe;
