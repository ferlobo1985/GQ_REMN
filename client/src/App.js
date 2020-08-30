import React from 'react';
import axios from 'axios';

function App() {

  const addUserHandler = () => {
      const userData = {
        email:'user1@gmail.com',
        password:'testing123'
      }

      axios({
        url:'http://localhost:5000/graphql',
        method:'POST',
        data:{
          query:`
            mutation {
              addUser(userInput:{
                email:"${userData.email}"
                password:"${userData.password}"
              }){
                _id
                email
                password
              }
            }
          `
        }
      }).then( response =>{
        console.log(response.data)
      }).catch( err => {
        console.log(err)
      })


  }

  return (
    <div className="App">
      <button
        onClick={addUserHandler}
      >
        ADD USER
      </button>
    </div>
  );
}

export default App;
