import { Panel } from "../components/panel";
import { Heading } from "../components/typography";

export const IntroPanel: React.FC = () => (
  <Panel className="p-6 mb-10 -mt-10">
    <Heading>
      <div className="lg:flex">
        <div className="float-left lg:float-none mr-3 text-3xl">👋</div>
        Hi! I'm a computer engineer by education and have been working in the
        software industry as a web/mobile application developer. I enjoy
        building something that looks, feels, and works nice and is instrumental
        in achieving its purpose.
      </div>
    </Heading>
  </Panel>
);
