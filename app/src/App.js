import React from 'react';
import './App.css';

const audioLibrary = [
  {id: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Random Sound Q'},
  {id: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', description: 'Random Sound W'},
  {id: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', description: 'Random Sound E'},
  {id: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', description: 'Random Sound A'},
  {id: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', description: 'Random Sound S'},
  {id: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', description: 'Random Sound D'},
  {id: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: 'Random Sound Z'},
  {id: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', description: 'Random Sound X'},
  {id: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3  ', description: 'Random Sound C'}
]

export default function App() {
  const [ display, setDisplay ] = React.useState('Drum Machine')
  return (
    <div className='app'>
      <div id='drum-machine'>
        <div id='display'>
          {display}
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
    <button className='drum-pad' id={`drum-${id}`} onClick={handleClick} onKeyDown={(event) => handleKeyDown(event)}>
      {id}
      <audio className='clip' id={id} src={src} />
    </button>
  )
}