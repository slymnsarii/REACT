import React from 'react'

//comment satırı

/*
comment bloğu
*/







const Jsx3 = () => {

    const isAdmin = true;



  return (

    //JS kodlarını {} içine alırsın

    <div>
      {isAdmin ? (
        <div>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Jsx3;