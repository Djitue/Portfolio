import React from 'react'
import './about.css'
import moi from '../../assets/b30ef09c-5dd8-4e5c-8e3d-9ae8f6c043d4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="DJITUE " />
            </div>
        </div> 
            <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small> Not up to a year</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>None</small>
              </article>
             
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>0 Completed</small>
              </article> 
    </div> 
            <p>
             I am a nineteen years old,young level three hundred computer engineer, willing to specialize in software engineering
             in the faculty of engineering and technology(FET). I am a holder of a GCE Advanced level.
             I got my GCE A/L in 2021, then I decided to write the entrance exam into FET.
             I am bilingual(I can express myself in both english and french). I like listening to music, dancing, cooking
             and reading.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About


