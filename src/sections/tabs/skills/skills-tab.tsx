import { Heading, Paragraph } from "../../../components/typography";
import {
  ISkill,
  ISkillGroup,
  skillGroups,
  SkillProficiency,
} from "./skills-data";

export const SkillsTab: React.FC = () => {
  return (
    <div className="relative">
      {skillGroups.map((group, key) => (
        <div key={key}>
          <SkillGroup {...group} />
        </div>
      ))}
    </div>
  );
};

const SkillGroup: React.FC<ISkillGroup> = ({ skillGroupName, skills }) => {
  return (
    <div>
      <Heading bold className="mb-4">
        {skillGroupName}
      </Heading>
      <div className="flex flex-wrap">
        {skills.map((skill, key) => (
          <div className="mr-5" key={key}>
            <Skill {...skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skill: React.FC<ISkill> = ({ logoUrl, proficiency, skillName }) => {
  return (
    <div className="flex flex-col items-center flex-shrink-0 mb-10">
      <img src={logoUrl} alt="" className="h-14 lg:h-20" />
      <div className="mt-2 text-center">
        <Paragraph>
          {skillName} <br />
          {proficiency === SkillProficiency.INTERMEDIATE ? (
            <span>⭐⭐{greyStar}</span>
          ) : (
            <span>
              ⭐{greyStar}
              {greyStar}
            </span>
          )}
        </Paragraph>
      </div>
    </div>
  );
};

const greyStar = <span className="filter invert grayscale">⭐</span>;
