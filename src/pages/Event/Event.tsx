import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Text, Paragraph } = Typography;

const Event: React.FC = () => {
  return (
    <section id="event" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            Upcoming Events
          </Text>
        </Row>{" "}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card className="h-full">
              <Title level={3}>Next Event</Title>
              <Paragraph>
                Details about the upcoming event, date, location, and
                description.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Event;
