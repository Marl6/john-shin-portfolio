import React from "react";
import { Row, Typography } from "antd";
import { UpcomingEvents } from "../../components/ui/Event/upcoming-events";
import { motion } from "framer-motion";

const { Text } = Typography;

const Event: React.FC = () => {
  return (
    <section id="event" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row>
            <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-5">
              <span className="text-[#ef7e45]">Upcoming</span> Events
            </Text>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Row gutter={[32, 32]}>
            <UpcomingEvents />
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Event;
