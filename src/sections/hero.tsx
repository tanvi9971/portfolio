import Anime from "react-anime";
import dp from "../assets/dp.png";
import bg from "../assets/bg.jpg";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import { HeroText, Heading } from "../components/typography";
import "react-awesome-button/dist/themes/theme-c137.css";
const { AwesomeButton } = require("react-awesome-button");

export const Hero = () => {
  return (
    <div
      className="relative justify-center items-start md:items-end  w-full
      flex flex-col md:flex-row-reverse px-7 pt-10 overflow-hidden z-0"
      style={{
        backgroundImage: `url('${bg}')`,
        // backgroundImage: `url('https://i.pinimg.com/originals/b3/42/33/b342335955b6caf626740cbad76e64a4.jpg')`,
        // backgroundImage: `url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRhcmslMjBwaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')`,
        backgroundPositionY: "50%",
        backgroundPositionX: "30%",
      }}
    >
      <div className="md:ml-20 md:mb-10">
        <div className="text-left text-white">
          <div className="md:w-80">
            <Heading>
              Web and mobile developer with hands-on experience in React, React
              Native, NodeJS and MongoDB
            </Heading>
          </div>
          <HeroText cursive>Tanvi Medhe</HeroText>
        </div>

        <div className="flex flex-col mt-6 md:mb-10">
          <div>
            <a href="mailto:tanvi9971@gmail.com">
              <AwesomeButton type="primary" title="tanvi9971@gmail.com">
                <div className="flex">
                  <AiOutlineMail size="25" />{" "}
                  <div className="ml-2">tanvi9971@gmail.com</div>
                </div>
              </AwesomeButton>
            </a>
          </div>

          <div className="mt-4 flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://aditya-medhe-portfolio-bucket.s3.ap-south-1.amazonaws.com/tanvi-medhe-resume.pdf"
            >
              <AwesomeButton type="secondary">
                <div className="flex">
                  <AiOutlineDownload size="25" className="mr-2" />
                  Resumé
                </div>
              </AwesomeButton>
            </a>

            <a
              href="https://github.com/tanvikchw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AwesomeButton type="secondary" className="ml-3">
                <div className="flex">
                  <AiOutlineGithub size="25" className="mr-2" />
                  GitHub
                </div>
              </AwesomeButton>
            </a>
          </div>
        </div>
      </div>

      <Anime
        marginBottom="2.5rem"
        duration={400}
        easing="easeInQuint"
        elasticity={0}
        delay={2000}
      >
        <img
          src={dp}
          alt=""
          className="mt-10 mb-0 h-52 w-52 md:w-64 md:h-64 
        filter hover:drop-shadow-dp grayscale hover:grayscale-0
        transform hover:scale-110 transition-all duration-300 
        flex-shrink-0"
        />
      </Anime>
    </div>
  );
};
