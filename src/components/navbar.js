import React,{useState} from 'react'
import './navbar.css'
import {FiMenu} from 'react-icons/fi'

export default function Navbar() {
    const [isOpen , setisOpen] = useState(false);
  return (
    <div className="top_index">
                <div className="name">
                    <div className="name_text">SHREY KOHLI</div>
                </div>
                <div className="nav-links">
                    <div className="link_about"><a href = "#about_a" >About</a></div>
                    <div className="link_exp"><a href = "#exper" >Experience</a></div>
                    <div className="link_contact"><a href = "#contacts" >Contact Me</a></div>
                    <div className = "link_resume"><a href = "https://www.linkedin.com/feed/update/urn:li:activity:6974574027247898624/" target = "_blank" download>Resume</a></div>
                </div>
        <div className = 'dropdown' >
            <a href="#" onClick= {() => setisOpen(!isOpen)}>
        
        <FiMenu size = '30px' color= 'lightseagreen'/>
        
        </a>
        <div className={isOpen ? "nav-links-drop" : "nav-links-drop2"}>
            <div className="link_abouth"><a href = "#about_a" >About</a></div>
            <div className="link_exph"><a href = "#exper" >Experience</a></div>
            <div className="link_contacth"><a href = "#contacts" >Contact Me</a></div>
            <div className = "link_resume"><a href = "https://www.linkedin.com/feed/update/urn:li:activity:6974574027247898624/" target = "_blank" download>Resume</a></div>
        </div>
        </div>

    </div>
    
  )
}
