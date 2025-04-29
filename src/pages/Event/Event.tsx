import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const Event: React.FC = () => {
  return (
    <section id="event" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8">
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
  );
};

export default Event;
