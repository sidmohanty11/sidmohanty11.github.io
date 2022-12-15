import React from "react";
import EducationCard from "../components/EducationCard";
import Layout from "../components/Layout";

import "../styles/education.css";

const ed = [
  {
    id: 1,
    title: "B.Tech Computer Science and Engineering",
    marks: "CGPA: 9.8 (till 4th sem)",
    college: "Odisha University of Technology and Research, Bhubaneswar",
    span: "2020-2024",
    src: "/outr.webp",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    marks: "Percentage: 95.4%",
    college: "DAV Public School, CDA, Sec-6, Cuttack",
    span: "2018-2020",
    src: "/dav.jpeg",
  },
  {
    id: 3,
    title: "High School",
    marks: "Percentage: 91.2%",
    college: "DAV Public School, CDA, Sec-6, Cuttack",
    span: "2018",
    src: "/dav.jpeg",
  },
];

const Education = () => {
  return (
    <Layout>
      <div style={{
        width: '100%'
      }}>
        {ed.map((e) => (
          <EducationCard
            key={e.id}
            title={e.title}
            marks={e.marks}
            college={e.college}
            span={e.span}
            src={e.src}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Education;
