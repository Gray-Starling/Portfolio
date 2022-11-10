import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import style from './CustomLink.module.scss';
import cn from 'classnames';

export const CustomLink = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <Link className={cn(style.event, match ? style.active : style.disable)} to={to}>
      {children}
    </Link>
  );
};
