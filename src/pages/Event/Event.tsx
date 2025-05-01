import React from "react";
import { Row, Typography } from "antd";
import { UpcomingEvents } from "../../components/ui/upcoming-events";

const { Text } = Typography;

const Event: React.FC = () => {
  return (
    <section id="event" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8 mt-10">
        <Row>
          <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-5">
            <span className="text-[#ef7e45]">Upcoming</span> Events
          </Text>
        </Row>
        <Row gutter={[32, 32]} className="mt-10">
          <UpcomingEvents />
        </Row>
      </div>
    </section>
  );
};

export default Event;
