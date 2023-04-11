import { useState } from 'react'


export default function Calculator() {


    const [formData, setFormData] = useState(
        {shoulders:"", waist:"", hips:""}
    )

    console.log(formData.shoulders)


        function handleChange(event) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
            })
        }

        function handleSubmit(event) {
            event.preventDefault()
            if(formData.shoulders === 0 && formData.waist === 0 && formData.hips === 0) {
                
            }
        }


    return (
        
        <div className="calculator--form--container">
            <h3>Tips for measuring correctly</h3>
                <ul className="measuring--tips">
                    <li>Look into a full length mirror or get someone to assist you</li>
                    <li>Wrap the tape measure around the fullest part of each area, making sure you keep the tape horizontal to the floor</li>
                    <li>Measuring around the fullest part will ensure you have the most accurate results</li>
                </ul>
            <div className="calculator--form">
                <form>
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
                    <button className="calculate--btn" onSubmit={handleSubmit} type="submit">Calculate my shape!</button>
                </form>
                
                <p className="error"></p>
            </div>



        </div>


    )


}