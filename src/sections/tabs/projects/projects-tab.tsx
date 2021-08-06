import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { Modal } from "../../../components/modal";
import { Heading, Paragraph } from "../../../components/typography";
import { IProject, projects } from "./projects-data";

export const ProjectsTab: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(
    null as unknown as IProject
  );

  return (
    <div>
      <Heading bold>Work Projects</Heading>
      <div className="text-sm text-pink-900  mb-4">
        Tap on a project to know more.
      </div>
      <div className="flex flex-wrap">
        {projects.map((p, key) => (
          <div key={key} className="mb-4 w-full sm:w-auto sm:mr-4">
            <ProjectCard
              onClick={() => {
                setSelectedProject(p);
                setModalVisible(true);
              }}
              {...p}
            />
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-400 mb-4">
        All Trademarks/brand names referred to are the property of their
        respective owners. Copyright infringement not intended.
      </div>

      <Heading className="mb-4" bold>
        Personal Projects
      </Heading>
      <div className="bg-gray-300 text-gray-400 rounded-xl flex flex-col justify-center items-center p-4 text-sm text-center">
        <div className="text-3xl">✌️</div>
        Work in progress, <br /> will update soon.
      </div>
      {renderModal(modalVisible, setModalVisible, selectedProject)}
    </div>
  );
};

const ProjectCard: React.FC<IProject & { onClick: () => void }> = ({
  coverPhotoUrl,
  iconUrl,
  projectName,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-xl relative w-full sm:w-56 overflow-hidden bg-gray-300
    transform hover:scale-110 active:scale-100 transition-all cursor-pointer
    click"
    >
      <img
        src={coverPhotoUrl}
        className="h-28 w-full"
        style={{ objectFit: "cover", objectPosition: "0 0" }}
        alt=""
      />
      <div className="relative p-4">
        <img
          src={iconUrl}
          className="h-14 w-14 absolute -top-8 rounded-xl border-2 bg-white border-gray-200"
          alt=""
        />
        <div className="mt-5">
          <Heading bold className="flex items-center">
            {projectName}
          </Heading>
        </div>
      </div>
    </div>
  );
};

const renderModal = (
  modalVisible: boolean,
  setModalVisible: (value: React.SetStateAction<boolean>) => void,
  selectedProject?: IProject
) => {
  if (!selectedProject) {
    return null;
  }

  const {
    iconUrl,
    coverPhotoUrl,
    url,
    myRole,
    technologies,
    description,
    projectName,
  } = selectedProject;

  return (
    <Modal
      title={
        <div className="text-xl md:text-3xl flex items-center font-semibold">
          <img src={iconUrl} className="h-14 w-14 rounded-xl mr-3" alt="" />
          {projectName}
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="text-pink-900 ml-2"
          >
            <GoLinkExternal size="20" />
          </a>
        </div>
      }
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
    >
      <img src={coverPhotoUrl} className="w-full" alt="" />
      <div className="bg-gray-200 p-4 mb-4 rounded-b-xl">
        <Paragraph className="mb-4">{description}</Paragraph>
        <Paragraph className="mb-4">
          <div className="text-pink-900 font-semibold">Tech Stack</div>{" "}
          {technologies}
        </Paragraph>
        <Paragraph className="mb-4">
          <div className="text-pink-900 font-semibold">My Contributions</div>{" "}
          {myRole}
        </Paragraph>
      </div>
    </Modal>
  );
};
