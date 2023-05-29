type Props = {
  title: string;
  link: string;
};
const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <p className="border border-blue-900 rounded-lg py-2 px-6 text-lg tracking-wide bg-transparent hover:border-blue-600 hover:text-white hover:bg-black duration-300 cursor-pointer">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
