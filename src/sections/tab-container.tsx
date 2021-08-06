import React from "react";
import { TabList, Tabs } from "react-tabs";
import { Panel } from "../components/panel";
import { CustomTab } from "../components/tab";
import { CustomTabPanel } from "../components/tab-panel";
import { AboutTab } from "./tabs/about";
import { EducationTab } from "./tabs/education/education-tab";
import { ExperienceTab } from "./tabs/experience/experience-tab";
import { ProjectsTab } from "./tabs/projects/projects-tab";
import { SkillsTab } from "./tabs/skills/skills-tab";

export const TabContainer: React.FC = () => (
  <Panel>
    <Tabs className="relative z-10 mb-10">
      {renderScrollForMore()}
      <TabList className="sticky top-0 w-full border-none flex overflow-auto rounded-t-xl bg-gray-300 z-20">
        <CustomTab>💼 Experience</CustomTab>
        <CustomTab>🎓 Education</CustomTab>
        <CustomTab>🎨 Skills</CustomTab>
        <CustomTab>✨ Projects</CustomTab>
        <CustomTab>👩 Trivia</CustomTab>
      </TabList>

      <CustomTabPanel>
        <ExperienceTab />
      </CustomTabPanel>
      <CustomTabPanel>
        <EducationTab />
      </CustomTabPanel>
      <CustomTabPanel>
        <SkillsTab />
      </CustomTabPanel>
      <CustomTabPanel>
        <ProjectsTab />
      </CustomTabPanel>
      <CustomTabPanel>
        <AboutTab />
      </CustomTabPanel>
    </Tabs>
  </Panel>
);

export const renderScrollForMore = () => (
  <div className="absolute right-0 -top-6 z-20 text-xs text-pink-900 font-semibold sm:hidden">
    swipe &gt;
  </div>
);
