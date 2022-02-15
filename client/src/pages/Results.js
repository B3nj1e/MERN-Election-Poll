import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const Results = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const users = data?.users || [];

    return (
        <main>
            <div className="flex-row justify-center">
            <h3>Chart Central</h3>
            
           
                
            </div>
        </main>
    );
};

export default Results;
