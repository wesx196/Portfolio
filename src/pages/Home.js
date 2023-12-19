import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Home.css"


function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Wei</h2>
                <div className="prompt">
                    <p>A software engineer with a passion for learning and creating.</p>
                    <Instagram onClick={event =>  window.location.href='https://www.instagram.com/wesx_erie/'} />
                    <Facebook onClick={event =>  window.location.href='https://www.facebook.com/wei.lu.165'}/>
                    <GitHub onClick={event =>  window.location.href='https://github.com/wesx196/'}/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, Angular, HTML, CSS, NPM, BootStrap, MaterialUI</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, MySQL, MongoDB</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Java, Python, JavaScript, TypeScript, Ruby</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home