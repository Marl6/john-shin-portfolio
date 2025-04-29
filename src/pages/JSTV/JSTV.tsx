import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title } = Typography;

const JSTV: React.FC = () => {
  return (
    <section id="jstv" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
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
  );
};

export default JSTV;
