import React from "react";
import Loading from "../Loading";

const RegisterForm = ({ onChange, onSubmit, passwordMatch, loading }) => (
  <form className="card" onSubmit={e => onSubmit(e)}>
    <div className="card-header bg-primary text-white">
      <h3>Register</h3>
    </div>
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="login-email">
          <h4>Email</h4>
        </label>
        <input
          disabled={loading}
          name="email"
          onChange={e => onChange(e)}
          className="form-control"
          id="login-email"
          type="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-nickname">
          <h4>NickName</h4>
        </label>
        <input
          name="nickname"
          disabled={loading}
          onChange={e => onChange(e)}
          className="form-control"
          id="login-nickname"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">
          <h4>Password</h4>
        </label>
        <input
          disabled={loading}
          name="password"
          onChange={e => onChange(e)}
          id="login-password"
          className="form-control"
          type="password"
        />
      </div>

      <div className={passwordMatch ? "form-group" : " form-group has-danger"}>
        <label htmlFor="confirm-password">
          <h4>Password Confirm</h4>
        </label>
        <input
          name="confirmPassword"
          onChange={e => onChange(e)}
          id="confirm-password"
          className="form-control"
          type="password"
        />
        <div className="invalid-feedback">
          Sorry, that username's taken. Try another?
        </div>
      </div>
    </div>
    <div className="card-footer">
      <button
        className="btn btn-primary btn-block"
        disabled={loading}
        type="submit"
      >
        {loading ? <Loading /> : "Submit"}
      </button>
    </div>
  </form>
);

export default RegisterForm;
