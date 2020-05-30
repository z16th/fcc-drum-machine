import React from 'react';
import './App.css';

const audioLibrary = [
  {id: 'Q', src: 'https://drive.google.com/uc?id=1qrlRnCILeRs6g3Fq_wth5GDlnkAZHFT0', description: 'Random Sound Q'},
  {id: 'W', src: 'https://drive.google.com/uc?id=1lx_baWh3-8eAIlmomvLjKOCU3CymYf6r', description: 'Random Sound Q'},
  {id: 'E', src: 'https://drive.google.com/uc?id=1cj0L6P1uuyMq0ibd6poVEhbl0z1PljGa', description: 'Random Sound Q'},
  {id: 'A', src: 'https://drive.google.com/uc?id=1TvAItnGbdPP_2u0UVkZ2hgIvWVFx4Oov', description: 'Random Sound Q'},
  {id: 'S', src: 'https://drive.google.com/uc?id=13EgFr2GxTmdTXtXw61pMrT7ggYIKEu7A', description: 'Random Sound Q'},
  {id: 'D', src: 'https://drive.google.com/uc?id=1HyFxnIdMHDji5Wk0GZgiCpZNb3cpujZ-', description: 'Random Sound Q'},
  {id: 'Z', src: 'https://drive.google.com/uc?id=134GG_8HCUuykBkp2rl6YPdqwSBxEDKRL', description: 'Random Sound Q'},
  {id: 'X', src: 'https://drive.google.com/uc?id=1JnO8rEYgmAJjruY0spCDj3qBBED3-T8M', description: 'Random Sound Q'},
  {id: 'C', src: 'https://drive.google.com/uc?id=1d-Qx7nOaQgijsT5eg_rZYc1d6JTMVF9o', description: 'Random Sound Q'}
]

export default function App() {
  const [ display, setDisplay ] = React.useState('Drum Machine')
  return (
    <div className='app'>
      <div id='drum-machine'>
        <div id='display'>
          {display}
        </div>
        {audioLibrary.map((audio) => 
          <Pad key={audio.id} id={audio.id} src={audio.src} updateDisplay={(content) => setDisplay(content)} />
        )}
      </div>
    </div>
  );
}

function Pad({id, src, updateDisplay}){
  const handleClick = () => {
    let audio = document.getElementById(id)
    audio.play()
  }
  const handleKeyDown = (event) => {
    event.preventDefault()
    if(event.key === id || event.key === id.toLowerCase()){
      handleClick()
      updateDisplay('Playing'+id)
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [])

  return(
    <button className='drum-pad' id={`drum-${id}`} onClick={handleClick} onKeyDown={(event) => handleKeyDown(event)}>
      {id}
      <audio className='clip' id={id} src={src} />
    </button>
  )
}