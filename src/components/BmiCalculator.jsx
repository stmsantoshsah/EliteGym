import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function BmiCalculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [gender, setGender] = useState("")
  const [bmi, setBmi] = useState()
  const calcBMI = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      toast.error("Please Enter valid height,weight and gender")
      return;
    }
    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      toast.warn("you are under weight, contact to health provider")
    }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("you have normal weight,keep maintaining healthy lifestyle")
    }
    else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warn("You are overweight, contact a health provider");
    } else {
      toast.error("You are obese, please consult a health provider");
    }
  }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calcBMI}>
            <div>
              <label htmlFor="height">Height (cm)</label>
              <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="weight">Weight (kg)</label>
              <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit">CALCULATE BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmimage" />
        </div>
      </div>
    </section>
  )
}
