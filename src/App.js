
import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
  },1500)
  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(' Dark Mode has been Enabled', "success");
      }
      else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert(' Light Mode has been Enabled', "success");
    }
    }
  
  return (
    <>

      <Navbar title='Word Counter App' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-5'>
        <TextForm showAlert={showAlert} heading='What you feeling today,' mode={mode} />
        {/* <About /> */}
      </div>
      </>
  );
}

export default App;
