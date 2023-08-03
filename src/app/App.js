import React from 'react';
import NewCountdown from '../components/new-countdown/new-countdown';
import ExistingCountdowns from '../components/existing-countdowns/existing-countdowns';
import './App.sass';

import { Container } from 'react-bootstrap';

function App() {

  const [finishDate, setFinishDate] = React.useState("");


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
