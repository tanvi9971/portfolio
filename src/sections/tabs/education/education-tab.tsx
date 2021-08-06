import { Heading, Paragraph } from "../../../components/typography";
import { experiences, IEducationData } from "./education-data";
import { ImArrowUpRight2 } from "react-icons/im";

export const EducationTab: React.FC = () => (
  <div>
    {experiences.map((e) => (
      <div key={e.collegeName} className="mb-10">
        <Education {...e} />
      </div>
    ))}
  </div>
);

const Education: React.FC<IEducationData> = (props) => {
  const { collegeName, degreeName, from, logoUrl, to, description } = props;

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
            {collegeName}
          </Heading>
          <Paragraph>{degreeName}</Paragraph>
          <Paragraph className="font-semibold text-pink-900">
            {from} - {to}
          </Paragraph>
        </div>
      </div>

      <div className="mt-3 lg:mt-0">
        <ul>
          {description?.map((d, i) => (
            <li key={i} className="mb-3 flex">
              <ImArrowUpRight2
                size="16"
                className="flex-shrink-0 mr-2 mt-2 text-pink-900"
              />
              <Paragraph>{d}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
