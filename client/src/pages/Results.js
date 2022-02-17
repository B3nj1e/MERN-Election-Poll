import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Results = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const users = data?.users || [];

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
}

    return (
        <main>
            <div className="flex-row justify-center">
            <h3>Chart Central</h3>

            <p>
                `{users.username}`
            </p>
            
           
                
            </div>
        </main>
    );
};

export default Results;
