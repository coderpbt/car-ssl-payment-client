import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

  const {signInwithG} = useContext(AuthContext);
  const handleGoogleSub = () => {
    signInwithG()
    .then((result) => {
      const user = result.user;
      const currentUsers = {
        email : user?.email
    }
    console.log(user);
    //get jwt token
    fetch('http://localhost:5000/jwt', {
        method : 'POST',
        headers : {
            'content-type' : "application/json"
        },
        body : JSON.stringify(currentUsers)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('car-token', JSON.stringify(data.token))
    })
    })
    .catch((error) => {
      console.error(error)
    })
  }
  return (
    
    <div>
      <button onClick={handleGoogleSub}>SignIn Google</button>
    </div>
  );
};

export default SocialLogin;