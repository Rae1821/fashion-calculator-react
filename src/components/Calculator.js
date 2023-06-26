import React from 'react'


export default function Calculator(props) {


    return (
       
        <div className="calculator-container">
                <div className="calculator-form" id="calculator-form">
                    <form onSubmit={props.handleSubmit}>
                        <h4>Enter Your Measurements</h4>
                            <div className="form--element">
                                <label htmlFor="shoulders"></label>
                                <input 
                                    value={props.formData.shoulders}
                                    type="text"     
                                    name="shoulders"
                                    placeholder="Shoulders"
                                    onChange={props.handleChange}
                                    required
                                    />
                            </div>
                            <div className="form--element">
                                <label htmlFor="waist"></label>
                                <input 
                                    value={props.formData.waist}
                                    type="text" 
                                    name="waist" 
                                    placeholder="Waist"
                                    onChange={props.handleChange}
                                    required
                                    />
                            </div>
                            <div className="form--element">
                            <label htmlFor="hips"></label>
                                <input 
                                    value={props.formData.hips}
                                    type="text" 
                                    name="hips" 
                                    placeholder="Hips"
                                    onChange={props.handleChange}
                                    required
                                    />
                            </div>
                           <button 
                            className="calculate-btn"
                            >Calculate</button>
                    </form>
                   
                </div>
        </div>

    )


}