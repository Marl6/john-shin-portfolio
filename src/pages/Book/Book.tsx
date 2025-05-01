import React from "react";
import { Row, Col, Typography } from "antd";
import Book1 from "../../../src/assets/img/book/book.png";
import { BookContributors } from "../../components/ui/book-contributors";

const { Text } = Typography;

const Book: React.FC = () => {
  return (
    <section
      id="my-book"
      className="min-h-screen bg-gray-50 py-20 w-full relative"
    >
      {/* Top SVG Divider */}
      <div className="custom-shape-divider-top-1746093001 absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(131%+1.3px)] h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#ffdcac"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-8">
        <Row>
          <Text className="mx-auto text-5xl font-semibold mb-4 text-center text-black font-lora mt-10">
            <span className="text-[#ef7e45]">My</span> Books
          </Text>
        </Row>
        <Row gutter={[32, 32]} className="mt-14">
          <Col xs={24} md={12} className="text-center">
            <Row>
              <Text className="text-black text-3xl font-bold font-lora mx-auto">
                How Rich Asians Think
              </Text>
            </Row>
            <Row className="mt-10">
              <Text className="text-black text-lg font-lora mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text className="text-black text-lg font-lora mx-auto mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Text className="text-black text-lg font-lora mx-auto mt-5">
                * Endorsed by the Napoleon Hill Foundation
              </Text>
            </Row>
          </Col>

          {/* Book 2 */}
          <Col xs={24} md={12}>
            <Row className="mx-auto">
              <div className="relative mx-auto">
                <img
                  src={Book1}
                  alt="Book1"
                  className="rounded-lg max-w-[400px] max-h-[450px] w-full h-auto mx-auto"
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Row gutter={[32, 32]} className="mt-10">
          <Col xs={24} md={24} className="text-center">
            <Text className="text-black text-xl font-bold font-lora">
              Book Contributors:
            </Text>
          </Col>
          <Col xs={24} md={24} className="text-center">
            <BookContributors />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Book;
