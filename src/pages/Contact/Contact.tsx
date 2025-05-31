import React from "react";
import { Row, Col, Typography, Card } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import johnShin from "../../assets/img/contact/contactMe.png";
import logo from "../../assets/img/logo/john-shin-logo.png";

const { Text } = Typography;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="min-h-screen bg-orange-100 py-20 w-full">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Row justify="center" className="w-full">
            <Text className="text-[#ef7e45] font-extrabold text-[10rem] tracking-wider font-LeagueSpartan">
              CONTACT <span className="text-black">ME</span>
            </Text>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-50 p-4 border border-[#ef7e45] filter drop-shadow-[0_15px_10px_rgba(0,0,0,0.3)]">
                  <Text className="text-black font-lora text-lg text-center mb-4 block">
                    Get in Touch with John Shin!
                  </Text>

                  <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                    onSubmit={handleSubmit}
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border-[#ef7e45] shadow-sm focus:ring-[#ef7e45] focus:border-[#ef7e45] p-2 text-black"
                        placeholder="you@example.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="block mx-auto bg-[#ef7e45] text-white px-4 py-2 rounded-md hover:bg-[#e86f34]"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="items-center text-center mt-10"
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
                      className="text-2xl text-[#1877F2] hover:text-[#ef7e45] transition-colors"
                      title="Facebook"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FacebookFilled />
                      </motion.div>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-[#E4405F] hover:text-[#ef7e45] transition-colors"
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
                      className="text-2xl text-[#000000] hover:text-[#ef7e45] transition-colors"
                      title="Twitter"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <XOutlined />
                      </motion.div>
                    </a>
                  </Col>
                </Row>
              </motion.div>
            </Col>

            <Col xs={24} md={12} className="relative">
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute z-1 w-3/4 h-auto top-[35%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.img
                    src={logo}
                    alt="Logo"
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="relative lg:-mt-64 lg:-ml-24 h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] ml-4 sm:ml-8 md:ml-20"
                >
                  <motion.img
                    src={johnShin}
                    alt="John Shin"
                    className="w-full h-full object-cover filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </motion.div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
