import './App.css';
import SoManyGreetings from './Components/SoManyGreetings';
import Button from './Components/Button';
import TimeAndDate from './Components/TimeAndDate';

function App() {
  return (
    <div className="App">
      <body>
        <TimeAndDate />
        <Button />
        <SoManyGreetings />
      </body>
    </div>
  );
}

export default App;
