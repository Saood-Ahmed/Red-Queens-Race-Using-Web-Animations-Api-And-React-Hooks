import React from 'react';
import './App.css';
import cloud from './img/cloud.png';
import useWebAnimations from '@wellyshen/use-web-animations';

function Clouds() {

  const{ ref, getAnimation } = useWebAnimations({
    keyframes:[
    { transform: 'translateX(-200px)' },
    { transform: 'translateX(200px)' }
  ], 
  timing: {
    duration:8000,
    iterations: Infinity
  }
})

const speedUp = () => {
  const animation = getAnimation();
  animation.updatePlaybackRate(animation.playbackRate < 3 ? animation.playbackRate * 1.25 : animation.playbackRate)
}

  return (
    <div>
      <div ref={ ref }  className='clouds' onClick={ speedUp }>
        <img  src={cloud} alt="cloud"/>
        <img  src={cloud} alt="cloud"/>
      </div>
    </div>
  );
}

export default Clouds;
