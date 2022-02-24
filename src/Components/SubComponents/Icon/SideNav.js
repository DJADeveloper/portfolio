import React from 'react';
import SideIcon from './SideIcon';
import '../../../App.css';

const SideNav = () => {
  return (
    <div>
      <ul className='list-unstyled ps-3 sideNav '>
        <li className='mb-2'>
          <SideIcon href='#Home' />
        </li>
        <li className='mb-2'>
          <SideIcon href='#Portfolio' />
        </li>
        <li className='mb-2'>
          <SideIcon href='#TechStack' />
        </li>
        <li className='mb-2'>
          <SideIcon href='#About' />
        </li>
        <li className='mb-2'>
          <SideIcon href='#Contact' />
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
