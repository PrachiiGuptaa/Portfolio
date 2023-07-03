import React from 'react'
import styles from './Home.module.css'
import { Title } from '../../Atoms/Title/Title'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import {Techstacks} from '../../Atoms/Skills/Skills';
import Project from '../Project/Project/Project';

function HomePage() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.name}>
      <h1>Hi, I am <span>Prachi Gupta</span></h1>
      <p><Title/></p>
      </div>
      <div className={styles.intro}>
        <p>"Welcome to my creative corner! I'm a frontend developer passionate about crafting captivating user experiences. Through pixel-perfect websites and interactive web applications, I merge art and technology to bring ideas to life. Explore my portfolio to witness innovative and user-centric projects that tell unique stories of design and functionality."</p>
      </div>

      <div className={styles.icons}>
        <a href='https://github.com/PrachiiGuptaa' target='_blank' rel='noreferrer'><GitHubIcon style={{ color: 'black' }}/></a>
        <a href='mailto:guptaprachi2098@gmail.com' target='_blank' rel='noreferrer'><EmailIcon style={{ color: 'black' }}/></a>
        <a href='tel:+919170133568' target='_blank' rel='noreferrer'><LocalPhoneIcon style={{ color: 'black' }}/></a>
        <a href='https://www.linkedin.com/in/prachi-gupta-9a218226a' target='_blank' rel='noreferrer'><LinkedInIcon style={{ color: 'black' }}/></a>
        <a href='https://drive.google.com/drive/folders/1IzwbshHt3IQqZJT7CkfVH9zgsOb-yRlg?usp=drive_link' target='_blank' rel='noreferrer'><DescriptionIcon style={{ color: 'black' }}/></a>
      </div>
    </div>

    <div id="skills">
       <Techstacks/>
      </div>

      <div id="project">
        <Project/>
      </div>

    </>
  )
}

export default HomePage
