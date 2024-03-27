import Defaultlayout from '../components/Defaultlayout';
import { useEffect } from 'react';
import './home.scss';
import './slider.css';

export default function Home() {

  useEffect(() => { 
    const slides= document.querySelectorAll('.pic');
    const btnRight = document.querySelector('.btn-right');
    const btnLeft = document.querySelector('.btn-left');
    
    let curSlide = 0;
    const maxSlide = slides.length;
    
    const goToSlide = function (slide) {
      slides.forEach(function (s, i) {
        const translateXNum = 80 * (i - slide);
        let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
        if (translateXNum === 0){
          translateYNum = 0; 
          rotateDeg = 0;
          grayscaleNum = 0;
          zIndexNum = 1;
          opacityNum = 100;
        } else if (translateXNum < 0) {
          translateYNum = 5;
          rotateDeg = -5;
          grayscaleNum = 1;
          zIndexNum = 0;
          opacityNum = 20;
          } else {
          translateYNum = 5;
          rotateDeg = 5;
          grayscaleNum = 1;
          zIndexNum = 0;
          opacityNum = 20;
          }      
    s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
    s.style.filter = `grayscale(${grayscaleNum})`;
    s.style.zIndex = zIndexNum;
    s.style.opacity = `${opacityNum}%`
      });
    };
    goToSlide(0);
    
    const nextSlide = function(){
      if(curSlide === maxSlide-1) {
        curSlide=0;
      } else {
        curSlide++;
      }
     goToSlide(curSlide);
    }
    
    const prevSlide = function (){
     if (curSlide === 0){
       curSlide = maxSlide-1
     } else {
     curSlide--;
     }
     goToSlide(curSlide);
    }
    
    
    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
  }, []);

  return (
    <Defaultlayout>
    <div className="mainbox">
      <div className="mainleft">
        <div className="ll">
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        </div>
        <div className="lr">
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        <div className="frame"><img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" /></div>
        </div>
      </div>

      <div className="mainright">
        <div className="logo1"><img src="assets/WaterMark_Black.png" alt="" className="logo1p"/></div>
        <div className="logo2"><img src="assets/FotoFreaks_newformat_Black.png" alt="" className="logo2p"/></div>
        <div className="slogan">EXPLORE  |  CREATE  |   INSPIRE</div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis incidunt quisquam animi sunt? Eius ea exercitationem sed ipsa eos cumque corporis totam deleniti alias? Suscipit itaque iste maiores porro nobis! Dolorem obcaecati tempore molestias, eveniet facere saepe voluptatibus necessitatibus dolorum quos ullam labore non ex perferendis mollitia fugit maiores! Voluptates.
        </div>
        <div className="exploretab">
          <div className="Hheading">Themes</div>
          <div>
             <div className="container">
                <div className="pic-container">
                <div className="square1"></div>
                <div className="square2"></div>
                  <div className="pic pic-1">
                    <img className="pic__img" src="https://images.unsplash.com/photo-1681066471074-d45c49154f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" />
                  </div>
                  <div className="pic pic-2">
                    <img className="pic__img" src="https://images.unsplash.com/photo-1680631757284-617846a5ef29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxNTU&ixlib=rb-4.0.3&q=80&w=400" alt="" />
                  </div>
                  <div className="pic pic-3">
                    <img className="pic__img" src="https://plus.unsplash.com/premium_photo-1669951581968-73b5b71face3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcyNjE&ixlib=rb-4.0.3&q=80&w=400" alt="" />
                  </div>
                  <div className="pic pic-4">
                    <img className="pic__img" src="https://plus.unsplash.com/premium_photo-1676734032797-21789f57978a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcxOTQ&ixlib=rb-4.0.3&q=80&w=400" alt="" />
                  </div>
                  <div className="pic pic-5">
                    <img className="pic__img" src="https://images.unsplash.com/photo-1678789604985-18d290d56fe0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTcyNjE&ixlib=rb-4.0.3&q=85&w=400" alt="" />
                  </div>
                  </div>
                  <div className="slider-btns">
                    <button className="btn-left">&lt;</button>
                    <button className="btn-right">&gt;</button>
                  </div>
             </div>
          </div>
          <div className="btn"><button>Explore</button></div>
        </div>
      </div>
    </div>
    </Defaultlayout>
  )
}
