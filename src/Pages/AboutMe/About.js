import React from 'react'
import styles from './About.module.css';
import Prachi from '../../Assets/Images/Prachi.jpg'
import Timeline from '../../Atoms/Education/Education';

function About() {
  return (
    <div className={styles.wrapper}>
      <h2>About Me</h2>
      <div className={styles.container}>
      <div className={styles.img}>
        <img src={Prachi} alt='Prachi Gupta'/>
      </div>
      <div className={styles.intro}>
      <p>Hi, I am <span className={styles.name}>Prachi Gupta</span>, a passionate and dedicated fresher looking to kickstart my career as a Frontend Developer. With a solid understanding of HTML, CSS, JavaScript, and React JS. I strive to create visually appealing and user-friendly websites. I am eager to learn and stay updated with the latest frontend technologies. I am a collaborative team player with excellent problem-solving skills. I am excited to contribute my skills and grow in a dynamic work environment.</p>
      </div>
      </div>
      <Timeline/>
      </div>
  )
}

export default About
