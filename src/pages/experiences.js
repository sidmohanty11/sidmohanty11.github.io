import React from "react";
import Layout from "../components/Layout";
import "../styles/experience.css";

import { Timeline, Event } from "react-timeline-scribble";

let exp = [
  {
    id: 1,
    title: "Open Source Contributor",
    company: '<a href="https://rocket.chat" target="_blank">Rocket.Chat</a>',
    description:
      'Open-source at Rocket.Chat contributing majorly to <a href="https://github.com/RocketChat/RC4Community" target="_blank">RC4Community</a> and <a href="https://github.com/RocketChat/Rocket.Chat" target="_blank">Rocket.Chat</a>. Remained the top contributor for GSoC&apos;22 season in RocketChat Opensource Leaderboard.',
    span: "Nov 2021 - Sept 2022",
    img: "/assets/rc.png",
  },
  {
    id: 2,
    title: "Product Engineer Intern",
    company: '<a href="https://invadehq.io" target="_blank">InvadeHQ</a>',
    description:
      'Worked on building a chrome extension and a microservice for scraping LinkedIn connections for <a href="https://getpropel.app/" target="_blank">getpropel.app</a>. Created the backend and managed the deployment.',
    span: "July 2022 - Sept 2022",
    img: "/assets/invade.jpg",
  },
  {
    id: 3,
    title: "Google Summer of Code",
    company: '<a href="https://rocket.chat" target="_blank">Rocket.Chat</a>',
    description:
      'Worked on an npm package which is an easy-to-embed mini-version of Rocket.Chat - <a href="https://github.com/RocketChat/EmbeddedChat" target="_blank">EmbeddedChat</a> which has reached 13+ stars on GitHub.',
    span: "May 2022 - Sept 2022",
    img: "/assets/gsoc.png",
  },
  {
    id: 4,
    title: "React.js SME",
    company:
      '<a href="https://relevel.com/" target="_blank">Relevel (by Unacademy)</a>',
    description:
      "React.js Subject Matter Expert - Creating and vetting questions on React.js",
    span: "Sept 2022 - Nov 2022",
    img: "/assets/relevel.png",
  },
  {
    id: 5,
    title: "Software Engineer Intern",
    company:
      '<a href="https://dragonfruit.ai" target="_blank">Dragonfruit AI</a>',
    description:
      "Worked on a recursive folder like structure in Flask, sqlalchemy and React.js. Improved region graphics using pixi.js and wrote e2e tests and made them 36% more faster.",
    span: "Sept 2022 - Present",
    img: "/assets/dragonfruit.webp",
  },
].reverse();

const Experiences = () => {
  return (
    <Layout>
      <div className="exp__timeline_container">
        <Timeline>
          {exp.map((e) => (
            <Event
              key={e.id}
              interval={e.span}
              title={e.title}
              subtitle={<div dangerouslySetInnerHTML={{ __html: e.company }} />}
            >
              <div dangerouslySetInnerHTML={{ __html: e.description }} />
            </Event>
          ))}
        </Timeline>
      </div>
    </Layout>
  );
};

export default Experiences;
