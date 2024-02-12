
import { CurrencyDropdown } from './currencyDropdown';
import { getListOfQuotes } from '../../currencyApi';
import { fetchData } from '../../rapidApi';
import { useEffect, useState } from 'react';

const Home = () => {

    const[from , setFrom] = useState('');
    const[to , setTo] = useState('');

  const handleCalculate = () => {
    // debugger
    console.log(from, to)
  };

  // useEffect(()=>{
  //   getListOfQuotes('usd','pkr')
  // },[])

  useEffect(()=> {
    fetchData()
  },[])



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Calculator</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="from" className="form-label">
                    FROM
                  </label>
                  <CurrencyDropdown
                    setValue={setFrom}
                    from={from}
                  />            
                </div>
               
                <div className="mb-3">
                  <label htmlFor="to" className="form-label">
                    TO
                  </label>
                  <CurrencyDropdown setValue={setTo} to={to} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleCalculate}
                >
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
