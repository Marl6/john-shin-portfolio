import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Text } = Typography;

const Book: React.FC = () => {
  return (
    <section id="my-book" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            My Books
          </Text>
        </Row>{" "}
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
  );
};

export default Book;
