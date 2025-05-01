import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer: React.FC = () => (
  <AntFooter className="bg-black py-8">
    <div className="container mx-auto px-8">
      <Row align="middle" justify="space-between">
        <Col xs={24} md={12} className="text-center md:text-left mb-4 md:mb-0">
          <Title level={5} className="text-white mb-2">John C. Shin</Title>
          <Text className="text-gray-300 text-sm block">
            {new Date().getFullYear()} All rights reserved.
          </Text>
        </Col>
        <Col xs={24} md={12} className="text-center md:text-right">
          <Space size="large">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookOutlined className="text-white hover:text-blue-400 text-2xl transition" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramOutlined className="text-white hover:text-pink-400 text-2xl transition" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterOutlined className="text-white hover:text-blue-400 text-2xl transition" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined className="text-white hover:text-blue-400 text-2xl transition" />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  </AntFooter>
);

export default Footer;