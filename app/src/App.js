import React from 'react';
import './App.css';
import logo from './utils/logo.png'

const audioLibrary = [
  {id: 'Q', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Clap.wav', description: 'Clap'},
  {id: 'W', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Conga.wav', description: 'Conga'},
  {id: 'E', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Cymbal.wav', description: 'Cymbal'},
  {id: 'A', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/HiHat.wav', description: 'HiHat'},
  {id: 'S', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Kick.wav', description: 'Kick'},
  {id: 'D', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Ride.wav', description: 'Ride'},
  {id: 'Z', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Stick.wav', description: 'Stick'},
  {id: 'X', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Tom.wav', description: 'Tom'},
  {id: 'C', src: 'https://z16th-bucket.s3-us-west-1.amazonaws.com/fcc-drum-machine/Shaker.wav', description: 'Shaker'}
]

export default function App() {
  const [ display, setDisplay ] = React.useState('Drum Machine')
  return (
    <div className='app'>
      <div id='drum-machine'>
        <div id='display'>
          <img id='logo' src={logo} alt="LoLz Logo"/>
          <div id='text'>{display}</div>
        </div>

        <div className='drums'>
          {audioLibrary.map((audio) => {
            const { id, src, description } = audio
            return (
              <Pad key={id} id={id} src={src} description={description} updateDisplay={(value) => setDisplay(value)} />
            )}
          )}
        </div>
      </div>
    </div>
  );
}

function Pad({id, src, description, updateDisplay}){
  const handleClick = () => {
    let audio = document.getElementById(id)
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play()
    updateDisplay(description)
  }
  const handleKeyDown = (event) => {
    event.preventDefault()
    console.log(description)
    if(event.key === id || event.key === id.toLowerCase()){
      handleClick()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  },[])

  return(
    <div className='drum-pad' id={`drum-${id}`} onClick={handleClick} onKeyDown={(event) => handleKeyDown(event)}>
      {id}
      <audio className='clip' id={id} src={src} />
    </div>
  )
}