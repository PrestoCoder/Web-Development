import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const  {userid} = useParams();
    return (
        <div className=' m-auto w-96 bg-green-500 text-center p-6'>
            <h1>User hai yeh :- {userid}</h1>
        </div>
    )
}

export default User
