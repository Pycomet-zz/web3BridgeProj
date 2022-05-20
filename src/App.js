import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const JoinCard = styled.div`
  border-radius: 20px;
  padding: 1em;
  border: 1px solid white;
  display: block
`

const RoomCard = styled.div`
  font-weight: 500;
  font-size: 1em;
  text-align: left;
  width: 50vw;
`

function App() {
  const [rooms, setRooms] = useState({
    room1: [],
    room2: [],
    room3: [],
    conferenceRoom: []
  })

  const [slots, setSlots] = useState(12)

  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [discipline, setDiscipline] = useState("")

  const handleSubmit = () => {

    if (name === "" || gender === "" || discipline === "") {
      toast("Please fill in the form provided to get a room allocated to you.")
    } else if (slots === 0) {
      toast("Sorry! no more slots available for entry.")
    } else {
      if (rooms['room1'].length < 4) {
        // append to room1
        toast("You have been assigned to Bedroom 1")
        setRooms({
          room1: [...rooms['room1'], `${name} ${discipline} ${gender.toUpperCase()}`],
          room2: [...rooms['room2']],
          room3: [...rooms['room3']],
          conferenceRoom: [...rooms['conferenceRoom']]
        })

        setSlots(slots-1)        

      } else {
        if (rooms['room2'].length < 4) {
          setRooms({
            room1: [...rooms['room1']],
            room2: [...rooms['room2'], `${name} ${discipline} ${gender.toUpperCase()}`],
            room3: [...rooms['room3']],
            conferenceRoom: [...rooms['conferenceRoom']]
          })
          setSlots(slots-1)
          toast("You have been assigned to Bedroom 2")
        } else {

          if (rooms['room3'].length < 4) {
            setRooms({
              room1: [...rooms['room1']],
              room2: [...rooms['room2']],
              room3: [...rooms['room3'], `${name} ${discipline} ${gender.toUpperCase()}`],
              conferenceRoom: [...rooms['conferenceRoom']]
            })
            setSlots(slots-1)
            toast("You have been assigned to Bedroom 3")
          } else {

            if (rooms['conferenceRoom'].length < 5) {
              setRooms({
                room1: [...rooms['room1']],
                room2: [...rooms['room2']],
                room3: [...rooms['room3']],
                conferenceRoom: [...rooms['conferenceRoom'], `${name} ${discipline} ${gender.toUpperCase()}`]
              })
              setSlots(slots-1)
              toast("You have been assigned to Conference Room")
            } else {

              toast("No Available Space Found For You")
            }

          }

        }
      }

      setName("")
      setDiscipline("")
      setGender("")
    }

  }

  return (
    <div className="App">
      <Header rooms={rooms} slots={slots} />

      <ToastContainer />
      <JoinCard>
        <p>Enter your details to get a room;</p>
        <p>
          Name:
          <input type={'text'} value={name} onChange={e => setName(e.target.value)} placeholder='Your Name' />
        </p>
        <p>
          Gender:
          <input type={'text'} value={gender} onChange={e => setGender(e.target.value[0])} placeholder='M (male) / F (female)' />
        </p>
        <p>
          Discipline:
          <input type={'text'} value={discipline} onChange={e => setDiscipline(e.target.value)} placeholder='Developer/Facilitator' />
        </p>
        <button type="submit" onClick={handleSubmit}>Get Room</button>
      </JoinCard>

      <div>
        {Object.keys(rooms).map((val, index) => (
          <RoomCard key={index}>
            <h3>{val}:</h3>
            {rooms[val].map((k, index) => (
              <p key={index}>{index+1}: {k}</p>
            ))}
          </RoomCard>
        ))}
      </div>

    </div>
  );
}

export default App;
