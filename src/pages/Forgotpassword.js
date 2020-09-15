import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo"

export default class Forgotpassword extends Component {
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
      <div className="md:w-3/5 lg:w-2/5 md:mx-auto mx-3 md:mt-20 lg:mt-20 mt-16">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-8">
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
          <div className="w-full">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
          <div className="text-center mt-8">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              className="text-center font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
      </>
    );
  }
}
