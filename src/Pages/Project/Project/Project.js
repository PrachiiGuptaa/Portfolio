import React from "react";
import styles from "./Project.module.css";
import { useNavigate } from 'react-router-dom'
import { FaReact} from "react-icons/fa";
import {
  SiHtml5,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Twitter from "../../../Assets/Images/Twitter.png";
import GoogleDoc from "../../../Assets/Images/GoogleDoc.png";
import KanbanBoard from "../../../Assets/Images/KanbanBoard.png" 

export default function Project() {
  const navigate = useNavigate()

  const handleSeeMore = () => {
    navigate('/moreprojects')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h1 className={styles.title}>
          Projects
        </h1>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectImgcontainer}>
              <div>
                <img
                  src={Twitter}
                  alt="Twitter"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Twitter Clone</h2>
              <p>
              The Twitter clone project is a web application replicating Twitter's functionalities, including user registration and login, tweet posting, following users, and engaging through likes, retweets, and comments.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://twitter-clone-one-inky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Twitter-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutline}>
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectImgcontainer}>
              <div>
                <img
                  src={GoogleDoc}
                  alt="Google Docs"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Google Docs Clone</h2>
              <p>
              The Google Docs clone project is a fully functional web application that replicates the features of Google Docs, including editing the title and the document, and the ability to download the document as well as all the formatting options are functional.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://google-docs-dusky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Google-Docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutline}>
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectImgcontainer}>
              <div>
                <img
                  src={KanbanBoard}
                  alt="Kanban Board"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Kanban Board</h2>
              <p>
              Kanban board visually manage work, allowing teams to identify bottlenecks and improve processes. Columns represent workflow stages, and cards track work items as they move through the process. It provides a clear view of task progress and helps optimize productivity.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://kanban-board-eight-pi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Kanban-Board"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutline}>
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.btn}>
      <button onClick={handleSeeMore}>Personal Projects</button>
      </span>
    </div>
  );
};
