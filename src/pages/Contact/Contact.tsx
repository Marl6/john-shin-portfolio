import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Text } = Typography;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-10">
            <span className="text-[#ef7e45]">Contact</span> Me
          </Text>
        </Row>{" "}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={16} className="mx-auto">
            <Card className="h-full bg-gray-50 p-6">
              <Text className="text-black font-lora text-lg text-center mb-4 block">
                send a message!
              </Text>
              {/* Add contact form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#ef7e45] text-white px-4 py-2 rounded-md hover:bg-[#e86f34]"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
