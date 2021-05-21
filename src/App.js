import React, { useState } from 'react';
import Cards from "react-credit-cards";
import Dropdown from './Dropdown';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-credit-cards/es/styles-compiled.css';

const App = () => {

    const months = ['MM','01','02','03','04','05','06','07','08','09','10','11','12'];
    const years = ['YY','21','22','23','24','25','26','27','28','29','30'];
    
    const[cardnum, setCardnum] = useState('');
    const[cardname, setCardname] = useState('');
    const[expmonth, setExpmonth] = useState(months[0]);
    const[expyear, setExpyear] = useState(years[0]);
    const[cvv, setCvv] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='container col-sm-12 col-lg-12'>
            <Cards
          cvc={cvv}
          expiry={ expmonth === 'MM' || expyear === 'YY' ? '' : expmonth+expyear }
          name={cardname}
          number={cardnum}
        />  
            <div className='form-div'>
            <form onSubmit={onSubmit} className='signinform'>
                <div className="field">
                    <label>Card Number</label>
                    <input type="text" value={cardnum} maxLength={16} className='form-control form-group txtinput' onChange={(event) => {setCardnum(event.target.value)} } />
                </div>
                <div className="field">
                    <label>Card Holder Name</label>
                    <input type="text" value={cardname} className='form-control form-group txtinput' onChange={(event) => {setCardname(event.target.value)} } />
                </div>
                <div className="field">
                    <label>Expiry</label>
                    <div className='form-group'>
                    <Dropdown options={months} selected={expmonth} onSelectedChange={setExpmonth} />
                    </div>
                    <div className='form-group'>
                    <Dropdown options={years} selected={expyear} onSelectedChange={setExpyear} />
                    </div>
                </div>
                <div className="field">
                    <label>CVV</label>
                    <input type="text" value={cvv} maxLength={3} className='form-control form-group txtinput' onChange={(event) => {setCvv(event.target.value)} } />
                </div>
                <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Submit' />
            </form>
            </div>
        </div>
        );
}

export default App;