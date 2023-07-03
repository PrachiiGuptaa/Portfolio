import React from "react";
import styles from "./SeeMoreProjects.module.css";
import { FaReact} from "react-icons/fa";
import {
  SiHtml5,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import NoteVault from "../../../Assets/Images/NoteVault.png";
import OnlineExaminationWebsite from "../../../Assets/Images/OnlineExaminationWebsite.png"
import GardentoTable from "../../../Assets/Images/GardentoTable.png";
import Quiz from "../../../Assets/Images/Quiz.png" 

export default function SeeMoreProjects() {
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h1 className={styles.title}>
          Personal Projects
        </h1>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectImgcontainer}>
              <div>
                <img
                  src={NoteVault}
                  alt="NoteVault"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Note Vault</h2>
              <p>
              A feature-rich notes website offering a seamless experience to create, organize, and access your notes effortlessly. Stay productive and never miss important information with this user-friendly and versatile platform.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://notes-website-theta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Notes-Website"
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
                  src={OnlineExaminationWebsite}
                  alt="Online Examination Website"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Online Examination Website</h2>
              <p>
              This website allows the admin and student to first login with their respective ID's and password. Admin can upload a question as well as he can edit and delete the question. He is also able to upload image as well, as a question. The Student get the uploaded question for the test and after completing the test a score card is displayed with the score of each question.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://online-examination-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Online-Examination-Website"
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
                  src={GardentoTable}
                  alt="Garden to Table"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Garden to Table</h2>
              <p>
              Mobile-responsive website featuring a variety of vegetables using HTML and CSS.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://chipper-monstera-89b2c1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Garden-To-Table"
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
                  src={Quiz}
                  alt="Quiz Application"
                />
              </div>
            </div>
            <div className={styles.projectInformation}>
              <h2>Quiz Application</h2>
              <p>
              This Quiz Application has 3 gameplay option and a player can choose any one option and go with that option to play. Each topic has 10 MCQ's and after completing the quiz the score card will also displayed.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://quiz-application-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className={styles.btnOutlineOonbt}>
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/PrachiiGuptaa/Quiz-Application"
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
    </div>
  );
};
