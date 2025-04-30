import React from "react";
import movieBanner from "../../../src/assets/img/movie/Movie.png";
import { Col, Row, Typography } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { Contributors } from "../../components/ui/contributors";

const { Text } = Typography;

const Movie: React.FC = () => {
  return (
    <section id="movie" className="min-h-screen bg-white py-20 w-full">
      <div className="container mx-auto px-8 mt-10">
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-5">
            Think{" "}
            <span className="text-[#ef7e45] font-Baskerville italic">&</span>{" "}
            Grow Rich The Legacy Movie
          </Text>
        </Row>{" "}
        <Row className="relative w-full h-[60vh] mt-5">
          <Col className="flex items-center justify-center ml-10">
            <img
              src={movieBanner}
              alt="Think & Grow Rich Movie"
              className="max-w-full max-h-full object-contain"
            />
          </Col>
        </Row>
        <Row className="flex justify-center items-center">
          <a
            href="https://vimeo.com/ondemand/tgrlegacymovie"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-[#ef7e45] text-white font-bold font-inter transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#ef7e45] text-1xl flex items-center"
          >
            <IoCartOutline className="text-2xl mr-2" />
            Get Your Copy Now!
          </a>
        </Row>
        <Row>
          <Text className="mx-auto text-3xl font-semibold mb-4 text-center text-black font-lora mt-20">
            TGR The Legacy Contributors
          </Text>
          <Contributors />
        </Row>
      </div>
    </section>
  );
};

export default Movie;
