import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Sockets from './sockets';
import { State, User, BackgroundImage } from './redux/redux.types';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import PlayField from './components/PlayField';
import { makeStyles, Typography } from '@material-ui/core';
import Podium from './components/Podium';

function App() {
  const dispatch = useDispatch();
  const users: User[] = useSelector<State, User[]>(state => state.users);
  const currentUser: User = useSelector<State, User>(state => state.currentUser);
  const backgroundImage: BackgroundImage = useSelector<State, BackgroundImage>(state => state.backgroundImage);
  const showWinners: boolean = useSelector<State, boolean>(state => state.showWinners);
  const loggedIn: boolean = !!currentUser;
  const showAdmin: boolean = loggedIn && currentUser?.username === 'admin';

  Sockets.setDispatch(dispatch);

  useEffect(() => {
    Sockets.updateUsersList();
    Sockets.updatePlayField();
    Sockets.setBackgroundImage();
    Sockets.updateShowWinners();
    Sockets.updateQuestionAnswers();
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
      backgroundImage: `url(${showAdmin ? null : backgroundImage})`,
      height: '100vh'
    },
    user: {

    },
    'center-component': {
      display: 'flex',
      justifyContent: 'center'
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
              {users.map(user =>
                <div className={classes.user} key={user?.username}>
                  <Typography variant="h6">
                    {user?.username} {user?.score}
                  </Typography>
                </div>
              )}
            </div>
            <div className={classes.questions}>
              {showAdmin ? <Admin></Admin> :
                (showWinners ?
                  <div className={classes["center-component"]}><Podium users={users}></Podium></div> :
                  <PlayField></PlayField>
                )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
