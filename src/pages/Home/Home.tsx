import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import johnshin from "../../../src/assets/img/johnshin/mainimage.png";
import Featured from "../../components/ui/Featured/Featured";

const { Text, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white w-full relative overflow-hidden"
    >
      <div className="container mx-auto px-8">
        <Row className="mb-10">
          <Text className="text-3xl font-lora font-semibold text-center">
            <span className="text-[#ef7e45]">Featured</span>{" "}
            <span className="text-black">In</span>
          </Text>

          <Featured />
        </Row>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} className="flex justify-center">
            <div className="relative">
              <img
                src={johnshin}
                alt="John Shin"
                className="rounded-lg max-w-full h-auto max-h-[70vh] filter   drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 flex flex-col items-center text-center font-inter"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <Text className="text-4xl sm:text-5xl md:text-8xl font-bold mt-0 text-[#ef7e45] ml-10 font-jacques">
                    John C. Shin
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative w-full md:w-[600px] sm:w-[200px] h-[1px] bg-black mx-auto ml-6">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ef7e45] rounded-full border-2 border-white shadow-md" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Paragraph className="text-lg text-black font-sans ml-10">
                    Entrepreneur, Investor, Philanthropist & Speaker
                  </Paragraph>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="pt-4 justify-center ml-10"
                >
                  <Space size="large">
                    <motion.a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Facebook"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FacebookOutlined />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Instagram"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <InstagramOutlined />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Twitter"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TwitterOutlined />
                    </motion.a>
                  </Space>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="pt-3 flex justify-center ml-10"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const element = document.getElementById("bookme");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-[slate-800] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-3 ring-1 ring-white/10">
                      <span>Book me</span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
