import React from 'react';

const Table = ({ data, setUser }) => {
  return (
    <div className='container'>
      <div className='row row-header'>
        <div className='column'>Id</div>
        <div className='column'>Name</div>
        <div className='column'>Surname</div>
        <div className='column'>Email</div>
        <div className='column'>Age</div>
        <div className='column'>Actions</div>
      </div>

      {data &&
        data.map((user) => {
          return (
            <div className='row' key={user.id}>
              <div className='column'>{user.id}</div>
              <div className='column'>{user.name}</div>
              <div className='column'>{user.surname}</div>
              <div className='column'>{user.email}</div>
              <div className='column'>{user.age}</div>
              <div className='column'>
                <button onClick={() => setUser(user)}>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Table;
