import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import johnshin from "../../assets/img/johnshin/mainimage.png";
import Featured from "../Featured/Featured";

const { Text, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white w-full"
    >
      <div className="container mx-auto px-8">
        <Row className="mb-10">
          <Text className="text-2xl font-lora font-semibold text-center">
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
                className="rounded-lg max-w-full h-auto max-h-[70vh]"
              />
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className="space-y-6 flex flex-col items-center text-center font-inter">
              <div className="text-center">
                <Text className="text-4xl sm:text-5xl md:text-8xl font-bold mt-0 text-black ml-10 font-jacques">
                  John C. Shin
                </Text>
              </div>

              <Divider className="my-6 bg-black w-full ml-10" />

              <Paragraph className="text-lg text-black font-sans ml-10">
                Entrepreneur, Investor, Philanthropist & Speaker
              </Paragraph>

              <Space size="large" className="pt-4 justify-center ml-10">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                  title="Facebook"
                >
                  <FacebookOutlined />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                  title="Instagram"
                >
                  <InstagramOutlined />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                  title="Twitter"
                >
                  <TwitterOutlined />
                </a>
              </Space>

              <div className="pt-3 flex justify-center ml-10">
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
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
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
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
