import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Blogs from "./pages/blogs";
import ContactMe from "./pages/contact-me";
import Education from "./pages/education";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";

export const router = createHashRouter([
  {
    path: "/",
    index: true,
    element: <App />,
  },
  ,
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-me",
    element: <ContactMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <Layout>
      <div className="app_div">
        <h1 className="app_name rotate">
          <span>Sidharth</span> Mohanty
        </h1>
        <img src="/sid1.jpeg" alt="Profile pic" />
        <p className="app_p">
          Hi I am Sidharth Mohanty, a 3rd year CSE undergraduate at{" "}
          <span>
            Odisha University of Technology and Research (Formerly CET),
            Bhubaneswar
          </span>
          . I am a full stack developer who likes to turn ideas into life. With
          a keen interest of learning new technologies, I also have a drive to
          solve real world problems. I have contributed to various open source
          projects and have created some myself. I am proficient in JavaScript,
          TypeScript, React.js, React Native, Vue.js, Node.js, Next.js,
          Express.js, Golang, GraphQL, C++, MongoDB, PostgreSQL, and Docker.
        </p>
      </div>
    </Layout>
  );
}

export default App;
