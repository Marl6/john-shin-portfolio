import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
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
  );
};

export default About;