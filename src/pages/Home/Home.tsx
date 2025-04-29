import React from "react";
import { Row, Col, Typography, Space, Divider, Card } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import johnshin from "../../assets/img/johnshin/mainimage.png";

const { Text, Paragraph, Title } = Typography;

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-4">
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

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">About Me</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={3}>My Story</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={3}>My Vision</Title>
                <Paragraph>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Movie Section */}
      <section id="movie" className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">Featured Movies</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={<div className="h-48 bg-gray-300" />}
                className="h-full"
              >
                <Card.Meta
                  title="Movie Title 1"
                  description="Description of the movie goes here"
                />
              </Card>
            </Col>
            {/* Add more movie cards as needed */}
          </Row>
        </div>
      </section>

      {/* My Book Section */}
      <section id="my-book" className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">My Books</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={<div className="h-64 bg-gray-300" />}
                className="h-full"
              >
                <Card.Meta
                  title="Book Title 1"
                  description="Brief description of the book"
                />
              </Card>
            </Col>
            {/* Add more book cards as needed */}
          </Row>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">Upcoming Events</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={3}>Next Event</Title>
                <Paragraph>
                  Details about the upcoming event, date, location, and description.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* JSTV Section */}
      <section id="jstv" className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">JSTV</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24}>
              <Card className="h-full">
                <Title level={3}>Latest Episodes</Title>
                {/* Add video content or episode list */}
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Book Me Section */}
      <section id="bookme" className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">Book Me</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={16} className="mx-auto">
              <Card className="h-full">
                <Title level={3}>Speaking Engagements</Title>
                <Paragraph>
                  Interested in having John speak at your event? Fill out the form below.
                </Paragraph>
                {/* Add booking form */}
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-12">Contact Me</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={16} className="mx-auto">
              <Card className="h-full">
                <Title level={3}>Get in Touch</Title>
                {/* Add contact form */}
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home;
