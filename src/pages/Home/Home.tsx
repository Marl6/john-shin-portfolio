import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import JohnShinNew from "../../../src/assets/img/johnshin/johnshin-new-portrait.png";
import Featured from "../../components/ui/Featured/Featured";

const { Text } = Typography;

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center md:bg-[#ef7e45] bg-white w-full relative overflow-hidden"
    >
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 hidden md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M35,0 C150,30 50,70 0,150 L0,0" fill="white" />
      </svg>
      <div className="container mx-auto px-8 z-10">
        <Row className="md:mb-3 lg:mb-0 mt-24 md:mt-28">
          <Text className=" text-xl md:text-3xl lg:text-3xl font-lora font-semibold text-center">
            <span className="text-[#ef7e45]">Featured</span>{" "}
            <span className="text-black">In</span>
          </Text>

          <Featured />
        </Row>
        <Row gutter={[32, 32]} align="middle">
          <Col
            xs={24}
            md={12}
            className="order-2 md:order-1 md:mt-14 lg:mt-14 mt-3"
          >
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
                <Text className="whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-0 text-[#ef7e45] md:ml-10 lg:ml-10 font-jacques uppercase">
                  John C. Shin
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-[250px] sm:w-[400px] md:w-[600px] h-[1px] bg-black mx-auto md:ml-8 lg:ml-8 mt-3">
                  <div className="relative flex-grow mx-4 h-[1px]">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ef7e45] rounded-full border-2 border-white shadow-md" />
                    <div className="absolute left-[calc(50%-1.5rem)] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#ef7e45] rotate-45 border-2 border-white shadow-md" />
                    <div className="absolute left-[calc(50%+1rem)] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#ef7e45] rotate-45 border-2 border-white shadow-md" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Text className="text-lg text-black font-sans md:ml-10 lg:ml-10 pt-3">
                  Entrepreneur, Investor, Philanthropist, & Speaker
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="md:pt-4 lg:pt-4 justify-center ml-10 pt-4"
              >
                <Space size="large" className="mr-10 md:mr-0 lg:mr-0">
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
                className="md:pt-3 lg:pt-3 flex justify-center ml-10"
              >
                <button
                  type="button"
                  onClick={() => {
                    const element = document.getElementById("bookme");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-2 mr-10 md:mr-0 lg:mr-0 bg-[slate-800] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
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
          </Col>

          <Col
            xs={24}
            md={12}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={JohnShinNew}
                alt="John Shin"
                className="rounded-lg h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] object-cover filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] ml-4 sm:ml-8 md:ml-20 lg:ml-20"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
