import React from 'react';
import styles from './Homepage.module.css';
import Card from './card';
import doomimage from '../../assets/images/doomesdefault.jpg';
import snesghost from '../../assets/images/img1_SGNG.png';
import metalgear from '../../assets/images/metalgearIMG2.jpg';
import imagebasic from '../../assets/images/basicimage.jpg';
import premiumimage from '../../assets/images/premiumimage.jpg';
import Footer from './footer';


const homepage = (props)=>(
      <div className={styles.hompage}>
      <div className={styles.homepage_2}>
        <div className={styles.containers}>
          <h2 className={styles.header}>
          Step back into the classics</h2>
          <div className={styles.container}>
                <div class="row">
                  <div class="col">
                    <h3 className={styles.heading}>Life is too short to play a bad game</h3>
                    <p className={styles.text}>Play from a huge collection of video games from the early 80s to the last generation consoles and in
                    the comfort of your laptop. No need to change consoles</p>

                    <h3 className={styles.heading}>Time to finally beat Contra&trade;!!!</h3>
                    <p className={styles.text}> Avoid having to start over after losing a game with the save before losing point, beat all the difficult games
                    that you couldn't finish before</p>
                    <button className={styles.learnButton}>Learn More &#8594; </button>
                  </div>

                  <div class="col">
                    <div className={styles.image_container}>
                        <img src={doomimage} alt="doom screen" className={styles.image__1}/>
                        <img src={snesghost} alt="snes ghostnghoul" className={styles.image__2}/>
                        <img src={metalgear} alt="metal gear solid" className ={styles.image__3}/>
                    </div>
                  </div>

                </div>
            </div>


          </div>

        </div>

<div className={styles.cards_container}>
    <h2 className={styles.header}>Choose your plan</h2>
        <div class="container">
          <div class="row">
              <div class="col-sm">
                  <div className={styles.card}>
                    <Card image ={imagebasic} title="Basic" price="3.99"/>
                      <ul className={styles.listitem}>

                        <li><p>Play a always evolving collection of games</p></li>
                        <li><p>Play on the go </p></li>
                    </ul>
                    <button type="button" class="btn btn-primary">Basic</button>
                  </div>

              </div>

              <div class="col-sm">
              <div className={styles.card}>
                <Card image ={premiumimage} title="Premium" price="6.99"/>
                <ul className={styles.listitem}>

                  <li><p>Play a always evolving collection of games</p></li>
                  <li><p>Play on the go </p></li>
                  <li><p>Download while you play</p></li>
                  <li><p>Current gen &amp; retro games playable anytime!</p></li>

              </ul>
                <button className={styles.button1}type="button" class="btn btn-primary">Premium</button>
              </div>

             </div>

         </div>


      </div>
    </div>
<Footer/>
</div>



)

export default homepage;
