import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title } = Typography;

const Movie: React.FC = () => {
  return (
    <section id="movie" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8">
        <Title level={2} className="text-center mb-12">Featured Movies</Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card
              hoverable
              cover={<div className="h-48 bg-gray-300" />}
              className="h-full"
            >
              <Card.Meta
                title="Movie Title 1"
                description="Description of the movie goes here"
              />
            </Card>
          </Col>
          {/* Add more movie cards as needed */}
        </Row>
      </div>
    </section>
  );
};

export default Movie;
