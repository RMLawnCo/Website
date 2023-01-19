import { useState } from "react"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DarkLightButton() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <button name="Dark mode / Light mode toggle" className="clearBtn" onClick={() => {
                setDarkMode(!darkMode);
                if (darkMode) {
                    document.documentElement.className = "";

                    const darkLogo = document.getElementById("darkLogo");
                    const lightLogo = document.getElementById("lightLogo");
                    if (darkLogo) {
                        darkLogo.style.display = "none";
                    }
                    if (lightLogo) {
                        lightLogo.style.display = "block";
                    }

                    const darkLogo2 = document.getElementById("darkLogo2");
                    const lightLogo2 = document.getElementById("lightLogo2");
                    if (darkLogo2) {
                        darkLogo2.style.display = "none";
                    }
                    if (lightLogo2) {
                        lightLogo2.style.display = "block";
                    }
                }
                else {
                    const darkLogo = document.getElementById("darkLogo");
                    const lightLogo = document.getElementById("lightLogo");
                    if (darkLogo) {
                        darkLogo.style.display = "block";
                    }
                    if (lightLogo) {
                        lightLogo.style.display = "none";
                    }

                    const darkLogo2 = document.getElementById("darkLogo2");
                    const lightLogo2 = document.getElementById("lightLogo2");
                    if (darkLogo2) {
                        darkLogo2.style.display = "block";
                    }
                    if (lightLogo2) {
                        lightLogo2.style.display = "none";
                    }
                    document.documentElement.className = "lightMode";
                }
            }}>
                {
                    darkMode ?
                        <FontAwesomeIcon icon={faMoon} /> :
                        <FontAwesomeIcon icon={faSun} />
                }
            </button>
        </>
    )
}