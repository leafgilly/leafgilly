import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react';
import {connect} from 'react-redux';
import Sound from 'react-sound';

import music from '../audio/SweetDreams.mp3'

const Sally = (props) => {

    const audio = document.getElementById('audio_tag');
    const [play, setPlay] = useState(false);

    const [counter, setCounter] = React.useState(0);

    const palette = ['yellow', 'red', 'purple', 'pink'];

    const [eurythmics, setEurythmics] = React.useState('');

    React.useEffect(() => {
        if (play) {
            console.log('play is true');
        }
        if (props.SallyCorruption>=4 && play) {
                const timer =
            setInterval(() => setCounter(counter + 1), 948);
            if (counter === 4) {
                setCounter(0);
            }
            return () => clearInterval(timer);
        }
    }, [counter, props.SallyCorruption, play]);

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptSally',
            value: amt,
        });
    }

    return (
    <>
    <p style={{display: audio ? 'none' : 'block'}}>AUDIO ISNT LOADED</p>
    <p>{props.SallyCorruption}</p>
    <p>{counter}</p>
    <p>Play: {play.toString()}</p>
    <div style={{backgroundColor: play ? palette[counter] : 'black'}}>
    <div class='document' style={{backgroundColor: 'black !important'}}>
     <audio id="audio_tag" src={music} loop />
    <h1 style={{textAlign: 'center', display: props.SallyCorruption===0 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Sally</span> Joanna Reed</h1>
    <h1 style={{textAlign: 'center', display: props.SallyCorruption===1 ? 'block' : 'none'}}><b class="enabled-link-b">One beat,</b> <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Joanna</span> Reed</h1>
    <h1 style={{textAlign: 'center', display: props.SallyCorruption===2 ? 'block' : 'none'}}><b class="enabled-link-b">One beat, two beats,</b> <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Reed</span></h1>
    <h1 style={{textAlign: 'center', display: props.SallyCorruption>=3 ? 'block' : 'none'}}><b class="enabled-link-b">One beat, two beats, three beats,</b></h1>
    
    <h2 style={{textAlign: 'center', display: props.SallyCorruption<3 ? 'block' : 'none'}}>Threat Level: D</h2>
    <h2 style={{textAlign: 'center', display: props.SallyCorruption>=3 && !play && audio ? 'block' : 'none'}}>Threat Level: <span onClick={()=>{
        if (props.SallyCorruption===3) {
            corrupt(1);
        }
        play ? setPlay(false) : setPlay(true);
        play ? audio.pause() : audio.play();
        audio.volume = 0.2;
    }} class='interactive enabled-link-s no-select-text'>D</span></h2>
    <div style={{display: props.SallyCorruption>=4 && !play && !audio ? 'inline' : 'none'}}>
        <h2 style={{textAlign: 'center'}}>Threat Level: <span onClick={() => {
            corrupt(0.5);
            corrupt(-0.5);
            console.log("Why did you leave?");
            }} class='interactive enabled-link-s no-select-text'>Bring the Beat Back!
        </span></h2>
    </div>
    <div style={{display: props.SallyCorruption>=2 && play ? 'inline' : 'none'}}>
        <h2 style={{textAlign: 'center'}}>Threat Level: <span onClick={() => {
            play ? setPlay(false) : setPlay(true);
            play ? audio.pause() : audio.play();
            audio.volume = 0.2;
            }} class='enabled-link-b'><i>Disco</i>
        </span></h2>
    </div>

    <h2 style={{display: props.SallyCorruption<4 ? 'block' : 'none'}}>Previous Names and Aliases</h2>
    <h2 style={{display: props.SallyCorruption===4 && play && counter===0 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Previous</span> Names and Aliases</h2>
    <h2 style={{display: props.SallyCorruption===4 && play && counter===1 ? 'block' : 'none'}}>Previous <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Names</span> and Aliases</h2>
    <h2 style={{display: props.SallyCorruption===4 && play && counter===2 ? 'block' : 'none'}}>Previous Names <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>and</span> Aliases</h2>
    <h2 style={{display: props.SallyCorruption===4 && play && counter===3 ? 'block' : 'none'}}>Previous Names and <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Aliases</span></h2>
    <ul style={{display: props.SallyCorruption<5 ? 'block' : 'none'}}>
        <li>n/a</li>
    </ul>

    <div style={{display: props.SallyCorruption>=5 ? 'block' : 'none'}}>
        <h2>Previous Names and Aliases</h2>
        <ul>
            <li><b class='enabled-link-b'>For a brief stint in college, she had a fake id with the name 'Elaine Baker'.</b></li>
        </ul>
    </div>

    <h2 style={{display: props.SallyCorruption<5 ? 'block' : 'none'}}>Stand and Supernatural Abilities</h2>
    <h2 style={{display: props.SallyCorruption===5 && play && counter===0 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Stand</span> and Supernatural Abilities</h2>
    <h2 style={{display: props.SallyCorruption===5 && play && counter===1 ? 'block' : 'none'}}>Stand <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>and</span> Supernatural Abilities</h2>
    <h2 style={{display: props.SallyCorruption===5 && play && counter===2 ? 'block' : 'none'}}>Stand and <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Supernatural</span> Abilities</h2>
    <h2 style={{display: props.SallyCorruption===5 && play && counter===3 ? 'block' : 'none'}}>Stand and Supernatural <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-s no-select-text'>Abilities</span></h2>

<div style={{display: props.SallyCorruption>=6 && props.SallyCorruption<7 ? 'block' : 'none'}}>
        <h2 style={{display: !play ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's ??? Stand</b></h2>
    </div>

    <div style={{display: props.SallyCorruption>=6 && props.SallyCorruption<7 ? 'block' : 'none'}}>
        <h2 style={{display: play && counter===0 ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'red'}}>Greatest</span> Stand</b></h2>
        <h2 style={{display: play && counter===1 ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'purple'}}>Funkiest</span> Stand</b></h2>
        <h2 style={{display: play && counter===2 ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'pink'}}>Smartest</span> Stand</b></h2>
        <h2 style={{display: play && counter===3 ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'yellow'}}>Coolest</span> Stand</b></h2>
    </div>

    <div style={{display: props.SallyCorruption>=7 ? 'block' : 'none'}}>
        <h2 style={{display: eurythmics==='Greatest' ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'red'}}>{eurythmics}</span> Stand</b></h2>
        <h2 style={{display: eurythmics==='Funkiest' ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'purple'}}>Funkiest</span> Stand</b></h2>
        <h2 style={{display: eurythmics==='Smartest' ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'pink'}}>Smartest</span> Stand</b></h2>
        <h2 style={{display: eurythmics==='Coolest' ? 'inline' : 'none'}}><b class='enabled-link-b'>The World's <span style={{color: 'yellow'}}>Coolest</span> Stand</b></h2>
    </div>

    <h2 style={{display: props.SallyCorruption<6 ? 'block' : 'none'}}>Eurythmics</h2>
    <h2 style={{display: props.SallyCorruption===6 && play && counter===0 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(1);
        setEurythmics('Greatest');
    }} class='interactive enabled-link-s no-select-text'>Eurythmics</span></h2>
    <h2 style={{display: props.SallyCorruption===6 && play && counter!=0 ? 'block' : 'none'}}>Eurythmics</h2>

    <p style={{display: props.SallyCorruption<6 ? 'block' : 'none'}}>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>

    <p style={{display: props.SallyCorruption===6 && !play ? 'block' : 'none'}}>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>

    <p style={{display: props.SallyCorruption===6 && play && counter===0 ? 'block' : 'none'}}>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>
    <p style={{display: props.SallyCorruption===6 && play && counter===1 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(1);
        setEurythmics('Funkiest');
    }} class='interactive enabled-link-s no-select-text'>Eurythmics</span> is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>
    <p style={{display: props.SallyCorruption===6 && play && counter===2 ? 'block' : 'none'}}>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song <span onClick={()=>{
        corrupt(1);
        setEurythmics('Smartest');
    }} class='interactive enabled-link-s no-select-text'>Eurythmics</span> plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>
    <p style={{display: props.SallyCorruption===6 && play && counter===3 ? 'block' : 'none'}}>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, <span onClick={()=>{
        corrupt(1);
        setEurythmics('Coolest');
    }} class='interactive enabled-link-s no-select-text'>Eurythmics</span> can 
        take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>

    <p style={{display: props.SallyCorruption>=7 ? 'block' : 'none'}}>[NEW CONTENT HERE]Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>

    <ul>
        <li>Note: The single target nature of this Stand is absolute except in unique instances of hivemind crowds.</li>
    </ul>
    <p>Eurythmics has a strong personality, manifesting in unique mannerisms and preferences for varying its visual appearance. This Stand 
        has been observed having the ability to change its physical manifestation at will (i.e. Michael Jackson’s Thriller jumpsuit, 
        two feather boas instead of one).</p>
    <h2>Known Relationships</h2>
    <ul>
        <li>Norman Reed: father. Amicable but distant relationship. He is a man of few words, she struggled to broach that.
        </li>
        <li>Lydia Reed: mother. Strained relationship. Wishes she cared more about Sally’s academics than grandchildren.
        </li>
        <li>{props.AmandaName}: Coworker, close friend. Relied on her as an authority figure after learning about Stands; 
            often had her stay overnight for peace of mind soon after Sally’s assault with the arrow.
        </li>
        <li>{props.MorganName}: Coworker, close friend. Occasionally intimidated by her wealth. Deeply values her carefree, positive nature.
        </li>
        <li>{props.RitaName}: Coworker, close friend. Always go out for coffee and lunch hours together during slow days. Loves teasing her, 
            but appreciates her for being her most normal friend at work.
        </li>
    </ul>
    <h2>Psychological Profile</h2>
    <p>Reed is highly intelligent and perceptive with great aptitude for leadership, although she struggles with being unable to perfectly 
        control people. The latter quality has developed into a form of survivor’s guilt: she hates watching people get injured to save 
        her. While she is outwardly suave, she has a penchant for trickery and carefree fun. This is more clearly seen in Eurythmics, 
        who often encourages or instigates harmless pranks.</p>
    <h2>Author's Notes</h2>
    <p>Reed is unerringly logical, even in interpersonal relationships, which is something I’ve valued deeply throughout our time working 
        together. While I was resentful of her during our initial meeting—Amanda returned with her and not the Stand arrow—I quickly grew 
        to value her academic background and leader’s demeanor. She is my most reliable employee, my mind, my protégé.</p>

    <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p>
    </div>
    </div>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaName: state.RitaName,
        SallyCorruption: state.SallyCorruption,
    };
  })(Sally);
  
  