import React, { useState } from 'react';
import {AppRouter}  from './routers/Router';

import { userContext } from './hooks/userContext';


function App() {
  
  const [user, setUser] = useState('');
  return (
    
    <userContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter />
    </userContext.Provider>
  );
}

export default App;
