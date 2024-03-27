import './defualtlayout.scss';

export default function Defaultlayout(props) {
  return (
     <div className="layout">
        <div className="navbar">
            <div className="left">
                  <a href="/">
                     <div className="navlogo"><img src="assets/FotoFreaks_newformat_black.png" alt="" className="logo"/></div>
                  </a>
            </div>
            <div className="right">
                  <ul className='menu'>
                     <li><a href="/About">About</a></li>
                     <li><a href="/Ourwork">Our Work</a></li>
                     <li><a href="/Ourmember">Our Members</a></li>
                     <li><a href="/Event">Event</a></li>
                     <li><a href="/Contactus">Contact Us</a></li>
                  </ul>
            </div>
        </div>
        <hr />
        <div className="content">
            {props.children }
        </div>
     </div>
  )
}
