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

  return (
    <div className="App">
      <Users onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} items={users} isLoading={isLoading}/>
      {/* <Success /> */}
      {searchValue}
    </div>
  );
}

export default App;
