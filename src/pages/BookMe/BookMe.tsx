import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const BookMe: React.FC = () => {
  return (
    <section id="bookme" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8">
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
  );
};

export default BookMe;
