import React from 'react'
import './skills.css';
 import UIDesign from '../../assets/ui-design.png';
 import WebDesign from '../../assets/website-design.png';
 import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I Do</span>
       <span className='skillDesc'> I am a skilled person having passionate about learning in the field of software develpoment and love to learn a lot of things having a creatve mind, and  also i have a very creative ability of building leadership between the companinon</span>
       <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign}alt='UIDesign'className='skillBarImg'/>
            <div className='skillBarText'>
                <h2> Frontend Developer</h2>
                <p>Designing responsive and user-friendly web apps using HTML, CSS, and JavaScript.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign}alt='WebDesign'className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Competitive Programmer</h2>
                <p>Solved 500+ DSA problems across LeetCode, Codeforces, and CodeChef with consistent practice.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign}alt='AppDesign'className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Active Learner </h2>
                <p>Actively learning DBMS, Operating Systems, and core CS concepts alongside development.</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Skills