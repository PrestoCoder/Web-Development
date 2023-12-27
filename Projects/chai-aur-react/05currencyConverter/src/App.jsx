import { useEffect, useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import InputBox from '../components/InputBox';
import axios from 'axios';

function App() {

  /* Custom hook
    Now, if we directly try to get the value of conversion through API call, the re-render, controlled by change of 
    input value of currency, which we made a state, can occur before the API call is done.
    And actually it will be so, because the API call return a promise, which is put into a microtask queue, which is executed only
    after the re-rendering is finished. Thus, we want to make the API call after the re-rendering, and thus useEffect hook is required.
    Which we have put into a custom hook.
    Note:- The rerendering on changing the input value basically doesn't re-render anything at all.
    It just runs the entire component code, which in turn call useCurrencyInfo, which makes the API call.
    So, we are basically re-rendering instead of putting an eventListener.
  */
  
  const [currData, setCurrData] = useState([]);
  const [inputCurrencyVal, setInputCurrencyVal] = useState(0);
  const [inputCurrencyType, setInputCurrencyType] = useState('usd');
  const [outputCurrencyType, setOutputCurrencyType] = useState('inr');

  function getCurrency() {
    // This is the API to get multiple currency conversions in form of a JSON string
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${inputCurrencyType}.json`
    
    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setCurrData(response.data[inputCurrencyType]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    fetchData();
  }

  const outputCurrencyVal = currData[outputCurrencyType] * inputCurrencyVal;

  // Called only once.
  useEffect(getCurrency, [inputCurrencyType]);
  
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      >
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                <div className="w-full mb-4">
                    <InputBox 
                      currencyType = {inputCurrencyType} 
                      setCurrencyType={setInputCurrencyType} 
                      label="From" data = {currData} 
                      setCurrencyVal = {setInputCurrencyVal} 
                      currencyValue={inputCurrencyVal}/>
                </div>

                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    >
                      swap
                    </button>
                </div>

                <div className="w-full mt-4 mb-4 pr-4">
                    <InputBox 
                      currencyType = {outputCurrencyType} 
                      setCurrencyType = {setOutputCurrencyType} 
                      label="To" data = {currData} 
                      setCurrencyVal = {setInputCurrencyVal} 
                      currencyVal={outputCurrencyVal}/>
                </div>

              </div>
      </div>
  )
};


export default App
