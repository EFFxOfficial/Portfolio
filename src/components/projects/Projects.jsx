import React from 'react'
import {mpage, slist, ppage, blist, pprofile, pmatches} from './index.js'
import { SlArrowDown } from "react-icons/sl";

import './projects.css'
import './scroll.js'

const CardsContainer = ({title, description, banner, directory}) => (
    <>
    <div className="projects__container-cards_container">
        <div className="projects__container-cards_container-img">
            <img src={banner} alt=""/>
        </div>
        <div className="projects__container-cards_container-description">
            <h1>{title}</h1>
            <span>{description}</span>
            <a href={directory} target="_blank">Check Demo</a>
        </div>
    </div>
    </>
)

const Projects = () => {
    return (
    <div className="projects__container section__padding" id="projects">
        <div className="projects__container-banner"></div>
        <a href="#projects" className="project__contaner-arrow">
            <SlArrowDown color="#fff" size={50}/>
        </a>
        <div className="projects__container-projects">
            <CardsContainer 
                title="www.effexo.net" 
                description="EFFEXo was a community I build with intentions of sharing source codes for the counter strike 1.6 community for free. This whole project used MySQL and PHP for backend, HTML, CSS, Javascript (used jQuery and Ajax) and JSON files for the frontend."
                banner={mpage}
                directory="https://www.effexo.net"
            />
            <CardsContainer 
                title="Servers Ban List" 
                description="EFFEX Bans was a system I built for counter-strike servers which gives servers a more dynamic way for banning players from their servers, having more options and easier for adminstrators. The communication between server and website was built through MySQL."
                banner={blist}
                directory="https://www.effexo.net/banidos"
           />
            <CardsContainer 
                title="PUG (Pick-Up Game) mode" 
                description="EFFEXMatch was a PUG (Pick Up Game) system I created for users play on counter-strike 1.6 servers. Is it detail-rich with a lot of statiscs for players and also match history which can be watched LIVE from the website. The data automatically changes every 60 minutes and players could watch it outside of the servers."
                banner={pmatches}
                directory="https://www.effexo.net/partidas"
           />
            <CardsContainer 
                title="Player Profile" 
                description="This system is just an extension I added for Top Players from the PUG system I had. It just shows players a overall statistics for all players that played in the EFFEXMatch servers. I also used Steam API to make users log in the page and customize their profiles with whatver image they choose."
                banner={pprofile}
                directory="https://www.effexo.net/ranking"
            />
            <CardsContainer 
                title="PUG Page" 
                description="This website was made for users be more aware of what the EFFEXMatch was. It contains more informations and explanations for users be able to see the improvements and the features from the system. It was the first most reponsive website I built, no bootstraps or tailwind used, pure-css."
                banner={ppage}
                directory="https://www.effexo.net/ematch"
            />
            <CardsContainer 
                title="Servers List" 
                description="The Server List page was created for display all servers that uses the EFFEXMatch system. It used gametracker.rs API to fetch informations about the servers and display them in the page. The informations contained the ammount of players online, map name and more informations about the players inside the server."
                banner={slist}
                directory="https://www.effexo.net/servidores"
            />
        </div>
    </div>
  )
}

export default Projects