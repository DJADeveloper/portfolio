import React from 'react';

const SideNav = ({ href }) => {
  return (
    <a href={href}>
      <i className='bi bi-circle-fill text-light '></i>
    </a>
  );
};

export default SideNav;
