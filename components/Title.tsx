import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 pb-10">
      <h1 className="text-slate-200 text-2xl font-semibold relative overflow-hidden group">
        {text}
        <span className="w-full h-[2px] bg-blue-500 inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transform duration-500"></span>
      </h1>

      <span className="text-2xl text-blue-500"> {icon}</span>
    </div>
  );
};

export default Title;
