import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const BookMe: React.FC = () => {
  return (
    <section id="bookme" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            Book Me
          </Text>
        </Row>{" "}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={16} className="mx-auto">
            <Card className="h-full">
              <Title level={3}>Speaking Engagements</Title>
              <Paragraph>
                Interested in having John speak at your event? Fill out the form
                below.
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
