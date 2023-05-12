import pinkCalc from './images/pink-calculator.jpg'
import appleTape from './images/tape-apple.jpg'
import waistMeasure from './images/waist-measure.jpg'
import avatarOne from './images/reviewer-1.jpg'
import avatarTwo from './images/reviewer-2.jpg'
import avatarThree from './images/reviewer-3.jpg'


import React from 'react'

const Main = () => {
  return (
    <div>
        <main>
            <div className="hero">     
                <div className="hero--content">
                    <p className="pre--title">premiere fashion secrets</p>
                     <h1 className="title">The Body Shape
                        <span>Calculator</span>
                    </h1>
                     <p className="description">
                     If you want to look and feel better in your clothes, without going on a diet or hitting the gym, I'm going to let you in on a little secret...
                     <em>It's not about your weight, it's about your shape!</em>
                     <br /><br />
                     Knowing your body shape is the first step to looking better in your clothes. No more feeling overwhelemed while shopping for clothes and getting dressed will be a breeze.
                     Ready to get started?
                     </p>
                     <a href="#calculator-form" alt="calculator link">
                        <button className="start--btn">
                            Calculate My Shape!
                        </button>
                    </a>
                </div>
            </div> 

            {
                //How it works section 
            }
            <div id="works" className="works--container">
                <div className="works-left">
                    <h2>How It Works</h2>
                        <p className="works-p">The way the calculator takes in
                        3 main body measurements: your <span>shoulders</span>, your <span>waist</span>, and your <span>hips</span>. The 
                        calculator then compares these measurements against each other to determine
                        the shape of your body! 
                        <br />
                        <br />
                        It's important to remember that all body shapes are beautiful and unique and 
                        this calculator is only here to help, it is not meant to be negative in any way.
                        This is simply a tool to help you achieve your style goals! So grab your measurements 
                        and let the calculator work its magic!✨
                        </p>
                    
                </div>
                <div className="works-right">
                <img className="apple-img" src={appleTape} alt="apple with measuring tape" />

                </div>
            </div>
            
            
            { 
                //Benefits section 
            }
            <div className="benefits--container">
                
                   <div className="benefits-img">
                        <img className="calculator-img" src={pinkCalc} alt="calculator" />

                   </div>

                    <div className="benefits">
                        <h2>The Benefits</h2>
                            <h3>Clarity</h3>
                                <p>Have you ever bought something you saw an influencer on IG wearing only to realize it looks terrible on you? The reality is that clothes look different on different people because their shapes are not the same.</p>
                    
                            <h3>Positivity</h3>
                                <p>As women, it can be hard not to look in the mirror and pick yourself apart. Knowing your body shape allows you to view your body as a whole, instead of just a bunch of parts you may or may not like.</p>
                
                            <h3>Simplicity</h3>
                                <p>You know all those clothes in the back of your closet you bought but never wear? Once you know your shape,  you'll know what items in the store will work for you and can start buying things you'll actually wear. How great is that?</p>
                    </div>
            </div>

            {
                //Measuring tips
            }

            <div className="measuring-tips">
                <div className="tips-img">
                    <img className="waist-img" src={waistMeasure} alt="waist measurement" />
                </div>
                    <div className="tips">
                        <h2>Measuring Tips</h2>
                            <h3>Step 1</h3>
                                <p>Look into a full length mirror or get someone 
                                to assist you</p>
                            <h3>Step 2</h3>
                                <p>Wrap the tape measure around the fullest 
                                part of each area, making sure you keep the tape 
                                horizontal to the floor. This will give you the
                                most accurate results.</p>
                            <h3>Step 3</h3>
                                <p>If you are between whole sizes, round up or down to the nearest
                                whole number.</p>
                    </div>
            </div>

            {
                //Testimonials
            }

            <div className="testimonials-container">
                <h2>Testimonials</h2>
                <div className="testimonial-wrapper">
                    <div className="testimonial">
                        <img className="avatar" src={avatarOne} alt="testimonial"/>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua.
                        </p>
                        <p className="author">Betty Sue</p>
                    </div>
                    <div className="testimonial">
                        <img className="avatar" src={avatarTwo} alt="testimonial"/>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua.
                        </p>
                        <p className="author">Tiffany White</p>
                    </div>
                    <div className="testimonial">
                        <img className="avatar" src={avatarThree} alt="testimonial"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua.
                        </p>
                        <p className="author">Rebecca Johnson</p>
                    </div>
                </div>
            </div>
           

            {
                // large quote section 
            }

            <div className="quote">
                <h2>"You can have anything you want in life if you dress for it."</h2>
                <p>Edith Head</p>
            </div>

          



        </main>



    </div>
  )
}

export default Main


   






