import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_USERS } from '../utils/queries';

import Auth from '../utils/auth';

const Results = () => {
    const { loading, data } = useQuery(QUERY_ALL_USERS);
    const users = data?.users || [];
    
    const age = users.map(user => user.username);
    const education = users.map(user => user.education);
    const relationship = users.map(user => user.relationship);
    const salary = users.map(user => user.salary);
    const location = users.map(user => user.location);
    const vote = users.map(user => user.vote);

// if (Auth.loggedIn()) {
//     return <Redirect to="/results"/>
// }

if (loading) {
    return <div>Loading...</div>;
}

if (!users) {
    console.log(users)
    return (
        <h4>You need to be logged in to view poll results, sign up and log in to continue</h4>
    );
} else {
    console.log(users);
    console.log(age);
    console.log(education);
    console.log(relationship);
    console.log(salary);
    console.log(location);
    console.log(vote);
}

    return (
        <main>
            <div className="flex-row justify-center">
            <h3>Chart Central</h3>

            <p>
                {users[3].username}
                {age}
                {education}
                {relationship}
                {salary}
                {location}
                {vote}
         
            </p>
            
           
                
            </div>
        </main>
    );
};

export default Results;
