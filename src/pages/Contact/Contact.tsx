import React from "react";
import { Row, Col, Typography, Card } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Text } = Typography;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Row>
            <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-10">
              <span className="text-[#ef7e45]">Contact</span> Me
            </Text>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} className="text-center mt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Text className="text-black text-xl font-bold font-Baskerville block">
                  Follow me on my Social Medias!
                </Text>

                <Row justify="center" gutter={[16, 16]} className="mt-4">
                  <Col>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Facebook"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FacebookOutlined />
                      </motion.div>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Instagram"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <InstagramOutlined />
                      </motion.div>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-black hover:text-[#ef7e45] transition-colors"
                      title="Twitter"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <TwitterOutlined />
                      </motion.div>
                    </a>
                  </Col>
                </Row>
              </motion.div>
            </Col>

            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-50 p-6">
                  <Text className="text-black font-lora text-lg text-center mb-4 block">
                    send a message!
                  </Text>

                  <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <motion.textarea
                        rows={4}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="bg-[#ef7e45] text-white px-4 py-2 rounded-md hover:bg-[#e86f34]"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
