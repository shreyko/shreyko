
import './conatct-icon.css'

export default function Contact_icon()
{
    return(
        <div>
            <div id='contact'>
                <div id="linkedin"><a href="https://www.linkedin.com/in/shrey-kohli-537a7921b/" ><img src={require('./linkedin.png')} alt = "LINKEDIN" id = "linkimg"></img></a></div>
                <div id = "github"><a href = "https://github.com/shreyko"><img src={require('./github.png')} alt = "GITHUB" id = "gitimg"></img></a></div>
            </div>
        </div>

    )

}