import React, { useState } from 'react';
import { differenceInYears, parse } from 'date-fns';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = parse(dob, 'yyyy-MM-dd', new Date());
    const currentDate = new Date();
    const years = differenceInYears(currentDate, birthDate);
    setAge(years);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-section">
        <label className="black-bold">Enter your date of birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <button className="blue-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && <p className="black-bold">You are {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;
