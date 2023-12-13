import { useEffect, useMemo, useRef, useState, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

export default function App() {
  const [a, setA] = useState('');
  const [cb1, setCB1] = useState(0);
  const [cb2, setCB2] = useState(0);
  const [leng, setlen] = useState(6)

  

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let word = '';
  
  function genran(){
    setA('')
    for (let i = 0; i < leng; i++) {

      if(cb1==0&&cb2==0){
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word = word+alphabet[randomIndex];
        setA(prev=>prev+alphabet[randomIndex])
      }

      else if(cb1==1&&cb2==0){

        alphabet += "0123456789"//if numbers checked

        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word = word+alphabet[randomIndex];
        setA(prev=>prev+alphabet[randomIndex])
      }

      else if(cb1==1&&cb2==1){

        alphabet += "0123456789!@#$%^&*?"//if numbers and special character both checked
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word = word+alphabet[randomIndex];
        setA(prev=>prev+alphabet[randomIndex])
      }

      else if(cb1==0&&cb2==1){
        alphabet += "@#$%^&*?"
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        word = word+alphabet[randomIndex];
        setA(prev=>prev+alphabet[randomIndex])
      }
        
      }

  }

  //e
  function ccb1(){
    if(cb1==0){
      setCB1(1)
      console.log("checkbox c")
      setA('')
    }
    else{
      setCB1(0)
      console.log('checknox uc')
      setA('')
    }
  }
  function ccb2(){
    if(cb2==0){
      setCB2(1)
      console.log("checkbox c")
    }
    else{
      setCB2(0)
      console.log('checknox uc')
    }
  }


  // to automatic generate pass on load 
  useEffect(() => {
    genran()
  }, [leng, cb1, cb2]);//to generate password on any click of scroll of range

  return (
    <>
    <div className="section" style={{}}>
      <div className="main1" style={{display : 'flex'}}>
        <input type='text' defaultValue={a} readOnly></input>
        <button onClick={genran}>Generate</button>
      </div><br/>

      <div className="main2" style={{display : 'flex'}}>
      <input type="range" min="6" max="20" value={leng} onChange={(e)=>setlen(e.target.value)} className='range'></input>
      <label>Length :{leng}</label>
      <input type="checkbox" className="checkbox" onClick={ccb1}/>
      <label>Numbers</label>
      <input type="checkbox" className="checkbox" onClick={ccb2}/>
      <label>Special Characters</label><br></br>
      </div>
    </div>
    </>
  );
}
