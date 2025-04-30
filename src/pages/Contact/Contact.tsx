import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Text } = Typography;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            Contact Me
          </Text>
        </Row>{" "}
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
  );
};

export default Contact;
