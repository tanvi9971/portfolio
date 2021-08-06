import React from "react";
import { TabPanel, TabPanelProps } from "react-tabs";

export const CustomTabPanel: React.FC<TabPanelProps> = (props) => {
  return (
    // @ts-ignore
    <TabPanel {...props}>
      <div className="p-6 px-3 md:px-6 rounded-b-xl">{props.children}</div>
    </TabPanel>
  );
};

// @ts-ignore
CustomTabPanel.tabsRole = "TabPanel";
