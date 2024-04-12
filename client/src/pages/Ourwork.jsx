import Defaultlayout from '../components/Defaultlayout';
import {list1, list2 , list3 , list4 } from '../components/data';
import './ourwork.scss';
export default function Ourwork({setselected}) {
  setselected("portfolio");
  return (
    <Defaultlayout>
<div class="portfolio_header">
  <h1 className='portfolio_title'>PORTFOLIO</h1>
</div>
<div className="portfolio_row"> 
  <div className="portfolio_column">
  {list1.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
  <div className="portfolio_column">
  {list2.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>  
  <div className="portfolio_column">
  {list3.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
  <div className="portfolio_column">
  {list4.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
</div>
    </Defaultlayout>
  )
}
