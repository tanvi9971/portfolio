import React from "react";
import { Tab, TabProps } from "react-tabs";
import { Heading } from "./typography";

export const CustomTab: React.FC<TabProps> = (props) => {
  return (
    // @ts-ignore
    <Tab
      {...props}
      className="flex items-center cursor-pointer
      justify-center px-5 pt-1
       whitespace-nowrap hover:bg-pink-200 
       transition-all duration-300 h-14"
      selectedClassName="border-b-4 border-pink-900 font-semibold"
    >
      <Heading>{props.children}</Heading>
    </Tab>
  );
};

// @ts-ignore
CustomTab.tabsRole = "Tab";
