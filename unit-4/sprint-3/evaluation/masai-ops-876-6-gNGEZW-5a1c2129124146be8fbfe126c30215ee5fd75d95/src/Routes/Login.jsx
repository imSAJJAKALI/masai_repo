function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
