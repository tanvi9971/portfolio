import { Padding } from "../app";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
  onClose: () => void;
  title: JSX.Element;
  visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  onClose,
  children,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 z-40 bg-white bg-opacity-95 h-full w-full overflow-auto cursor-pointer"
      onClick={onClose}
    >
      <Padding>
        <div onClick={(e) => e.stopPropagation()} className="cursor-default">
          <div className="mt-4 flex justify-between items-center bg-gray-200 rounded-t-xl p-4">
            {title}
            <RiCloseLine
              size="40"
              className="text-gray-500 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="">{children}</div>
        </div>
      </Padding>
    </div>
  );
};
