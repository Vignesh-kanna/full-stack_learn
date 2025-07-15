import React from 'react'

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Username: ${username}\nPassword: ${password}`);
  };  

  return (
    <form className="login-form-container" onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <div className="login-form-group">
        <label className="login-form-label" htmlFor="username">Username:</label>
        <input
          className="login-form-input"
          type="text"



          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="login-form-group">
        <label className="login-form-label" htmlFor="password">Password:</label>
        <input
          className="login-form-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-form-button" type="submit">Login</button>
    </form>
  );
}

export default LoginForm
