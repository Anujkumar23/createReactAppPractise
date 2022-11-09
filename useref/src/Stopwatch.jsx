import React,{useState,useRef} from 'react'



function Stopwatch() {
    const startTime=useRef(null)
    const intervalRef=useRef(null);
  
    const [now, setNow] = useState(null)
    const [laps, setLaps] = useState([])
  
    let secondElapsed=0;
    
    function startStopwatch(){
      startTime.current=Date.now();
     intervalRef.current =setInterval(() => {
        setNow(Date.now())
      }, 10);
    }

    function stopStopwatch(){
      clearInterval(intervalRef.current)
    
    }

     function trackLap(){
      setLaps([...laps,secondElapsed])
    
     }
     function resetStopwatch(){
      setNow(0);
      stopStopwatch()
      startTime.current=0;
      laps.length=0
     }


    secondElapsed=(now-startTime.current)/1000;

    return (
      <div className='container'>
        <section>
          <h1>Stopwatch</h1>
        </section>
       <section >
        <h1>{secondElapsed.toFixed(3)}</h1>
        <button  className="btn btn-g" onClick={startStopwatch}>Start</button>
        <button  className= "btn btn-r" onClick={stopStopwatch}>Stop</button>
        <button  className= "btn btn-y" onClick={trackLap}>Lap</button>
        <button  className="btn btn-o" onClick={resetStopwatch}>Reset</button> 
      </section>
     { laps?.length?(<article> 
      <h1>Laps</h1>
        {laps.map((lap)=><p key={lap}>{lap}</p>)}
      </article>):null}
      </div>
     
    )
  }

export default Stopwatch