import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

const App = () => {
  const [isPlay , setIsPlay] = useState(false);
  const [number , setNumber] = useState(0);

  return (
    <main className="root">
      <div className="top" style={{ backgroundImage :'url(./assets/top-border.png)' }}>
        <img className="BlackGradient" src="./assets/BlackGradient 1.png" alt="Can't find file!"></img>
        <img alt="Cant find File!" className="header-logo" src="./assets/logo 1.png"></img>
        <ul>
          <li><a href="#mint">Mint</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#meet">Meet The Turtles</a></li>
        </ul>
        
        <div className="header-button-group row justify-content-end" style={{ "marginRight": "-1%" }}>
          <div className="button button-discord">
            <img alt="Cant find File!" src="./assets/Discord Icon.png"></img>
          </div>
          <div className="button button-twitter">
            <img alt="Cant find File!" src="./assets/Twitter Icon.png"></img>
          </div>
        </div>
      </div>
      <div className="main">
        <img
          alt="Cant find File!"
          className={"body " + isPlay ? "gif-style" : ""}
          src={isPlay ? "assets/gif/main.gif" : "assets/map.png"}
        ></img>
        {!isPlay && <img alt="Cant find File!" onClick={()=>setIsPlay(true)} className="play-button" src="./assets/play.png"></img>}
      </div>
      <div className="story">
        <div className="content">
          <div className="block-first block">
            <img src="./assets/about.png" className="header mb-3" alt="Cant find file!"></img>
            <div>
              <div className="d-flex" >
                <div style={{ width: "60%" }}>
                  <p> Once long ago there was 3333 turtles who lived in harmony in a thriving habitat. These turtles had everything needed to live a long and happy life. Without a worry in sight for these peaceful turtles… disaster struck. </p>
                  <p> A rip in the space time continuum scattered these turtles across the timeline. </p>
                </div>
                <div className="about-image" style={{ width: "40%", position: "relative" }}>
                  <img src="./assets/Pond.png" className="pond" alt="Cant find file!"></img>
                  <img src="./assets/TimeLine_Phase.png" className="TimeLine_Phase" alt="Cant find file!"></img>
                  <img src="./assets/gif/nickturtlevideo-2.gif" className="nickturtlevideo" alt="Cant find file!"></img>
                </div>
              </div>
              <p>Luckily there was one turtle who got sent far into the future and found himself in the metaverse, discovering he could bring back his family with the advanced technology of this time. The meta turtle faces one daunting obstacle, in order to power the teleportation device he must find an abundance of modern fuel called SOL. SOL being a scarce resource of the future, the meta turtle needs your help to reunite with his own kind once again.</p>
              <p>After the bell struck the group of the first generation of turtles, they all disappeared without a trace, for centuries the 3333 turtles were lost. As of now, 500 of the turtles have been located spanning across the timeline, yet the meta turtle is still looking for a solution to bring the rest of them back.</p>
            </div>
          </div>
          <div className="block block-second" id="mint">
            <img src="./assets/timeline.png" className="header mb-3" alt="Cant find file!"></img>
            <p>With recent advancements in technology the meta-turtle was able to locate the remaining 2833 turtles that have been scattered throughout time. </p>
            <p>To bring them back the meta turtle requires (ETH/SOL) to power a time machine that will realign the missing turtles, this machine will be available for a limited time on (Mint Date). </p>
            <p>Each turtle will be unique and hold different attributes.</p>
            <div className="d-flex align-items-center">
              <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
              <p className="mt-2" style={{ width: "90%" }}>5% will be given away to an ocean cleanup charity voted on by the community, to support the true turtles.</p>
            </div>
            <div className="d-flex align-items-center">
              <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
              <p className="mt-2" style={{ width: "90%" }}>5% will be given away to an ocean cleanup charity voted on by the community, to support the true turtles.</p>
            </div>
            <div className="d-flex m-auto justify-content-center" >
              <img src="./assets/mint-background.png" style={{ backgroundImage:"url(./assets/PurpleBackground.png)" , backgroundRepeat:"round" }}  className="mint-background" alt="Cant find file!"></img>
              <div className="button-group-mint">
                <div className="d-flex clac-button" style={{ flexDirection : "row" }}>
                  <img src="./assets/minus-button.png" className="minus-button" alt="Cant find file!" onClick={()=>{number > 0 && setNumber(number-1)}}></img>
                  <div className="number" style={{ backgroundImage : 'url(./assets/number.png)' }}>
                    {number}
                  </div>
                  <img src="./assets/plus-button.png" className="plus-button" alt="Cant find file!" onClick={()=>setNumber(number+1)}></img>
                </div>
                <img src="./assets/mint-button.png" className="mint-button" alt="Cant find file!"></img>
              </div>
              
            </div>
            <br />
            <p>Airdrop phase, 50% of all royalties from secondary market sales will be distributed back to holders weekly through $SHELLZ. The more nfts you hold the higher % you will earn from $SHELLZ. Airdrops containing attributes (accessories, furniture, etc) and companions will be distributed. Airdrop criteria and frequency will be announced soon!</p>
            <br />
            <p>With the SOL/ETH left over from the time machine, the meta turtle is constructing a sanctuary, the TurtleVerse. This is where all turtles can live together in harmony once again. With this construction of the turtle verse, each holder of a turtle will be airdropped a home in which the turtles can personalize, decorate and furnish. Build out your turtle home and compete in daily challenges to earn SHELLZ in order to upgrade your shell! The more NFT’s you own the higher % chance you have in order to earn rare airdrops.</p>

          </div>
          <div className="block-third block" id="roadmap">
            <div className="header">
              <img src="./assets/roadmap.png" alt="Cant fine file!"></img>
            </div>
            <div className="mt-3">
              <h2 style={{ letterSpacing:"1.3vw" , fontSize:"4vw" }}>Q1 2022</h2>
              <div style={{ marginLeft:"5vw" }}>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Discord Release</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Whitelist Mint (500)</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Public Mint (2500)</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Releasing $SHELLZ currency to curate the Time Turtles Ecosystem</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Release Time Turtles Staking</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h2 style={{ letterSpacing:"1.3vw" , fontSize:"4vw" }}>Q2 2022</h2>
              <div style={{ marginLeft:"5vw" }}>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Alpha Release of Time Turtles P2E</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Time Turtle Team Development Expansion</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="./assets/armor.png" style={{ width: "10%" }} alt="Cant find file!"></img>
                  <p className="mt-2" style={{ width: "90%" , fontSize:"2.5vw" }}>Community Fund for P2E Game Adoption</p>
                </div>
              </div>
            </div>
          </div>
          <div className="block-forth block" id="meet" style={{ backgroundImage : "url(./assets/forth-background.png)" }}>
            <div className="header">
              <img src="./assets/meet the turtles.png" alt="Cant fine file!"></img>
            </div>

            <div className="item item-first">

              <div className="item-top-part">
                <div>
                  <img
                    alt="Cant find File!"
                    className="item-title item-title-stoneage"
                    src="./assets/stoneage.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="item-title-end item-title-common"
                    src="./assets/common.png"
                  ></img>
                </div>

                <img
                  alt="Cant find File!"
                  className="item-description"
                  src="./assets/gif/COutfit.gif"
                ></img>
              </div>
              <div className="item-bottom-part">
                <img
                  className="left"
                  alt="Cant find File!"
                  src="./assets/gif/StoneAge_Turtle_Icon.gif"
                ></img>
                <img
                  className="right"
                  alt="Cant find File!"
                  src="./assets/stoneagehome.png"
                ></img>
              </div>
            </div>
            <div className="item item-second">

              <div className="item-top-part">
                <div>
                  <img
                    alt="Cant find File!"
                    className="item-title item-title-egyptian"
                    src="./assets/egyptian.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="item-title-end item-title-uncommon"
                    src="./assets/uncommon.png"
                  ></img>
                </div>

                <img
                  alt="Cant find File!"
                  className="item-description"
                  src="./assets/gif/EOutfit.gif"
                ></img>
              </div>
              <div className="item-bottom-part">
                <img
                  className="left"
                  alt="Cant find File!"
                  src="./assets/gif/Egyptian_Turtle_Icon.gif"
                ></img>
                <img
                  className="right"
                  alt="Cant find File!"
                  src="./assets/egyptianhome.png"
                ></img>
              </div>
            </div>
            <div className="item item-third">

              <div className="item-top-part">
                <div>
                  <img
                    alt="Cant find File!"
                    className="item-title item-title-renaissance"
                    src="./assets/renaissance.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="item-title-end item-title-rare"
                    src="./assets/rare.png"
                  ></img>
                </div>

                <img
                  alt="Cant find File!"
                  className="item-description"
                  src="./assets/gif/ROutfit.gif"
                ></img>
              </div>
              <div className="item-bottom-part">
                <img
                  className="left"
                  alt="Cant find File!"
                  src="./assets/gif/Renaissance_Turtle_Icon.gif"
                ></img>
                <img
                  className="right"
                  alt="Cant find File!"
                  src="./assets/renaissancehome.png"
                ></img>
              </div>
            </div>
            <div className="item item-forth">

              <div className="item-top-part">
                <div>
                  <img
                    alt="Cant find File!"
                    className="item-title item-title-modern"
                    src="./assets/modern.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="item-title-end item-title-epic"
                    src="./assets/epic.png"
                  ></img>
                </div>
                <img
                  alt="Cant find File!"
                  className="item-description"
                  src="./assets/gif/MOutfit.gif"
                ></img>
              </div>
              <div className="item-bottom-part">
                <img
                  className="left"
                  alt="Cant find File!"
                  src="./assets/gif/Modern_Turtle_Icon.gif"
                ></img>
                <img
                  className="right"
                  alt="Cant find File!"
                  src="./assets/modernhome.png"
                ></img>
              </div>
            </div>
            <div className="item item-fifth">

              <div className="item-top-part">
                <div>
                  <img
                    alt="Cant find File!"
                    className="item-title item-title-future"
                    src="./assets/future.png"
                  ></img>
                  <img
                    alt="Cant find File!"
                    className="item-title-end item-title-legenoary"
                    src="./assets/legenoary.png"
                  ></img>
                </div>
                <img
                  alt="Cant find File!"
                  className="item-description"
                  src="./assets/gif/FOutfit.gif"
                ></img>
              </div>
              <div className="item-bottom-part">
                <img
                  className="left"
                  alt="Cant find File!"
                  src="./assets/gif/Future_Turtle_Icon.gif"
                ></img>
                <img
                  className="right"
                  alt="Cant find File!"
                  src="./assets/futuristichome.png"
                ></img>
              </div>
            </div>
            <div className="item item-sixth">

              <div className="item-bottom-part">
                <div className="left">
                  <img alt="Cant find File!"
                    src="./assets/meta.png"></img>
                </div>
                <div className="right">
                  <div>
                    <img
                      alt="Cant find File!"
                      className="item-title item-title-meta"
                      src="./assets/meta-title.png"
                    ></img>
                    <img
                      alt="Cant find File!"
                      className="item-title-end item-title-question3"
                      src="./assets/question3.png"
                    ></img>
                  </div>
                  <img
                    alt="Cant find File!"
                    className="item-description"
                    src="./assets/gif/MEutfit.gif"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-group">
        <img src="./assets/bottom-border.png" alt="Cant find file!"></img>
        <div className="button-group ">
          <div className="button button-discord">
            <img
              alt="Cant find File!"
              src="./assets/Discord Icon.png"
            ></img>
          </div>
          <div className="button button-twitter">
            <img
              alt="Cant find File!"
              src="./assets/Twitter Icon.png"
            ></img>
          </div>
        </div>
        <div className="mark-end"><small>© 2021 Time Turtle</small></div>
      </div>
{/*
      <div className="footer-group">
        

      </div> */}

    </main>
  );
}

export default App;