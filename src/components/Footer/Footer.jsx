import React from 'react';
import style from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={style.footer}>
         <p className={style.textFooter}>Oksenyuk Andrey | 2020</p>
         <p className={style.textFooter}>Link to the github repository -  
            <a 
               href="https://github.com/AndreyOksenyuk/social-network-react-js"
               target="_blank" rel="noreferrer noopener"
            > https://github.com/AndreyOksenyuk/social-network-react-js
            </a>
         </p>
      </footer>
   )
}

export default Footer;