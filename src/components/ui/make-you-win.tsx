import { Row, Col } from "antd";

const MakeYouWin = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Row gutter={[32, 32]} justify="center">
          {/* Left Card */}
          <Col xs={24} md={8}>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="/path-to-book.jpg"
                alt="How Rich Asians Think"
                className="mx-auto h-48 object-contain"
              />
              <h3 className="mt-6 text-lg font-semibold text-black">
                How Rich Asians Think
              </h3>
              <p className="mt-4 text-sm text-gray-700">
                Think and Grow Rich has emerged as one of the most read
                self-help books...
              </p>
            </div>
          </Col>

          {/* Center Card */}
          <Col xs={24} md={8}>
            <div className="relative bg-gradient-to-b from-orange-400 to-red-500 p-6 shadow-lg rounded-lg text-white text-center">
              <img
                src="/path-to-speaker.png"
                alt="Hire Me To Speak"
                className="mx-auto h-40 object-contain -mt-20 bg-white rounded-full shadow-md"
              />
              <h3 className="mt-6 text-lg font-semibold">Hire Me To Speak</h3>
              <p className="mt-4 text-sm">
                John C. Shin is one of the most sought after and dynamic
                speakers of the 21st century...
              </p>
            </div>
          </Col>

          {/* Right Card */}
          <Col xs={24} md={8}>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="/path-to-movie.jpg"
                alt="TGR The Legacy Movie"
                className="mx-auto h-48 object-contain"
              />
              <h3 className="mt-6 text-lg font-semibold text-black">
                TGR The Legacy Movie
              </h3>
              <p className="mt-4 text-sm text-gray-700">
                The TGR The Legacy Movie encapsulates and brings Napoleon Hill’s
                principles to life...
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MakeYouWin;
