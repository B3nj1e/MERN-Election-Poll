import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    education: '',
    relationship: '',
    salary: '',
    location: '',
    vote: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>

<div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" placeholder="Enter a username" name="username" value={formState.username}
                  onChange={handleChange}/>
                </div>

                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email" name="email" value={formState.email}
                  onChange={handleChange}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" placeholder="enter a password" name="password" value={formState.password}
                  onChange={handleChange}/>
                </div>

                <div class="form-group">
                  <label>Age</label>
                  <input type="text" class="form-control" placeholder="Enter your age" name="age" value={formState.age}
                  onChange={handleChange}/>
                </div>

                {/* <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />

                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                /> */}
                {/* <input
                  className="form-input"
                  placeholder="Your Age"
                  name="age"
                  type="text"
                  value={formState.age}
                  onChange={handleChange}
                /> */}
                {/* <input
                  className="form-input"
                  placeholder="Your Education Level"
                  name="education"
                  type="text"
                  value={formState.education}
                  onChange={handleChange}
                /> */}
                <div className="form-group">
                  <label>Select your highest education level</label>
                  <select className="form-control" value={formState.education} onChange={handleChange} name="education">
                    <option>select education</option>
                    <option>Year 10 or under</option>
                    <option>Year 11</option>
                    <option>Year 12</option>
                    <option>Cert II</option>
                    <option>Cert III</option>
                    <option>Cert IV</option>
                    <option>Bachelor/Degree</option>
                    <option>Masters</option>
                    <option>PhD</option>
                  </select>
                </div>
                {/* <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01" name="education" value={formState.education} onChange={handleChange}>
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div> */}

                <div className="form-group">
                  <label>Select your relationship status</label>
                  <select className="form-control" value={formState.relationship} onChange={handleChange} name="relationship">
                    <option>select relationship</option>
                    <option>Single</option>
                    <option>De Facto</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow/widower</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* <input
                  className="form-input"
                  placeholder="Your Relationship Status"
                  name="relationship"
                  type="text"
                  value={formState.relationship}
                  onChange={handleChange}
                /> */}
                {/* <input
                  className="form-input"
                  placeholder="Your Salary Range"
                  name="salary"
                  type="text"
                  value={formState.salary}
                  onChange={handleChange}
                /> */}
                <div className="form-group">
                  <label>Select your salary range</label>
                  <select className="form-control" value={formState.salary} onChange={handleChange} name="salary">
                    <option>select salary</option>
                    <option>less than $50,000</option>
                    <option>$50,000-$100,000</option>
                    <option>more than $100,000</option>
                  </select>
                </div>
                {/* <input
                  className="form-input"
                  placeholder="Your Location"
                  name="location"
                  type="text"
                  value={formState.location}
                  onChange={handleChange}
                /> */}
                <div className="form-group">
                  <label>Select your location</label>
                  <select className="form-control" value={formState.location} onChange={handleChange} name="location">
                    <option>select location</option>
                    <option>CBD</option>
                    <option>Northern Adelaide</option>
                    <option>Eastern Adelaide</option>
                    <option>Southern Adelaide</option>
                    <option>Western Adelaide</option>
                    <option>Northern SA</option>
                    <option>Eastern SA</option>
                    <option>Southern SA</option>
                    <option>Western SA</option>
                  </select>
                </div>
                {/* <input
                  className="form-input"
                  placeholder="Your Election Vote"
                  name="vote"
                  type="text"
                  value={formState.vote}
                  onChange={handleChange}
                /> */}
                <div className="form-group">
                  <label>Vote for your preferred party</label>
                  <select className="form-control" value={formState.vote} onChange={handleChange} name="vote">
                    <option>select vote</option>
                    <option>Greens</option>
                    <option>Liberal</option>
                    <option>Labor</option>
                    <option>National</option>
                    <option>Animal Justice</option>
                    <option>One Nation</option>
                    <option>Independent</option>
                    <option>Advance SA</option>
                    <option>Family First</option>
                  </select>
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
