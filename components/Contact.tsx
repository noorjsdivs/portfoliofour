import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h3 className="text-3xl font-bold">Let's create awesome products!</h3>
          <p className="text-lg font-medium text-center">
            I am always open to discussing your project, improving your online
            presence, or helping with Your website design and converting
            challenges.
          </p>
          <a
            className="w-52 h-16 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-950 text-xl flex items-center justify-center text-white font-semibold rounded-lg hover:from-blue-900 hover:to-blue-600 duration-300"
            href="mailto:noor.jsdivs@gmail.com"
          >
            <button>Contact Me</button>
          </a>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8 mt-10">
          <SocialLink title="Github" link="https://github.com/noorjsdivs" />
          <SocialLink
            title="Youtube"
            link="https://www.youtube.com/@reactjsBD"
          />
          <SocialLink
            title="Linkedin"
            link="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          />
          <SocialLink
            title="Facebook"
            link="https://www.facebook.com/Noorlalu143/"
          />
          <SocialLink title="Nextjs" link="https://vercel.com/noorjsdivs" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
