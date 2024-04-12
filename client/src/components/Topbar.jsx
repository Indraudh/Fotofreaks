import './topbar.scss'
export default function Topbar({selected}) {
  return (
    <div className="topbar">
    <div className="navbar">
        <div className="left">
              <a href="/"><img src="assets/FotoFreaks_newformat_black.png" alt="" className="logo"/></a>
        </div>
        <div className="right">
              <ul className='menu'>
                 <li className={"kuchbhi " + ((selected==="about") && "active")}><a href="/About">About</a></li>
                 <li className={"kuchbhi " + ((selected==="portfolio") && "active")}><a href="/Ourwork">Portfolio</a></li>
                 <li className={"kuchbhi " + ((selected==="ourmember") && "active")}><a href="/Ourmember">Our Members</a></li>
                 <li className={"kuchbhi " + ((selected==="event") && "active")}><a href="/Event">Event</a></li>
                 <li className={"kuchbhi " + ((selected==="contact") && "active")}><a href="/Contactus">Contact Us</a></li>
              </ul>
        </div>
    </div>
    <hr />
    </div>
  )
}
