import React, { useState } from 'react'
import './guess.css'

const Guess = () => {
    let [button, setButton] = useState(false)
    let [storeValue, setStoreValue] = useState('')
    let [p1value, setp1value] = useState('')
    let [msg, setmsg] = useState('')
    let [winner, setWinner] = useState('Player1')
    let [countHider, setCountHider] = useState(false)
    let [counter, setCounter] = useState(3)
    let [IBH, setIBH]= useState(true) //input button hider(IBH)
    let [restart, setRestart] = useState(false)


    let handleSubmit = ()=>{
        if(!(storeValue) || isNaN(storeValue) || (storeValue>10)){
            setmsg('Invalid. Enter a number between 1-10')
        }else{
            setp1value(storeValue)
            setButton(true)
            setmsg('')
            setStoreValue('')
            setCountHider(true)
        }  
    }
    let handleCheck = ()=>{
        if(!(storeValue) || isNaN(storeValue) || (storeValue>10)){
            setmsg('Invalid. Enter a number between 1-10')
            setStoreValue('')
            
        }
       
        else if(p1value == storeValue){
            setCounter(counter-1)
            setWinner('Congrats! You Win.')
            setCountHider(false)
            setIBH(false)
            setRestart(true)
        }
        else if(counter == 1 && !(p1value == storeValue)){
            
            setWinner('Ops! You lose.')
            setCountHider(false)
            setIBH(false)
            setRestart(true)
            
        }
        
        else{
            setCounter(counter-1)
            setButton(true)
            setStoreValue('')
            setmsg('')
        
        }
    }
    let handleInput = (e)=>{
        setStoreValue(e.target.value)
        
    }

  return (
    <div>
                      <h1>{winner}</h1>
        {
            IBH &&
            <>
        {countHider && <h3> Chance: {counter}</h3>}
        <input onChange={handleInput} placeholder='Enter a number between 1-10' value={storeValue}/>
        {
            button
            ?
                <button onClick={handleCheck}>Check</button>
            :

                <button onClick={handleSubmit}>Submit</button>
        }
        <h5 className='msg'>{msg}</h5>
            </>
        }
    </div>
  )
}

export default Guess