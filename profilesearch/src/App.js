
import InputSection from './components/InputSection';
import ProfileSection from './components/ProfileSection';
import './index.css';
import { peopleProfile } from './components/ProfileSection';
import { useState } from 'react';


function App() {
  const [user, setUserDetail] = useState(peopleProfile);


  const [item, setItem] = useState(peopleProfile);
  console.log(peopleProfile)

  return (
    <>
    <div className='wrapper'>
    <InputSection user={user} setItem={setItem} />
    <ProfileSection item={item} />
    </div>
    </>
    
  );
}

export default App;
