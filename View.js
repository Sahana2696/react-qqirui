import React, {Component} from 'react';

const View=(props)=>{
  return(
    <div>
    <h3>Username: {props.username}</h3>
    <h3>Password: {props.password}</h3>
    </div>
  )
}
export default View;