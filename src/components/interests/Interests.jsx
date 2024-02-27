import React from 'react'
import './interests.css'
import './scroll.js'

const InfoContainer = ({count, interest, theme}) => (
    <>
    <div className="interests__container-interests_container" id="interests">
        <div className="interests__container-interest" style={{background: theme}}>
            <div className="interests__container-interest_count" style={{color: theme}}>{count}</div>
            <div className="interests__container-interest_description">{interest}</div>
        </div>
    </div>
    </>
)
const Interests = () => {
  return (
    <div className="interests__container section__padding">
        <InfoContainer 
            count="1" 
            interest="Looking forward to work with a company and gain more knowledge as a team member. Been studying for some time and wanting an opportunity do show my skills ever since."
            theme="rgb(110 110 110)"
        />
        <InfoContainer 
            count="2" 
            interest="Learn more languages and became a better developer. Currently trying to manage all front-end skill to be a complete front-end developer."
            theme="rgb(50 50 50)"
        />
        <InfoContainer 
            count="3" 
            interest="I won't stop until I reach a point where I can do anything as developer. HTML, CSS, JavaScript and React being learned. Future Next.js and Three.js in queue."
            theme="rgb(18 34 50)"
        />
        <InfoContainer 
            count="4" 
            interest="Be a full stack both front-end and back-end. Focusing first on front-end and as soon as I get a full-stack, start learning backend. Currently PHP and MySQL only."
            theme="rgb(52,24,52)"
        />
    </div>
  )
}

export default Interests