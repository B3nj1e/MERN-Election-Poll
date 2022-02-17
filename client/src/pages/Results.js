import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_USERS } from '../utils/queries';

import Auth from '../utils/auth';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// import { Chart } from '../App';



const Results = () => {
    const { loading, data } = useQuery(QUERY_ALL_USERS);
    const users = data?.users || [];
 

    const age = users.map(user => user.age);
    const ageFrequency = age.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const education = users.map(user => user.education);
    const educationFrequency = education.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const relationship = users.map(user => user.relationship);
    const relationshipFrequency = relationship.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const salary = users.map(user => user.salary);
    const salaryFrequency = salary.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const location = users.map(user => user.location);
    const locationFrequency = location.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const vote = users.map(user => user.vote);
    const voteFrequency = vote.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    
    ChartJS.register(ArcElement, Tooltip, Legend);
const info = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: age,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Chart() {
    return <Pie data={info} />;
  };
    
    const chart = Chart()

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

    console.log(ageFrequency);
    console.log([...ageFrequency.values()]) // to get the frequency
    console.log(educationFrequency);
    console.log([...educationFrequency.values()]) // to get the frequency
    console.log(relationshipFrequency);
    console.log([...relationshipFrequency.values()]) // to get the frequency
    console.log(salaryFrequency);
    console.log([...salaryFrequency.values()]) // to get the frequency
    console.log(locationFrequency);
    console.log([...locationFrequency.values()]) // to get the frequency
    console.log(voteFrequency);
    console.log([...voteFrequency.values()]) // to get the frequency
    
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
            
            {chart}
                
            </div>
        </main>
    );
};

export default Results;
