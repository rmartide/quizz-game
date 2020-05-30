import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Sockets from './sockets';
import { State, User } from './redux/redux.types';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  const users: User[] = useSelector<State, User[]>(state => state.users);
  const loggedIn: boolean = useSelector<State, boolean>(state => !!state.currentUser);

  Sockets.setDispatch(dispatch);

  useEffect(() => {
    Sockets.updateUsersList();
  }, []);


  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        {!loggedIn ? <Login></Login> :
          <div>
            {users.map(user => <p key={user?.username}>{user?.username}</p>)}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
