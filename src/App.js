import './App.css';
import SideNav from './Components/SubComponents/Icon/SideIcon';

import About from './Sections/About';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Projects from './Sections/Projects';
import TechAbout from './Sections/TechAbout';
import SideIcon from './Components/SubComponents/Icon/SideIcon';

function App() {
  return (
    <div className='App bg-dark ' id='Home'>
      <div className='section'>
        <Header />
      </div>
      <div>
        <ul className='list-unstyled ps-3 sideNav '>
          <li className='mb-2 text-success'>
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

      {/* <PageDivider /> */}
      <div className='box-shadow section 100vh pb-5 ' id='Portfolio'>
        <Projects />
      </div>
      <div className='box-shadow section' id='TechStack'>
        <TechAbout />
      </div>
      <div className='box-shadow section' id='About'>
        <About />
      </div>
      <div className='box-shadow section' id='Contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
