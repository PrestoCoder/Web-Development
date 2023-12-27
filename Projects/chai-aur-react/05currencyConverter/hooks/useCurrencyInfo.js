import {useEffect, useState} from "react"
import axios from 'axios';

/*
Custom hooks are used mostly when we need to generalize a functionality that uses inbuilt React hooks.
If we don't use react hooks, custom hooks will simply be normal JS functions.

Because they don't return jsx, their extension is simply js.

Custom hooks help in reusability of such functions.
Also, because the inbuilt React hooks control and work with rendering of a component,
the components in which the custom hooks are being used will have a local copy of the inbuilt hook used by the custom hook.

*/


export default function useCurrencyInfo(currency) {
  useEffect(() => {
    // This is the API to get multiple currency conversions in form of a JSON string
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    
    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    /*
      Call the fetch data function
      When this will be called, axios.get will create a promise, and await will wait for the promise to get resolved.
      Then .then version would be:-

      const fetchData = () => {
          axios.get(url)
          .then(response => {console.log(response)})
      }
    */
    fetchData();
  })   
}

