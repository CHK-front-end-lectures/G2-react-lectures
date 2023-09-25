import { useState } from 'react';
import UserForm from './UserForm';
import Table from './Table';

const initialUsers = [
  {
    id: 0,
    name: 'John',
    surname: 'Doe',
    email: 'johndoe@gmail.com',
    age: 24,
  },
  {
    id: 1,
    name: 'Mike',
    surname: 'Smith',
    email: 'johndoe@gmail.com',
    age: 30,
  },
  {
    id: 2,
    name: 'Terry',
    surname: 'Smitham',
    email: 'johndoe@gmail.com',
    age: 35,
  },
];

const UsersApp = () => {
  const [data, setData] = useState(initialUsers);
  const [user, setUser] = useState(null);
  const [uniqueKey, setUniqueKey] = useState(null);

  const addNewUser = (newUser) => {
    setData([...data, newUser]);
  };

  const editUser = (editUser) => {
    console.log(editUser);
    setData(
      data.map((savedUser) => {
        if (savedUser.id === editUser.id) {
          return editUser;
        } else {
          return savedUser;
        }
      }),
    );
    setUser(null);
  };

  const resetForm = () => {
    setUniqueKey(Math.random());
  };

  return (
    <div className='container'>
      <UserForm
        key={uniqueKey}
        addNewUser={addNewUser}
        user={user}
        editUser={editUser}
        setUser={setUser}
        resetForm={resetForm}
      />
      <button type='button' onClick={() => setUniqueKey(Math.random())}>
        Clear
      </button>
      <Table data={data} setUser={setUser} />
    </div>
  );
};

export default UsersApp;
