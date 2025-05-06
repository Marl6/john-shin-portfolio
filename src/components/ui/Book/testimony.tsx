import React from "react";
import { Row, Col, Typography } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

interface TestimonyProps {
  name: string;
  title: string;
  testimony: string;
  imageSrc: string;
}

export const Testimony: React.FC<TestimonyProps> = ({
  name,
  title,
  testimony,
  imageSrc,
}) => {
  return (
    <div className="relative w-full py-16 px-4 md:px-8 overflow-hidden">
      <Row
        className="relative z-10 max-w-7xl mx-auto"
        gutter={[32, 32]}
        align="middle"
        justify="center"
      >
        {/* Left Column - Testimony */}
        <Col xs={24} md={12} className="mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <Text className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 italic block mb-6">
                "{testimony}"
              </Text>
              <div className="mt-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
                <div className="flex flex-col items-center md:items-start">
                  <Text className="text-xl font-bold text-gray-900 dark:text-white block">
                    {name}
                  </Text>
                  <Text className="text-md text-gray-600 dark:text-gray-300">
                    {title}
                  </Text>
                </div>
                <img
                  src={imageSrc}
                  alt={`${name}`}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-white shadow-md mt-4 md:mt-0"
                />
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

// Example usage:
export const TestimonyExample = () => {
  return (
    <Testimony
      name="John Doe"
      title="CEO, Example Company"
      testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
  );
};
