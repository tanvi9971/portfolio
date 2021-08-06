import linuxWorld from "../../../assets/experience/linux-world.jpg";
import cc from "../../../assets/experience/cc.png";
import vamstar from "../../../assets/experience/vamstar.png";
export interface IExperienceData {
  from: string;
  to: string;
  companyName: string;
  logoUrl: string;
  position: string;
  description: string[];
  url?: string;
}

export const experiences: IExperienceData[] = [
  {
    companyName: "Vamstar",
    from: "Jul 2019",
    to: "Sep 2020",
    position: "Associate Software Engineer",
    logoUrl: vamstar,
    url: "https://vamstar.io",
    description: [
      "Built a pharma domain-specific search engine and AI powered marketplace that matches supply and demand.",
      "Worked on building complex data-intensive UIs, as well as dabbled with the backend infrastructure where all the magic happened.",
      "Joined here as a result of merger/acqui-hiring of the company with my earlier organization.",
    ],
  },
  {
    companyName: "CauseCode",
    from: "June 2018",
    to: "Jul 2019",
    position: "Associate Software Engineer",
    logoUrl: cc,
    description: [
      "Joined as a graduate hire, and was tasked to work on consumer health-care, fitness tracking, and tele-medecine applications using a slew of technologies, for inhouse products as well as startup clients.",
      "Got exposed to a lot of new technologies and paradigms and learnt to achieve the final goal using a combination of all of them.",
      "I learnt to work in a fast-paced environment with rapid release cycles, and focus on product quality and developer efficiency.",
    ],
  },
  {
    companyName: "LinuxWorld Informatics",
    from: "June 2017",
    to: "August 2017",
    position: "RedHat Linux Developer Intern",
    logoUrl: linuxWorld,
    description: [
      "Created a miniature cloud service that mimics the functionalities provided by a public cloud service.",
      "Block and object storage, OS, containers, shell, and utility software were provided as a service along with a web interface.",
      "Technologies used: RHEL 7.3, Ansible, Docker, WinSCP, VNC-Manager, Oracle VM, QEMU-KVM Hypervisor.",
    ],
  },
];
