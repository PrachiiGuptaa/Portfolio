import React from 'react'
import styles from './Footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
    <div className={styles.wrapper}>
      <h2>GET IN TOUCH</h2>
      <div className={styles.icons}>
        <a href='https://github.com/PrachiiGuptaa' target='_blank' rel='noreferrer'><GitHubIcon style={{ color: 'white' }}/></a>

        <a href='mailto:guptaprachi2098@gmail.com' target='_blank' rel='noreferrer'><EmailIcon style={{ color: 'white' }}/></a>

        <a href='https://www.linkedin.com/in/prachi-gupta-9a218226a' target='_blank' rel='noreferrer'><LinkedInIcon style={{ color: 'white' }}/></a>
        
        <a href='https://twitter.com/ThePrachiGupta_' target='_blank' rel='noreferrer'><TwitterIcon style={{ color: 'white' }}/></a>
      </div>
      <p>&copy; All Rights reserved to PrachiiGuptaa </p>
    </div>
    
    </>
  )
}

export default Footer
