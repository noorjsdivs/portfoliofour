import Image from "next/image";

type Props = {
  title: string;
  img: string;
  link: string;
};

const ProjectCard = ({ title, img, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border border-blue-800 overflow-hidden relative group">
        <Image
          width={350}
          height={350}
          className="transform object-cover translate-y-0 hover:-translate-y-[65%] transition-transform duration-[3s]"
          src={img}
          alt="amazonClone"
        />
        <p className="absolute bottom-0 left-0 hidden group-hover:inline-block font-semibold bg-blue-700 w-full text-center py-1 duration-200">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
