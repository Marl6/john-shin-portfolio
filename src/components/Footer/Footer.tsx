import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer: React.FC = () => (
  <AntFooter className="border-t border-brand bg-brand-card py-10">
    <div className="container mx-auto px-8">
      <Row align="middle" justify="space-between">
        <Col xs={24} md={12} className="text-center md:text-left mb-4 md:mb-0">
          <Title level={5} className="!mb-1 !text-brand-ink">
            John C. Shin
          </Title>
          <Text className="text-brand-muted text-sm block">
            Entrepreneur, investor, philanthropist, and business strategist.
          </Text>
          <Text className="text-brand-muted text-sm block mt-1">
            {new Date().getFullYear()} All rights reserved.
          </Text>
        </Col>
        <Col xs={24} md={12} className="text-center md:text-right">
          <Space size="large" className="mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=100064284123608"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookOutlined className="text-brand-ink hover:text-brand-accent text-2xl transition" />
            </a>
            <a
              href="https://instagram.com/johnshinofficial/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramOutlined className="text-brand-ink hover:text-brand-accent text-2xl transition" />
            </a>
            <a
              href="https://x.com/johnshinceo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <XOutlined className="text-brand-ink hover:text-brand-accent text-2xl transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-shin-4907b21a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined className="text-brand-ink hover:text-brand-accent text-2xl transition" />
            </a>
          </Space>
          <div>
            <a
              href="#contact"
              className="inline-block rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start a Conversation
            </a>
          </div>
        </Col>
      </Row>
    </div>
  </AntFooter>
);

export default Footer;
