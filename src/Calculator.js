import { useState } from 'react'
import tapeImg from './images/tape-yellow-bg.jpg'


export default function Calculator() {


    const [formData, setFormData] = useState(
        {shoulders:"", waist:"", hips:""}
    )

    console.log(formData)


        function handleChange(event) {
            const {name, value} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: value
                }
            })
        }

        function handleSubmit(event) {
            event.preventDefault()
            
            if(formData.shoulders === "" && formData.waist === "" && formData.hips === "") {
                console.log("Please fill in all the fields")
            } else if(formData.hips / formData.shoulders >= 1.05 && formData.waist < formData.hips) {
                console.log("You have a pear body shape")
            } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist === formData.shoulders) {
                console.log("you have an apple body shape")
            } else if(formData.waist / formData.shoulders <= 0.75 && formData.waist / formData.hips < 0.75 && (formData.hips * 0.95) < formData.shoulders) {
                console.log("you have an hourglass shape")
            } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist < formData.shoulders) {
                console.log("you have an inverted triangle shape")
            } else if(formData.waist / formData.shoulders >= 0.75 && (formData.shoulders * 0.95) < formData.hips) {
                console.log("you have a rectangle body shape")
            }
       }


    return (
        
        <div className="calculator-container">
            <div className="measuring-tips">
                <div className="tips-left">
                    <h3>Tips for measuring correctly</h3>
                            <ul className="tips">
                                <li>Look into a full length mirror or get someone to assist you</li>
                                <li>Wrap the tape measure around the fullest part of each area, making sure you keep the tape horizontal to the floor</li>
                                <li>Measuring around the fullest part will ensure you have the most accurate results</li>
                            </ul>
                </div>
                <div className="tips-right">
                    <img src={tapeImg} alt="measuring tape" />
                </div>
               
            </div>
            
            <div className="calculator-form-container">
                <div className="calculator-form">
                    <form onSubmit={handleSubmit}>
                        <h4>Enter Your Measurements</h4>
                            <div className="form--element">
                                <label htmlFor="shoulders">Shoulders:</label>
                                <input 
                                    value={formData.shoulders}
                                    type="text"     
                                    name="shoulders"
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="form--element">
                                <label htmlFor="waist">Waist:</label>
                                <input 
                                    value={formData.waist}
                                    type="text" 
                                    name="waist" 
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="form--element">
                            <label htmlFor="hips">Hips:</label>
                                <input 
                                    value={formData.hips}
                                    type="text" 
                                    name="hips" 
                                    onChange={handleChange}
                                    />
                            </div>
                        <button className="calculate--btn" >Calculate my shape!</button>
                    </form>
                </div>
            </div>



        </div>


    )


}