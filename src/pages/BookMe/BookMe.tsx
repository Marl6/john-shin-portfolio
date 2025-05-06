import React from "react";
import { Row, Col, Typography } from "antd";
import { motion } from "framer-motion";
import { JohnDescription1 } from "../../components/ui/BookMe/john-description1";
import { JohnDescription2 } from "../../components/ui/BookMe/john-description2";
import { JohnDescription3 } from "../../components/ui/BookMe/john-description3";
import { JohnDescription4 } from "../../components/ui/BookMe/john-description4";
import { JohnDescription5 } from "../../components/ui/BookMe/john-description5";

const { Text } = Typography;

const BookMe: React.FC = () => {
  return (
    <section
      id="bookme"
      className="relative min-h-screen bg-white w-full flex items-center justify-center"
    >
      {/* SVG Shape Divider at the top */}
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

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row justify="center" align="middle">
            <Text className="text-5xl font-semibold mb-4 text-center text-black font-lora">
              <span className="text-[#ef7e45]">Hire</span> John To Speak!
            </Text>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col
              xs={24}
              md={12}
              className="text-center flex flex-col justify-center h-full"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Text className="text-5xl md:text-7xl lg:text-9xl font-bold text-[#ef7e45] mb-8">
                  Why you should book me?
                </Text>
              </motion.div>
            </Col>

            {/* Preserved list structure */}
            <Col
              xs={24}
              md={12}
              className="flex flex-col justify-center h-full"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center mt-8">
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#ef7e45] flex items-center justify-center mr-4 text-white font-bold">
                        1
                      </span>
                      <Text className="text-lg text-black">
                        <JohnDescription1 />
                      </Text>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#ef7e45] flex items-center justify-center mr-4 text-white font-bold">
                        2
                      </span>
                      <Text className="text-lg text-black">
                        <JohnDescription2 />
                      </Text>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#ef7e45] flex items-center justify-center mr-4 text-white font-bold">
                        3
                      </span>
                      <Text className="text-lg text-black">
                        <JohnDescription3 />
                      </Text>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#ef7e45] flex items-center justify-center mr-4 text-white font-bold">
                        4
                      </span>
                      <Text className="text-lg text-black">
                        <JohnDescription4 />
                      </Text>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#ef7e45] flex items-center justify-center mr-4 text-white font-bold">
                        5
                      </span>
                      <Text className="text-lg text-black">
                        <JohnDescription5 />
                      </Text>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default BookMe;
