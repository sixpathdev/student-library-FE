import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Logo from "../components/Logo"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
      <Logo />
      <div className="md:w-3/5 lg:w-2/5 md:mx-auto mx-3 md:mt-20 lg:mt-30 mt-16">
        <form className="bg-white shadow-md rounded px-5 md:-px-8 pt-6 pb-8 mb-4 lg:p-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border qborder-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="items-center text-center justify-between">
            <button
              className="bg-blue-500 w-full mb-4 lg:mb-5 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="md:inline-block py-2 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="forgotpassword"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-5">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
              className="text-center font-bold text-sm text-blue-500 hover:text-blue-800"
              to="register"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
      </>
    );
  }
}
