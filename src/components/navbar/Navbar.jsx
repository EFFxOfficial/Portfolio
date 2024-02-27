import React, { useState, useEffect } from 'react';
import { RiSunFill, RiMoonFill, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
    <>
        <a href="#header" id="home">Início</a>
        <a href="#projects">Projetos</a>
        <a href="#interests">Interesses</a>
        <a href="#footer">Contato</a>
    </>
)

const DARK_ITEM = 'darkMode';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const checkUserDarkMode = () => {
            const status = localStorage.getItem(DARK_ITEM);
            setDarkMode(status === "1");
            document.querySelector('body').style.display = "none"

            setTimeout(() => {
                handleDarkMode(status === "1")
                document.querySelector('body').style.display = "initial"
            }, 1000);
        };
        checkUserDarkMode();
    }, []);

    const handleDarkMode = (status) => {
        document.querySelector("body").classList.toggle('dark');
        localStorage.setItem(DARK_ITEM, status ? "1" : "0");
        setDarkMode(status);
    };

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const homeClick = document.getElementById('home')
    if(homeClick){
        homeClick.addEventListener('click', (e) => {
            e.preventDefault()
            backToTop()
        })
    }

    return (
        <div className="navbar__container">
            <div className="navbar__container-logo gradient__text" onClick={() => backToTop()}>
                Ruan G.
            </div>
            <div className="navbar__container_options">
                <Menu />
            </div>
            <div className="navbar__toggle">
                <div className="navbar__container-darkmode">
                    {toggleDarkMode
                        ? <RiSunFill color="var(--font-color)" size={27} onClick={() => handleDarkMode(false)} />
                        : <RiMoonFill color="var(--font-color)" size={27} onClick={() => handleDarkMode(true)} />
                    }
                </div>
                <div className="navbar__container-control">
                    {toggleMenu
                        ? <RiCloseLine color="var(--font-color)" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="var(--font-color)" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>

                {toggleMenu && (
                    <>
                        <div className="navbar__container-options__toggle scale-up-center">
                            <div className="navbar__container_options-links">
                                <Menu />
                            </div>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    );
};

export default Navbar;