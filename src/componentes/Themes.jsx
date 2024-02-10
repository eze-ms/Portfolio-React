import { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemesItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs'; 
import Home from '../pages/home/Home';
import './Themes.css';

const getStorageColor = () => {
    let color = 'hsl(271, 76%, 53%)';
    if (localStorage.getItem('color')){
    color = localStorage.getItem('color');
    }
    return color;
}

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
    }
    return theme;
}

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());
    const [gif, setGif] = useState('');

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);
    

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);   

    useEffect(() => {
        const selectedTheme = themes.find(theme => theme.color === color);
        setGif(selectedTheme?.gif || '');
    }, [color]);

    return (
        <div content-show-theme="true">
            <div className={`style__switcher ${showSwitcher ? 'show-switcher' : ''}`}>

                <div 
                    className="style__switcher-toogler" 
                    onClick={() => setShowSwitcher(!showSwitcher)}><FaCog />
                </div>

                <div 
                    className="theme__toggler" 
                    onClick={toggleTheme}>{theme === 'light-theme' ? <BsMoon /> : <BsSun/>}
                </div>
                
                <h3 className="style__switcher-title">Cambiar estilo</h3>

                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return <ThemeItem key={index} {...theme} changeColor={changeColor} gif={gif} />;
                    })}
                </div>
                
                <div 
                    className="style__switcher-close" 
                    onClick={() => setShowSwitcher(!showSwitcher)}> &times;
                </div>

            </div>

            <Home gif={gif} /> {/* Pasa la URL del GIF como una prop al componente Home */}

        </div>
    );
}
export default Themes;