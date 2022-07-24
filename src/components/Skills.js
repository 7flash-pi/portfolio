import React from 'react';
import { DiJavascript, DiAngularSimple , DiReact, DiHtml5, DiMysql, DiJava } from 'react-icons/di'
import { SiCss3 , SiMaterialui} from 'react-icons/si';

const Skills = () => {
  return (
    <div className='skills-container'>
       <div className="skill">
          <span> <DiJavascript className='icons' /> JavaScript</span>
          <span> <DiAngularSimple className='icons' /> Angular</span>
          <span> <DiReact className='icons' /> React</span>
          <span> <DiHtml5 className='icons' /> Html</span>
          <span> <SiCss3 className='icons' /> Css</span>
          <span> <DiMysql className='icons' /> MySql </span>
          <span> <DiJava className='icons' /> java </span>
          <span> <SiMaterialui className='icons' /> MaterialUi</span>
          

       </div>
    </div>
  )
}

export default Skills
