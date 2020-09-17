import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import soulriver from "../../assets/images/soul_is_a_river.jpeg";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.fileinput = React.createRef();
  }

  choosefile = () => {
    this.fileinput.current.click();
  }

  itchanged = () => {
      alert("dfghjk")
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="flex flex-wrap justify-around mt-10">
          <div className="w-1/4 ml-auto">
            <img
              src={soulriver}
              style={{ width: "10em", height: "10em" }}
              className="rounded-full mx-auto"
              alt="userphoto"
            />
            <div className="text-center mt-4 text-2xl text-gray-800">
              John Doe
            </div>
            <span
              style={{
                position: "relative",
                top: "-95px",
                right: "-170px",
                cursor: "pointer",
              }}
              onClick={this.choosefile}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C2.89543 5 2 5.89543 2 7V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V7C18 5.89543 17.1046 5 16 5H14.4142C14.149 5 13.8946 4.89464 13.7071 4.70711L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3H8.82843C8.29799 3 7.78929 3.21071 7.41421 3.58579L6.29289 4.70711C6.10536 4.89464 5.851 5 5.58579 5H4ZM10 14C11.6569 14 13 12.6569 13 11C13 9.34315 11.6569 8 10 8C8.34315 8 7 9.34315 7 11C7 12.6569 8.34315 14 10 14Z"
                  fill="#4299e1"
                />
              </svg>
              <input
                type="file"
                style={{ visibility: "hidden" }}
                ref={this.fileinput}
                onChange={this.itchanged}
                id="triggerUpload"
              />
            </span>
          </div>
          <div className="w-1/3 mr-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
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
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none shadow block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <input
                    className="appearance-none block shadow w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="department"
                    type="text"
                    placeholder="Department"
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Update Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
