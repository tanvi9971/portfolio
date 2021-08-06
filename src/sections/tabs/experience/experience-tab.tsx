import { Heading, Paragraph } from "../../../components/typography";
import { experiences, IExperienceData } from "./experience-data";
import { ImArrowUpRight2 } from "react-icons/im";
import { GoLinkExternal } from "react-icons/go";

export const ExperienceTab: React.FC = () => (
  <div>
    {experiences.map((e) => (
      <div key={e.companyName} className="mb-10">
        <Experience {...e} />
      </div>
    ))}
  </div>
);

const Experience: React.FC<IExperienceData> = (props) => {
  const { companyName, logoUrl, from, to, description, position, url } = props;

  return (
    <div className="flex flex-col lg:flex-row relative">
      <div
        className="flex flex-shrink-0 lg:flex-col lg:mr-5 xl:mr-10 items-start rounded-xl
      self-start lg:max-w-xs"
      >
        <img
          src={logoUrl}
          className="h-16 w-16 lg:h-20 lg:w-20 lg:mb-3 bg-white rounded-xl"
          alt=""
        />
        <div className="ml-3 lg:ml-0">
          <Heading bold className="flex items-center">
            {companyName}
            {url && (
              <a
                href={url}
                rel="noreferrer"
                target="_blank"
                className="text-pink-900 ml-2"
              >
                <GoLinkExternal size="16" />
              </a>
            )}
          </Heading>{" "}
          <Paragraph>{position}</Paragraph>
          <Paragraph className="font-semibold text-pink-900">
            {from} - {to}
          </Paragraph>
        </div>
      </div>

      <div className="mt-5 lg:mt-0">
        <ul>
          {description.map((d, i) => (
            <li key={i} className="mb-3 flex">
              <ImArrowUpRight2
                size="16"
                className="flex-shrink-0 mr-2 mt-2 text-pink-900"
              />{" "}
              <Paragraph>{d}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
