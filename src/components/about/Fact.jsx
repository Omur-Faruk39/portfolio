import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import scrollToSkills from "../../helpers/scrollHalper";

function Fact() {
  const factsHeading = React.useRef(null);
  const factsBodyRef = React.useRef(null);
  const [FactsHeading, setFactsHeading] = React.useState(false);
  const [FactsBody, setFactsBody] = React.useState(false);

  useEffect(() => {
    let observer = null;

    if (!FactsHeading) {
      observer = scrollToSkills(factsHeading, setFactsHeading);
    }

    return () => {
      if (observer && observer) {
        observer();
      }
    };
  }, [factsHeading, FactsHeading, setFactsHeading]);

  useEffect(() => {
    let observer = null;

    if (!FactsBody) {
      observer = scrollToSkills(factsBodyRef, setFactsBody, PureCounter);
    }

    return () => {
      if (observer && observer) {
        observer();
      }
    };
  }, [factsBodyRef, FactsBody, setFactsBody]);

  return (
    <div className="mb-[138px]">
      <div
        className="flex flex-col items-center justify-center"
        ref={factsHeading}
      >
        <h1 className="about-heading">Facts</h1>
        <p className="opacity-70 text-[16px] text-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </p>
      </div>

      <div
        ref={factsBodyRef}
        className="flex items-center justify-center gap-10"
      >
        <div className="flex flex-col justify-center items-center relative">
          <span
            className="purecounter h-12 w-40 text-5xl font-bold text-center mb-6"
            data-purecounter-start="0"
            data-purecounter-end="521"
            data-purecounter-duration="1"
          ></span>
          <span className="opacity-70 text-[18px] facts-bar">Clients</span>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          <span
            className="purecounter h-12 w-40 text-5xl font-bold text-center mb-6"
            data-purecounter-start="0"
            data-purecounter-end="232"
            data-purecounter-duration="1"
          ></span>
          <span className="opacity-70 text-[18px] facts-bar">Projects</span>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          <span
            className="purecounter h-12 w-40 text-5xl font-bold text-center mb-6"
            data-purecounter-start="0"
            data-purecounter-end="1453"
            data-purecounter-duration="1"
          ></span>
          <span className="opacity-70 text-[18px] facts-bar">
            Hours Of Support
          </span>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          <span
            className="purecounter h-12 w-40 text-5xl font-bold text-center mb-6"
            data-purecounter-start="0"
            data-purecounter-end="32"
            data-purecounter-duration="1"
          ></span>
          <span className="opacity-70 text-[18px] facts-bar">Workers</span>
        </div>
      </div>
    </div>
  );
}

export default Fact;
