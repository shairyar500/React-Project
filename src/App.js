
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  return (
    <>

      <Navbar title='Word Counter App' aboutText='About Sher web' />
      <div className='container my-5'>
        <TextForm heading='What you feeling today,'/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
