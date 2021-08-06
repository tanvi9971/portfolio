import ts from "../../../assets/skills/ts.svg";
import js from "../../../assets/skills/js.png";
import react from "../../../assets/skills/react.png";
import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import nodejs from "../../../assets/skills/nodejs.svg";
import lambda from "../../../assets/skills/lambda.svg";
import express from "../../../assets/skills/express.png";
import graphql from "../../../assets/skills/graphql.png";
import sql from "../../../assets/skills/sql.png";
import mongo from "../../../assets/skills/mongo.png";
import elasticsearch from "../../../assets/skills/elasticsearch.png";

export enum SkillProficiency {
  BEGINNER,
  INTERMEDIATE,
}

export interface ISkillGroup {
  skillGroupName: string;
  skills: ISkill[];
}

export interface ISkill {
  skillName: string;
  logoUrl: string;
  proficiency: SkillProficiency;
}

export const skillGroups: ISkillGroup[] = [
  {
    skillGroupName: "Programming Languages",
    skills: [
      {
        skillName: "TypeScript",
        logoUrl: ts,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "JavaScript",
        logoUrl: js,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
    ],
  },
  {
    skillGroupName: "Web Development",
    skills: [
      {
        skillName: "ReactJS",
        logoUrl: react,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "HTML5",
        logoUrl: html,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "CSS3",
        logoUrl: css,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
    ],
  },
  {
    skillGroupName: "Server Side",
    skills: [
      {
        skillName: "NodeJS",
        logoUrl: nodejs,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "AWS Lambda",
        logoUrl: lambda,
        proficiency: SkillProficiency.BEGINNER,
      },
      {
        skillName: "ExpressJS",
        logoUrl: express,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "GraphQL",
        logoUrl: graphql,
        proficiency: SkillProficiency.BEGINNER,
      },
    ],
  },
  {
    skillGroupName: "Databases",
    skills: [
      {
        skillName: "SQL",
        logoUrl: sql,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "MongoDB",
        logoUrl: mongo,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
      {
        skillName: "ElasticSearch",
        logoUrl: elasticsearch,
        proficiency: SkillProficiency.BEGINNER,
      },
    ],
  },
  {
    skillGroupName: "Mobile Frameworks",
    skills: [
      {
        skillName: "React Native",
        logoUrl: react,
        proficiency: SkillProficiency.INTERMEDIATE,
      },
    ],
  },
];
