
import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      }
      else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
    }
  
  return (
    <>

      <Navbar title='Word Counter App' mode={mode} toggleMode={toggleMode}/>
      <div className='container my-5'>
        <TextForm heading='What you feeling today,' mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
