// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
// import { fetchData } from '../../rapidApi';
import {getListOfQuotes} from '../../currencyApi'
export const CurrencyDropdown = ({ value, setValue }) => {

    const[currencyArray,setCurrencyArray]=useState([])

      useEffect(() => {
        getListOfQuotes()
          .then((res) => {
            debugger
            setCurrencyArray(res)})
          .catch((e) => console.log(e));
      }, []);
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <option value="" disabled>
        Select Currency
      </option>
      {/* <option value="USD">USD</option>
      <option value="EUR">INR</option>
      <option value="GBP">PKR</option>
      <option value="JPY">GBP</option>
      <option value="CAD"></option> */}

      {currencyArray?.map(cur=> <option key={cur} value={cur}> {cur} </option>)}
    </select>
  );
};

