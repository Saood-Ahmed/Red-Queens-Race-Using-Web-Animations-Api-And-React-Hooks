import React from 'react';
import './App.css';
import alice from './img/alice.gif';
import useWebAnimations from '@wellyshen/use-web-animations';

//importing other gifs
import Clouds from './Clouds';
//importing Bottles
import b_1 from './img/bottles/1.png';
import b_2 from './img/bottles/2.png';
import b_3 from './img/bottles/3.png';
import b_4 from './img/bottles/4.png';
  
function App() {

  var bottle = b_1;
  var count = 0;


  const{ ref, getAnimation } = useWebAnimations({
    keyframes:[
    { transform: 'translateX(0px)' },
    { transform: 'translateX(800px)' }
  ], 
  timing: {
    duration:5000,
    iterations: Infinity
  }
})

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate < 2 ? animation.playbackRate * 1.25 : animation.playbackRate);
    
  }

  const slowDown = (e) => {
    const animation = getAnimation();
    if(count === 0) {
      e.target.src = b_2;
      count ++;  
      animation.updatePlaybackRate(animation.playbackRate * 0.5);
      document.getElementById('alice').style.width = '20%';
      document.getElementById('alice').style.marginTop = '22%';
    }
    else if(count === 1) {
      e.target.src = b_3;
      count++;  
      animation.updatePlaybackRate(animation.playbackRate * 0.35);
      document.getElementById('alice').style.width = '15%';
      document.getElementById('alice').style.marginTop = '25%';
    }
    else if(count === 2) {
      e.target.src = b_4;
      count++;
      animation.updatePlaybackRate(animation.playbackRate * 0.25);
      document.getElementById('alice').style.width = '12.5%';
      document.getElementById('alice').style.marginTop = '28%';
    }
    else{
      e.target.src = bottle;
      count = 0;
      animation.updatePlaybackRate(animation.playbackRate += 1);
      document.getElementById('alice').style.width = '25%';
      document.getElementById('alice').style.marginTop = '17%';
    }
  }

  return (
    <div className="App">
       <div className='bottle'>
        <img src={bottle} alt='bottle 1' onClick={ slowDown }/>
        </div>
      <Clouds />
      <div  ref={ ref } className='alice'>
        <img  src={alice} alt="alice" onClick= { speedUp } id="alice"/> 
      </div>
     
    </div>
  );
}

export default App;
