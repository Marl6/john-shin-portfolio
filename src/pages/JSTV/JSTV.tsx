import React from "react";
import { Row } from "antd";
import { JSTVParallax } from "../../components/ui/JSTV/parallax-jstv";

const JSTV: React.FC = () => {
  return (
    <section id="jstv" className="min-h-screen bg-black-50 pt-20 w-full">
      <div className="container mx-auto px-8">
        <Row gutter={[32, 32]}>
          <JSTVParallax />
        </Row>
      </div>
    </section>
  );
};

export default JSTV;
