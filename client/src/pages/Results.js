import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_ALL_USERS } from '../utils/queries';

import Auth from '../utils/auth';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


// import { Chart } from '../App';

const Results = () => {
    const { loading, data } = useQuery(QUERY_ALL_USERS);
    const users = data?.users || [];

    // const greens = users.filter(user => user.vote === "Greens");
    // const liberals = users.filter(user => user.vote === "Liberal");
    // const labors = users.filter(user => user.vote === "Labor");
    // const nationals = users.filter(user => user.vote === "National");
    // const aJustices = users.filter(user => user.vote === "Animal Justice");
    // const inds = users.filter(user => user.vote === "Indepenent");
    // const aSAs = users.filter(user => user.vote === "Advance SA");
    // const FFs = users.filter(user => user.vote === "Family First");

    // const parties = ["greens", "liberals", "labors", "nationals", "aJustices", "inds", "aSAs", "FFs"];
    // const charts = [];

    // for (const elements of parties) {
    // console.log(elements);

    const ages = users.map(user => user.age);
    console.log(ages);

    // const age = elements.map(element => element.age);
    // const ageFrequency = age.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // const education = elements.map(element => element.education);
    // const educationFrequency = education.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // const relationship = elements.map(element => element.relationship);
    // const relationshipFrequency = relationship.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // const salary = elements.map(element => element.salary);
    // const salaryFrequency = salary.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // const location = elements.map(element => element.location);
    // const locationFrequency = location.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const vote = users.map(user => user.vote);
    const voteFrequency = vote.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const partyArr = vote.filter(function (item, pos) {
        return vote.indexOf(item) == pos;
    })

    // console.log(age);
    // console.log(education);
    // console.log(relationship);
    // console.log(salary);
    // console.log(location);
    console.log(vote);
    console.log(voteFrequency);
    console.log(partyArr)

    ChartJS.register(ArcElement, Tooltip, Legend);

    function Chart(demographicData, title, demographicOptions) {

        const label = partyArr;
        const backgColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgb(1, 0, 5, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgb(254, 128, 254, 0.2)',
            'rgb(43, 0, 219, 0.2)',
            'rgb(1, 0, 5, 0.2)'
        ];
        const bColor = [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgb(1, 0, 5, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgb(254, 128, 254, 1)',
            'rgb(43, 0, 219, 1)',
            'rgb(1, 0, 5, 1)'
        ];

        const info = {


            labels: label,
            datasets: [
                {
                    label: title,
                    data: [...demographicData.values()],
                    backgroundColor: backgColor,
                    borderColor: bColor,
                    borderWidth: 1,
                },
            ],
        };
        return <Pie data={info} />;
    };

    const pollChart = Chart(voteFrequency, "Vote", vote);
    // const edChart = Chart(educationFrequency, "Education", education);
    // const relChart = Chart(relationshipFrequency, "Relationship", relationship);
    // const salChart = Chart(salaryFrequency, "Salary", salary);
    // const locChart = Chart(locationFrequency, "Relationship", location);

    // charts.push(
    //     <div>
    //     {edChart},
    //     {relChart},
    //     {salChart},
    //     {locChart},
    //     </div>
    // );

    // };

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
        // console.log(users);
        // const test = users.filter(user => user.vote == "Greens");
        // console.log(test);
        // console.log(liberals);
        // console.log(age);
        // console.log(education);
        // console.log(relationship);
        // console.log(salary);
        // console.log(location);
        // console.log(vote);

        // if ((users.map(user => user.vote)) == "Greens") {
        //     // console.log(users.age);
        // };



        // console.log(ageFrequency);
        // console.log([...ageFrequency.values()]) // to get the frequency
        // console.log(educationFrequency);
        // console.log([...educationFrequency.values()]) // to get the frequency
        // console.log(relationshipFrequency);
        // console.log([...relationshipFrequency.values()]) // to get the frequency
        // console.log(salaryFrequency);
        // console.log([...salaryFrequency.values()]) // to get the frequency
        // console.log(locationFrequency);
        // console.log([...locationFrequency.values()]) // to get the frequency
        // console.log(voteFrequency);
        // console.log([...voteFrequency.values()]) // to get the frequency

    }
    if (Auth.loggedIn()) {
        return (
            <main id="container">
                <div id="results">
                    <h1>Chart Central</h1>

                    <h2>Poll Results</h2>

                    <div id="chart">
                        {pollChart}
                    </div>
                    <br />
                    <h5>Pending further developmenet and access to demographic data</h5>
                    <br />

                </div>
            </main>
        );
    } else {
        return (
        <main>
        <div className='parent'>
            <div>
            <h4>You need to be logged in to view Poll Results. Please click log in or sign up. </h4>
            <br/>
            <Link id="govote" to="/signup"></Link>
            </div>
        </div>
        </main>
        )
    }
};

export default Results;
