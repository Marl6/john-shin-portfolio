import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title } = Typography;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
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
  );
};

export default Contact;