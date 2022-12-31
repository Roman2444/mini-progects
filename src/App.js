import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
const [users, setUsers] = React.useState([]);
const [isLoading, setLoading] = React.useState(true);
const [searchValue, setSearchValue]= React.useState('');
const [invites, setInvites] = React.useState([]);
const [succes, setSuccess] = React.useState(false);

React.useEffect(() => {
  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => setUsers(json.data))
    .catch(err => {
        console.log(err);
        alert('Ошибка получения данных')
      })
    .finally(() => setLoading(false));
}, []);

const onChangeSearchValue = (ev) => {
  setSearchValue(ev);
}

const onClickInvite = (id) => {
  if (invites.includes(id)) {
    setInvites(prev => prev.filter(el => el !== id));
  } else {
    setInvites((prev) => [...prev, id]);
  }
}

const onClickSuccess = () => {
  setSuccess(true);
}

  return (
    <div className="App">
      { succes ? ( 
        <Success count={invites.length}/> 
      ) : ( 
        <Users 
          onChangeSearchValue={onChangeSearchValue} 
          searchValue={searchValue} 
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSuccess={onClickSuccess}
        />
      )}
    </div>
  );
}

export default App;


