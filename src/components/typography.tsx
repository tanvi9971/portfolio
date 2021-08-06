import React from "react";

export const HeroText: React.FC<{ cursive?: boolean }> = ({
  cursive,
  children,
}) => {
  return (
    <div
      style={{ textShadow: "1px 1px 1px hotpink" }}
      className={`text-7xl mt-6 text-pink-900 font-bold ${
        cursive && "font-cursive"
      }`}
    >
      {children}
    </div>
  );
};

export const Heading: React.FC<{ bold?: boolean; className?: string }> = ({
  children,
  bold,
  className,
}) => (
  <div
    className={`text-base md:text-lg ${bold && "font-semibold"} ${className}`}
  >
    {children}
  </div>
);

export const Paragraph: React.FC<{ className?: string }> = ({
  className,
  children,
}) => <div className={`text-sm lg:text-base ${className}`}>{children}</div>;
