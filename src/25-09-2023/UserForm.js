import { useState } from 'react';

const UserForm = ({ user, addNewUser, editUser, setUser, resetForm }) => {
  const [currentUser, setCurrentUser] = useState({
    id: user ? user.id : Math.floor(Math.random() * 100000),
    name: user ? user.name : '',
    surname: user ? user.surname : '',
    email: user ? user.email : '',
    age: user ? user.age : '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (user) {
      editUser(user);
    } else {
      addNewUser(currentUser);
    }
    // setCurrentUser({
    //   id: user ? user.id : Math.floor(Math.random() * 100000),
    //   name: user ? user.name : '',
    //   surname: user ? user.surname : '',
    //   email: user ? user.email : '',
    //   age: user ? user.age : '',
    // });
    resetForm();
  };

  const handleUsernameChange = (evt) => {
    if (user) {
      setUser({
        ...user,
        name: evt.target.value,
      });
    }
    setCurrentUser({
      ...currentUser,
      name: evt.target.value,
    });
  };

  const handleSurnameChange = (evt) => {
    if (user) {
      setUser({
        ...user,
        surname: evt.target.value,
      });
    }
    setCurrentUser({
      ...currentUser,
      surname: evt.target.value,
    });
  };

  const handleEmailChange = (evt) => {
    if (user) {
      setUser({
        ...user,
        email: evt.target.value,
      });
    }
    setCurrentUser({
      ...currentUser,
      email: evt.target.value,
    });
  };

  const handleAgeChange = (evt) => {
    if (user) {
      setUser({
        ...user,
        age: evt.target.value,
      });
    }
    setCurrentUser({
      ...currentUser,
      age: evt.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>
          Name
          <input
            type='text'
            value={user ? user.name : currentUser.name}
            onChange={handleUsernameChange}
          />
        </label>
      </div>

      <div>
        <label>
          Surname
          <input
            type='text'
            value={user ? user.surname : currentUser.surname}
            onChange={handleSurnameChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email
          <input
            type='text'
            value={user ? user.email : currentUser.email}
            onChange={handleEmailChange}
          />
        </label>
      </div>

      <div>
        <label>
          Age
          <input
            type='number'
            value={user ? user.age : currentUser.age}
            onChange={handleAgeChange}
          />
        </label>
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;
