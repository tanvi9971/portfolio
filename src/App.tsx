import { FootNote } from "./components/footnote";
import { Hero } from "./sections/hero";
import { IntroPanel } from "./sections/intro-panel";
import { TabContainer } from "./sections/tab-container";
import Anime from "react-anime";
import { useEffect } from "react";
import dp from "./assets/dp.png";
import "./styles/index.css";

function App() {
  useEffect(() => {
    console.log(`Images preloaded.`);
    new Image().src = dp;
  }, []);

  return (
    <div className="h-full min-h-screen static select-none">
      <Anime
        delay={(el, index) =>
          index === 0 ? 0 : index === 1 ? 2000 : 2000 + index! * 600
        }
        duration={3000}
        opacity={[0, 1]}
      >
        <Hero />

        <Padding>
          <IntroPanel />
        </Padding>

        <Padding>
          <TabContainer />
        </Padding>

        <FootNote />
      </Anime>
    </div>
  );
}

export const Padding: React.FC = ({ children }) => (
  <div className="px-2 sm:px-5 md:px-8 lg:px-44 xl:px-72 2xl:px-96 relative">
    {children}
  </div>
);
export default App;
