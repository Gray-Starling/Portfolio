import React from 'react';
import style from './HeaderWrp.module.scss';
import { GoMarkGithub } from 'react-icons/go';
import { CustomLink } from '../UI/CustomLink/CustomLink';

export const HeaderWrp = () => {
  return (
    <div className={style.headerWrp}>
      <div className={style.headerLogoBlock}>
        <a
          href="https://github.com/Gray-Starling"
          target="_blank"
          rel="noopener noreferrer"
          className={style.gitHubLink}
        >
          <GoMarkGithub className={style.gitHubLogo} />
        </a>
      </div>
      <div className={style.headerNav}>
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/about'}>About me</CustomLink>
        <CustomLink to={'/jne'}>Projects</CustomLink>
        <CustomLink to={'two'}>Big Projects</CustomLink>
      </div>
    </div>
  );
};
