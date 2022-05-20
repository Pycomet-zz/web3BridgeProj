import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  const [rooms, setRooms] = useState(5)
  const [slots, setSlots] = useState(12)

  return (
    <div className="App">
      <Header rooms={rooms} slots={slots} />
    </div>
  );
}

export default App;
