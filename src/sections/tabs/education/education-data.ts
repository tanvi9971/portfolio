import ctae from "../../../assets/education/ctae.jpeg";
export interface IEducationData {
  from: string;
  to: string;
  collegeName: string;
  logoUrl: string;
  degreeName: string;
  description?: string[];
}

export const experiences: IEducationData[] = [
  {
    from: "2014",
    to: "2018",
    collegeName: "College of Technology and Engineering, Udaipur",
    logoUrl: ctae,
    degreeName: "B.Tech, Computer Engineering",
    description: [
      "Graduated with First Class with Distinction and 7.2 CGPA.",
      "During the course, I interned at LinuxWorld Informatics and Aircel India, to gain an insight about industry environment, work culture and practices.",
      "Was one of the first students in the batch to secure campus placements.",
    ],
  },
];
