import ProjectCart from "./ProjectCard";
import Title from "./Title";
import { FaProjectDiagram } from "react-icons/fa";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCart
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCart
          img={reactBD.src}
          title="Cyber Security"
          link="https://reactbd.com/"
        />
        <ProjectCart
          img={cyberBlog.src}
          title="Cyber Security"
          link="https://blog.reactbd.com/"
        />
        <ProjectCart
          img={noorShop.src}
          title="Noor Shopping"
          link="https://orebishopping.reactbd.com/"
        />
        <ProjectCart
          img={dynamicPortfolio.src}
          title="Dynamic Portfolio"
          link="https://amazonclone.reactbd.com/"
        />

        <ProjectCart
          img={dashboard.src}
          title="Dashboard"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
