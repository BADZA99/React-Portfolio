import React, { useEffect, useState } from 'react';
import {ImCog} from 'react-icons/im';
import './style.scss';
import setTheme from '../../helpers/theme';


export default function Theme() {

    const colorsArray =[

    {
        id : 'yellow',
        bgcolor : '#f1c40f'
    },
    {
        id : 'red',
        bgcolor : '#E82A2A'
    },
    {
        id : 'green',
        bgcolor : '#6ac045'
    },
    {
        id : 'blue',
        bgcolor : '#5078ff'
    },
    {
        id : 'orange',
        bgcolor : '#ff8c00'
    },
    {
        id : 'purple',
        bgcolor : '#a64dff'
    },


]

const [theme,setCurrentTheme]=useState('green');
const [toggle,setToggle]=useState(false);

const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    setToggle(false);
}

useEffect(()=>{
    setTheme(theme);

},[theme])

  return (

    <div className={`theme-wrapper ${toggle ? "active" : " "}`}>
        <div className="theme-wrapper__toggle-icon">
            <ImCog   onClick={()=> setToggle(!toggle)} size={40} />
        </div>

        <div className="theme-wrapper__menu">
            <h1>CHOOSE THEME</h1>

            <ul>
                {colorsArray.map((color,key) => (
                    <li   onClick={()=>handleToggleTheme(color.id)}   key={key} style={{background:color.bgcolor}}></li>
                ))}
            </ul>
        </div>
      
    </div>
  )
}
