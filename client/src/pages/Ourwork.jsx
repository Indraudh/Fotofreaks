import Defaultlayout from '../components/Defaultlayout';
import './ourwork.scss';
export default function Ourwork({setselected}) {
  setselected("portfolio");
  const data=require('../components/data.js');
  return (
    <Defaultlayout>
<div class="portfolio_header">
  <h1 className='portfolio_title'>PORTFOLIO</h1>
</div>
<div class="row"> 
  <div class="column">
  {data.list1.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
  <div class="column">
  {data.list2.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>  
  <div class="column">
  {data.list3.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
  <div class="column">
  {data.list4.map((d)=>(
     <div className="imgholder">
          <img src={d} alt="" className='portfolio_img' />
     </div>
  ))}
  </div>
</div>
    </Defaultlayout>
  )
}
