import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import "../styles/projects.css";

let projects = [
  {
    id: 1,
    name: "jsnotion",
    link: "https://github.com/sidmohanty11/jsnotion",
    src: "/assets/jsnotion.jpg",
    description:
      "A code documenting application that can 10x your productivity while learning to code.",
    technologies: [
      "React.js",
      "Commander.js",
      "Express",
      "Esbuild",
      "Monaco Editor",
    ],
  },
  {
    id: 2,
    name: "forum",
    link: "https://github.com/sidmohanty11/forum",
    src: "/assets/forum.jpg",
    description:
      "A college hangout hub where you can discuss, ask questions and write blogs.",
    technologies: [
      "React.js",
      "GraphQL",
      "Apollo",
      "Prisma",
      "PostgreSQL",
      "Nginx",
      "Docker",
    ],
  },
  {
    id: 3,
    name: "next-ecom",
    link: "https://github.com/sidmohanty11/next-ecom",
    src: "/assets/nextecom.jpg",
    description:
      "An e-commerce application developed in Next.js with Shopify API integration",
    technologies: ["Next.js", "TypeScript", "ShopifyAPI", "TailwindCSS"],
  },
  {
    id: 4,
    name: "yt-playlist-downloader",
    link: "https://github.com/sidmohanty11/yt-playlist-downloader",
    description: "Youtube playlist downloader cli (concurrent approach).",
    technologies: ["Golang", "Cobra"],
  },
  {
    id: 5,
    name: "Convo",
    link: "https://github.com/sidmohanty11/convo",
    description: "A chat app having whatsapp like architecture.",
    technologies: ["Vue", "Golang", "MongoDB"],
  },
  {
    id: 6,
    name: "mingo",
    link: "https://github.com/sidmohanty11/mingo",
    description:
      "A minimal yet powerful HTTP client implemented in go (inspired by axios).",
    technologies: ["Golang"],
  },
];

const Projects = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
