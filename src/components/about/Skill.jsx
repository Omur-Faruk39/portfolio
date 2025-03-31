import React from "react";

function Skill({ subject, SkillsBody }) {
  return (
    <>
      <div className="mb-4">
        <p className="flex justify-between items-center">
          <span className="text-[14px] opacity-80">{subject.name}</span>
          <i className="text-[14px] opacity-80">{subject.value}%</i>
        </p>
        <div className="w-[100%] bg-[#e4e4e4] h-[8px] rounded-[1px] mt-[2px]">
          <div
            style={SkillsBody ? { width: `${subject.value}%` } : {}}
            className="progress-bar"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Skill;
