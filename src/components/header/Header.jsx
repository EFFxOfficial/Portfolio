import {React, useEffect} from 'react'
import {FaHtml5, FaCss3Alt, FaJsSquare} from 'react-icons/fa'
import {DiReact, DiMysql, DiPhp, DiGithubBadge} from "react-icons/di";
import {SlArrowRight} from "react-icons/sl";

import Typed from 'typed.js';

import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  useEffect(() => {
    const typingEffect = new Typed(".header__container-name", {
      strings : ["Ruan Guilherme", "Developer", "Programador", "Estudante"],
      loop : true,
      typeSpeed : 100,
      backSpeed: 80,
      backDelay : 1400
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div className="header__container section__padding">
      <div className="header__container-left">
        <div className="header__container-left_container-presentation anim-from-top">
          <h1>Olá, sou <b className="header__container-name">Ruan Guilherme</b></h1>
          <p>Atualmente moro na Zona Sul de São Paulo - Brasil</p>
        </div>
        <div className="header__container-left_container-resume anim-from-left">
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, temporibus officiis? Esse quibusdam accusantium et non exercitationem sunt explicabo dolorum ipsa soluta aliquam animi impedit reprehenderit iure, eius, error quo?
          </span>
        </div>
        <div className="header__container-icons anim-from-left">
          <div className="header__container-icon_container">
            <FaHtml5 size={40}/>
            <span className="header__container-icon_value">2 Years</span>
          </div>
          <div className="header__container-icon_container">
            <FaCss3Alt size={40}/>
            <span className="header__container-icon_value">2 Years</span>
          </div>
          <div className="header__container-icon_container">
            <FaJsSquare size={40}/>
            <span className="header__container-icon_value">3 Months</span>
          </div>
          <div className="header__container-icon_container">
            <DiPhp size={40}/>
            <span className="header__container-icon_value">4 months</span>
          </div>
          <div className="header__container-icon_container">
            <DiMysql size={40}/>
            <span className="header__container-icon_value">6 months</span>
          </div>
          <div className="header__container-icon_container">
            <DiReact size={40}/>
            <span className="header__container-icon_value">1 week</span>
          </div>
          <div className="header__container-icon_container">
            <DiGithubBadge size={40}/>
            <span className="header__container-icon_value">1 week</span>
          </div>
        </div>
        <a href="#projects" className="header__container-start anim-from-right">
          Get Started
          <SlArrowRight size={13}/>
        </a>
      </div>
      <div className="header__container-right">
        <img src={logo} alt="" className="scale-up-center"/>
      </div>
    </div>
  )
}

export default Header