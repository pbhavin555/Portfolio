import React from 'react'
import './skills.css'
import UIDesign from '../../../assets/ui-design.png';
import WebDesign from '../../../assets/website-design.png';
import AppDesign from '../../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UI Design" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt="Web Design" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is a demo text2</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AppDesign} alt="App Design" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text3</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills;