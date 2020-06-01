import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Sockets from './sockets';
import { State, User, BackgroundImage } from './redux/redux.types';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import PlayField from './components/PlayField';
import { makeStyles } from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const users: User[] = useSelector<State, User[]>(state => state.users);
  const currentUser: User = useSelector<State, User>(state => state.currentUser);
  const backgroundImage: BackgroundImage = useSelector<State, BackgroundImage>(state => state.backgroundImage);
  const loggedIn: boolean = !!currentUser;
  const showAdmin: boolean = loggedIn && currentUser?.username === 'admin';

  Sockets.setDispatch(dispatch);

  useEffect(() => {
    Sockets.updateUsersList();
    Sockets.updatePlayField();
    Sockets.setBackgroundImage();
  }, []);

  const useStyles = makeStyles({
    details: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr'
    },
    userList: {
      gridColumn: 1
    },
    questions: {
      gridColumn: 2
    },
    'app-body': {
      backgroundImage: `url(${showAdmin ? null : backgroundImage})`
    }
  });

  const classes = useStyles();

  return (
    <div className={classes["app-body"]}>
      <Navbar></Navbar>
      <div className="container">
        {!loggedIn ? <Login></Login> :
          <div className={classes.details}>
            <div className={classes.userList}>
              {users.map(user => <div key={user?.username}>{user?.username} {user?.score}</div>)}
            </div>
            <div className={classes.questions}>
              {showAdmin ? <Admin></Admin> : <PlayField></PlayField>}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
