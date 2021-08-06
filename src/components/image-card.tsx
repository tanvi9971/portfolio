import { Paragraph } from "./typography";

interface CardProps {
  imageSrc?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  children,
  className,
}) => {
  return (
    <div
      className={`relative w-full
      bg-gray-300
      flex flex-col  justify-start flex-shrink-0 
      rounded-xl overflow-hidden ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          style={{ objectFit: "cover" }}
          className="w-full h-36 sm:h-52 flex-grow-0"
          alt=""
        />
      )}
      <div className="flex-shrink-0 w-full p-3  flex-1 bg-gray-100">
        <Paragraph>{children}</Paragraph>
      </div>
    </div>
  );
};
