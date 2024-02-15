import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './About';
import Contact from './Contact'
import HomeText from './Components/Text'
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25} factor={2}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}factor={2}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
       
        <ParallaxLayer offset={0} speed={-0.2}factor={2}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
          {/* text-content  */}
       <ParallaxLayer offset={0} speed={-0.2}>
          <div class="animation_layer parallax" id="text">
           <HomeText/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}factor={2}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}factor={2}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
     
        <ParallaxLayer offset={0} speed={0.35}factor={2}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}factor={2}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.30}factor={2}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}factor={2}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.35}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
