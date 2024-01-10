import React from 'react';
// import './style/login.css';

export default function LoginForm() {
  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form action="/login" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required="" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required="" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
