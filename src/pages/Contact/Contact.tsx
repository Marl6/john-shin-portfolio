import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import johnShin from "../../assets/img/contact/contactMe.png";
import logo from "../../assets/img/logo/john-shin-logo.png";

const { Paragraph, Text, Title } = Typography;
const CONTACT_EMAIL = "team@johncshin.com";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, company, message } = formData;
    const subject = `Business Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0AInquiry:%0D%0A${message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Row justify="center" className="mb-10 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Contact
              </Text>
              <Title className="!mb-4 !mt-3 !font-LeagueSpartan !text-4xl !text-brand-ink sm:!text-5xl">
                Let&apos;s discuss your business goals
              </Title>
              <Paragraph className="!mb-0 !text-base !text-brand-muted sm:!text-lg">
                Reach out for speaking engagements, strategic partnerships,
                mentorship opportunities, or media collaborations.
              </Paragraph>
            </div>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-3xl border border-brand bg-brand-card p-4 shadow-sm z-10">
                  <Text className="mb-1 block text-center font-lora text-lg text-brand-ink">
                    Business Inquiry Form
                  </Text>
                  <Text className="mb-5 block text-center text-sm text-brand-muted">
                    Response times are typically within 1-2 business days.
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
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brand-ink"
                      >
                        Full Name
                      </label>
                      <motion.input
                        id="name"
                        type="text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border border-brand bg-white p-2 text-brand-ink shadow-sm focus:border-[#d86f33] focus:ring-[#d86f33]"
                        placeholder="Your full name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-brand-ink"
                      >
                        Work Email
                      </label>
                      <motion.input
                        id="email"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border border-brand bg-white p-2 text-brand-ink shadow-sm focus:border-[#d86f33] focus:ring-[#d86f33]"
                        placeholder="you@example.com"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-brand-ink"
                      >
                        Company / Organization
                      </label>
                      <motion.input
                        id="company"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.75 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border border-brand bg-white p-2 text-brand-ink shadow-sm focus:border-[#d86f33] focus:ring-[#d86f33]"
                        placeholder="Company name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brand-ink"
                      >
                        How Can We Help?
                      </label>
                      <motion.textarea
                        id="message"
                        rows={4}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-1 block w-full rounded-md border border-brand bg-white p-2 text-brand-ink shadow-sm focus:border-[#d86f33] focus:ring-[#d86f33]"
                        placeholder="Share your objectives, timeline, and preferred collaboration format."
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
                      className="mx-auto block rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
                    >
                      Submit Inquiry
                    </motion.button>
                  </motion.form>

                  <Text className="mt-4 block text-center text-xs text-brand-muted">
                    Direct email: {CONTACT_EMAIL}
                  </Text>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-10 items-center text-center"
              >
                <Text className="block text-xl font-bold font-Baskerville text-brand-ink">
                  Follow John
                </Text>

                <Row justify="center" gutter={[16, 16]} className="mt-4">
                  <Col>
                    <a
                      href="https://www.facebook.com/profile.php?id=100064284123608"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-brand-ink transition-colors hover:text-brand-accent"
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
                      href="https://www.instagram.com/johnshinofficial/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-brand-ink transition-colors hover:text-brand-accent"
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
                      href="https://x.com/johnshinceo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-brand-ink transition-colors hover:text-brand-accent"
                      title="X"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <XOutlined />
                      </motion.div>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://www.linkedin.com/in/john-shin-4907b21a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-brand-ink transition-colors hover:text-brand-accent"
                      title="LinkedIn"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LinkedinOutlined />
                      </motion.div>
                    </a>
                  </Col>
                </Row>
              </motion.div>
            </Col>

            <Col xs={24} md={12} className="relative z-0">
              <div className="relative h-full w-full">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute left-[13%] top-[16%] z-1 h-auto w-3/4 -translate-x-1/2 -translate-y-1/2 transform md:left-[55%] md:top-[35%]"
                >
                  <motion.img
                    src={logo}
                    alt="Logo"
                    className="h-auto w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="relative -ml-14 h-[40vh] sm:ml-8 sm:h-[50vh] md:ml-20 md:h-[65vh] lg:-ml-24 lg:-mt-64 lg:h-[80vh]"
                >
                  <motion.img
                    src={johnShin}
                    alt="John Shin"
                    className="h-full w-full rounded-2xl border border-brand object-cover filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)] mt-72"
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
