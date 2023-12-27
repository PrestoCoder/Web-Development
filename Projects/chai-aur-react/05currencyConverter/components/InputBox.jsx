import { useEffect, useState, useId } from 'react'
import axios from 'axios';

function InputBox({currencyType, setCurrencyType, label, data, setCurrencyVal, currencyVal}) {

    let componentID = useId();

    function setCurrencyTypeLocal(event) {
        const selectedCurrencyType = event.target.selectedOptions[0].label;
        setCurrencyType(selectedCurrencyType);
    }
    
    return (
        <div className={`bg-white py-5 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {label}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={currencyVal}
                    // When we set a value, we can't change the value through browser
                    // But, bcoz we are setting it on onChange, it is getting set after render only, for both input boxes.
                    onChange={(e) => setCurrencyVal(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    id = {componentID} 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => setCurrencyTypeLocal(e)}
                >
                    {
                        Object.keys(data).map((currency) => (
                            <option key={currency} value = {currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
