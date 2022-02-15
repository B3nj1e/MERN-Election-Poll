import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
const Chart = require('chart.js');

import Auth from '../utils/auth';

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

const Results = () => {

    return (
        <main>
            <div className="flex-row justify-center">
            <h3>Chart Central</h3>
                <div>
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </main>
    );
};

export default Results;
