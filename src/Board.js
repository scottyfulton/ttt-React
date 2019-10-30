import React from 'react';
import './App.css'

export default function Board (props){
    return(
        <div className='Board'>
            <div id = '1' className='Sector'>{props.children}</div>
            <div id = '2' className='Sector'>{props.children}</div>
            <div id = '3' className='Sector'>{props.children}</div>
            <div id = '4' className='Sector'>{props.children}</div>
            <div id = '5' className='Sector'>{props.children}</div>
            <div id = '6' className='Sector'>{props.children}</div>
            <div id = '7' className='Sector'>{props.children}</div>
            <div id = '8' className='Sector'>{props.children}</div>
            <div id = '9' className='Sector'>{props.children}</div>
        </div>

    )
}