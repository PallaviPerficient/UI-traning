import React, { useState } from 'react';
import './Sidenav.css';
import About from './About';
import Personal from './Personal';
import Skills from './Skills';
import Project from './Project';
import Eduction from './Eduction';
import Achivement from './Achivement';
import Profile from './Profile';


const Sidenav = () => {
  const [personal , SetPersonal] = useState(true);
  const [about , SetAbout] = useState(false);
  const [skills , Setskills] =useState(false);
  const [project , SetProject] = useState(false);
  const [eduction ,SetEduction] = useState(false);
  const [achivement ,SetAchivement] = useState(false);
  const [profilevalue , SetProfilevalue] = useState(false);

  const aboutpage = () =>{
    SetAbout(true);
    Setskills(false);
    SetPersonal(false);
    SetProject(false);
    SetEduction(false);
    SetAchivement(false);
    SetProfilevalue(false);
  }

  const skillpage = () =>{
    Setskills(true);
    SetAbout(false);
    SetPersonal(false);
    SetProject(false);
    SetEduction(false);
    SetAchivement(false);
    SetProfilevalue(false);
  }

  const projectpage = () =>{
    SetProject(true);
    Setskills(false);
    SetAbout(false);
    SetPersonal(false);
    SetEduction(false);
    SetAchivement(false);
    SetProfilevalue(false);
  }
  
  const educationPage = () => {
    SetEduction(true);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    SetPersonal(false);
    SetAchivement(false);
    SetProfilevalue(false);
  }

  const achivementPage = () => {
    SetAchivement(true);
    SetEduction(false);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    SetPersonal(false);
    SetProfilevalue(false);
  }

  const profile = () =>{
    SetProfilevalue(true);
    SetAchivement(false);
    SetEduction(false);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    SetPersonal(false);
  }
  return (
    <>
      <div className='sideNav'>
        <ul>
          <li onClick={aboutpage}>About</li>
          <li onClick={skillpage}>Skills</li>
          <li onClick={projectpage}>Projects</li>
          <li onClick={educationPage}>Education</li>
          <li onClick={achivementPage}>Achievements</li>
          <li onClick={profile}>Personal Profile</li>
        </ul>
      </div>
      <Personal personalValue={personal} />
      <About  aboutValue={about} />
      <Skills skillvalue={skills}/>
      <Project projectvalue={project} />
      <Eduction educationvalue={eduction} />
      <Achivement achivevalue={achivement} />
      <Profile  value={profilevalue} />
    </>
  )
}

export default Sidenav