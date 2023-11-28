
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextFrame from './Components/TextFrame';
// import About from './Components/About';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode1, setmode1] = useState('light');

  const toggleMode = () => {
    if (mode1 === 'light') {
      setmode1("dark")
      document.body.style.backgroundColor = '#004480';
      addedstyle();
      showalert('Dark mode enabled', 'success')
      document.title = 'Text Work-Dark Mode';

      // setInterval(()=>
      // {
      //   document.title='Text Work so elegent';
      // },2000);
      // setInterval(()=>
      // {
      //   document.title='Text Work so beautyful';
      // },1500);

    }
    else {
      setmode1("light")
      document.body.style.backgroundColor = 'White';
      addedstyle();
      showalert('Light mode enabled', 'success')
      document.title = 'Text Work-Light Mode';
    }

  }
  const [mode2, setmode2] = useState('light');
  const [btnclr, setbtnclr] = useState('primary');

  const togglered = () => {
    if (mode2 === 'light') {
      setmode2('red')
      document.body.style.backgroundColor = '#521116';
      addedstyle();
      showalert('Red mode enabled', 'success');
      setbtnclr('danger');
    }
    else {
      setmode2("light")
      document.body.style.backgroundColor = 'white';
      addedstyle();
      showalert('Light mode enabled', 'success');
      setbtnclr('pr');
    }

  }
  const [style1, newstyle] = useState(
    {
      Color: 'black',
      backgroundColor: 'white'
    }

  );

  const addedstyle = () => {
    if (mode1 === 'light') {
      newstyle(
        {
          color: 'white',
          backgroundColor: '#2d3654'
        }
      )
    }
    else {
      newstyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
    }


  }

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setalert(null);
    }, 3000);



  }

  return (
    <>
      <Navbar title="Text Work" mode={mode1} toggleMode={toggleMode} togglered={togglered} />

      <Alert alert={alert} />
      <div className="container">
        <TextFrame showAlert={showalert} heading1="Enter your text your" addedstyle={style1} btnclr={btnclr} />
      </div>
      {/* <Router>
        <Navbar title="Text Work" mode={mode1} toggleMode={toggleMode} togglered={togglered} />
        <Alert alert={alert} />
        <Switch>
        
          <Route exact path="/about">
          <div className="container">
            <About/>
            </div>
          </Route>
          <Route exact path="/">
          <div className="container">
            <TextFrame showAlert={showalert} heading1="Enter your text your" addedstyle={style1} btnclr={btnclr} />
            </div>
          </Route>
          
        </Switch>
      </Router> */}
    </>


  );
}

export default App;
