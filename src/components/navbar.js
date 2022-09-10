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
                    <div className = "link_resume"><a href = "https://s3.amazonaws.com/handshake.production/documents/documents/029/807/886/original/Resume_shrey_kohli_final.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HSNSGACXF6KKT2H%2F20220910%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220910T041816Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=d6a04c6eca81bb59ab885577ab777c316c3f06fc5e49f5c5d2bf41f730c2c43e" target = "_blank" download>Resume</a></div>
                </div>
        <div className = 'dropdown' >
            <a href="#" onClick= {() => setisOpen(!isOpen)}>
        
        <FiMenu size = '30px' color= 'lightseagreen'/>
        
        </a>
        <div className={isOpen ? "nav-links-drop" : "nav-links-drop2"}>
            <div className="link_abouth"><a href = "#about_a" >About</a></div>
            <div className="link_exph"><a href = "#exper" >Experience</a></div>
            <div className="link_contacth"><a href = "#contacts" >Contact Me</a></div>
            <div className = "link_resume"><a href = "https://s3.amazonaws.com/handshake.production/documents/documents/029/807/886/original/Resume_shrey_kohli_final.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HSNSGACXF6KKT2H%2F20220910%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220910T041816Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=d6a04c6eca81bb59ab885577ab777c316c3f06fc5e49f5c5d2bf41f730c2c43e" target = "_blank" download>Resume</a></div>
        </div>
        </div>

    </div>
    
  )
}
