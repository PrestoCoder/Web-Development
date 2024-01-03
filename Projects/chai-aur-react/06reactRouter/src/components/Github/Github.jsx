import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {

    /*
        Here what is happening is, first the component is rendered, after which, the fetch is called, which at the end 
        sets data, which again triggers a rerender.

        But, using loader in routes, the data loading starts first, and only then the rendering is done, thus, 
        we save the step of first rendering the component, and only then calling for data.

        Thus, instead of rendering-fetching-rendering, we are doing fetching-rendering, which is awesome.

        To make the data downloaded by loader in main.jsx using routes, we use hook given by react-router-dom, which gives access
        to the data loaded by loader when the route corresponds to this component.
    */

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData();

    return (
        <div className='text-center p-3 bg-red-400'>
            Github followers: {data.followers}
        </div>
    )
}

export default Github


// This is not a very noice practice, to include loader functions in the component itself, but usually done today.
// Can shift all of these to a different file altogether.
export function githubInfoLoader() {
    return fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

/*
        Async-await syntax

        export async function githubInfoLoader() {
            const response = await fetch('https://api.github.com/users/hiteshchoudhary')
            return response.json();
        }

*/