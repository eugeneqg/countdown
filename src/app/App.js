import React from 'react';
import NewCountdown from '../components/new-countdown/new-countdown';
import ExistingCountdowns from '../components/existing-countdowns/existing-countdowns';
import './App.sass';

import { Container } from 'react-bootstrap';

function App() {

  const [data, setData] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const [finishDate, setFinishDate] = React.useState("");

  React.useEffect(() => {

    const handleStorage = () => {

      const keys = Object.keys(localStorage);

      const parsed = keys.map(key => {
        return JSON.parse(localStorage.getItem(key))
      });

      setData(parsed); 
  }

  handleStorage();

  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
    
  }, []);


  return (
    <Container fluid="md" className="App d-flex justify-content-center flex-wrap">
      <div className='inner-container'>
        <div className='text-block text-center'>
          <h1>COUNTDOWN</h1>
          <h2>create your own countdown</h2>
        </div>
        <NewCountdown setFinishDate={setFinishDate}/>
        <div className='text-block text-center'>
          <h2>my countdowns</h2>
        </div>
        <ExistingCountdowns finishDate={finishDate} />
      </div>
    </Container>
  );
}

export default App;
