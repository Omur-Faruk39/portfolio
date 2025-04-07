import React, { useEffect } from "react";
import image from "./../../assets/profile-img.jpg";
import scrollToSkills from "../../helpers/scrollHalper.js";
import Skill from "./Skill.jsx";
import Fact from "./Fact.jsx";
import useScrollHandler from "../../lib/useScrollHandler.js";

const skillObject = {
  html: {
    name: "HTML",
    value: 100,
  },
  css: {
    name: "CSS",
    value: 90,
  },
  javascript: {
    name: "JavaScript",
    value: 80,
  },
  react: {
    name: "React",
    value: 70,
  },
  node: {
    name: "Node JS",
    value: 40,
  },
  express: {
    name: "Express JS",
    value: 20,
  },
  mongodb: {
    name: "MongoDB",
    value: 50,
  },
  tailwind: {
    name: "Tailwind CSS",
    value: 80,
  },
};

function About() {
  const skillsHeading = React.useRef(null);
  const skillsBodyRef = React.useRef(null);
  const [SkillsHeading, setSkillsHeading] = React.useState(false);
  const [SkillsBody, setSkillsBody] = React.useState(false);

  useScrollHandler();

  useEffect(() => {
    let observer = null;

    if (!SkillsHeading) {
      observer = scrollToSkills(skillsHeading, setSkillsHeading);
    }

    return () => {
      if (observer && observer) {
        observer();
      }
    };
  }, [skillsHeading, SkillsHeading, setSkillsHeading]);

  useEffect(() => {
    let observer = null;

    if (!SkillsBody) {
      observer = scrollToSkills(skillsBodyRef, setSkillsBody);
    }

    return () => {
      if (observer && observer) {
        observer();
      }
    };
  }, [skillsHeading, SkillsBody, setSkillsBody]);

  return (
    <div className="mt-[138px]">
      <div className="about-me-section">
        <div className="flex justify-center items-center flex-col mb-12">
          <h1 className="about-heading">About</h1>
          <p className="opacity-70 text-[16px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="flex gap-5 mx-10">
          <div className="min-w-[420px]">
            <img className="w-[500px]" src={image} alt="my image" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              UI/UX Designer & Web Developer.
            </h1>
            <p className="opacity-70 text-[15px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, voluptatibus. Quisquam, voluptatibus. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex my-2 justify-between">
                <ul>
                  <li className="about-me">
                    <strong>Birthday:</strong> 18 April 2006
                  </li>
                  <li className="about-me">
                    <strong>Website:</strong> www.example.com
                  </li>
                  <li className="about-me">
                    <strong>Phone:</strong> +8801774622159
                  </li>
                  <li className="about-me">
                    <strong>City:</strong> Dinajpor, Bangladesh
                  </li>
                </ul>
              </div>
              <div className="flex my-2 justify-between">
                <ul>
                  <li className="about-me">
                    <strong>Age:</strong> 18
                  </li>
                  <li className="about-me">
                    <strong>Degree:</strong> HSC
                  </li>
                  <li className="about-me">
                    <strong>Email:</strong> omurfaruk39bd@gmail.com
                  </li>
                  <li className="about-me">
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p className="opacity-80 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              provident laborum commodi voluptates nisi alias tenetur soluta,
              inventore aliquam. Voluptatibus laborum obcaecati sed! Iure ab, et
              asperiores recusandae, quibusdam architecto, reprehenderit
              dignissimos temporibus sed modi quia? Aspernatur autem impedit
              harum rerum quidem, laudantium, sed explicabo excepturi nostrum
              quod, repellat error accusantium{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[70px]">
        <div
          className="flex justify-center items-center flex-col mt-20 opacity-0"
          ref={skillsHeading}
        >
          <h1 className="about-heading">Skills</h1>
          <p className="opacity-70 text-[16px] text-center mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            voluptatibus.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-10 mx-10 opacity-0"
          ref={skillsBodyRef}
        >
          <div>
            <Skill SkillsBody={SkillsBody} subject={skillObject.html} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.css} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.tailwind} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.javascript} />
          </div>

          <div>
            <Skill SkillsBody={SkillsBody} subject={skillObject.react} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.node} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.express} />
            <Skill SkillsBody={SkillsBody} subject={skillObject.mongodb} />
          </div>
        </div>
      </div>

      <Fact />
    </div>
  );
}

export default About;
