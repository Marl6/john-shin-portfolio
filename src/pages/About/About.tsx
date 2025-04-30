import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { MovingCards } from "../../components/ui/moving-cards-demo";

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            About Me
          </Text>
        </Row>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card className="h-full">
              <Title level={3}>My Story</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="h-full">
              <Title level={3}>My Vision</Title>
              <Paragraph>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </Card>
          </Col>

          <Col span={24}>
            <div className="mt-10">
              <Text className="block text-2xl font-semibold mb-4 text-center text-black font-lora">
                Testimonies
              </Text>
              <MovingCards />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
