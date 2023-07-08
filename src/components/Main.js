// import appleTape from '../images/tape-apple.jpg'
import waistMeasure from '../images/waist-measure.jpg'
import avatarOne from '../images/reviewer-1.jpg'
import avatarTwo from '../images/reviewer-2.jpg'
import avatarThree from '../images/reviewer-3.jpg'
import UseAnimations from 'react-useanimations'
import arrowDown from 'react-useanimations/lib/arrowDown'
import fashionImg from '../images/fashion-img.png'


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
                     <UseAnimations animation={arrowDown} size={64} strokeColor={'#17BFAE'} />
                    {/* <p class="arrow-icon"><HiOutlineArrowDown style={{ fontSize: '2rem', backgroundColor: '#17BFAE' }}/></p> */}
                     {/* <a href="#calculator-form" alt="calculator link">
                        <button className="start--btn">
                            Calculate My Shape!
                        </button>
                    </a> */}
                </div>
            </div> 

            {
                //How it works section 
            }
            <div id="works" className="works--container">
                <div className="works-left">
                    {/* <img className="apple-img" src={appleTape} alt="apple with measuring tape" /> */}
                <img className="fashion-img" src={fashionImg} alt="fashion with measuring tape" />
                </div>
                <div className="works-right">
                    <h2>The Perks</h2>
                    <div className="perks-container">
                        <div className="perk">
                            <p className="pill">Process</p>
                            <h3>Easy Peasy</h3>
                            <p className="perk-description">With just 3 measurements - 
                            your shoulders, your waist, and your hips - 
                            the body calculator compares the ratio of each to determine 
                            your body shape</p>
                        </div>

                        <div className="perk">
                            <p className="pill">Benefit</p>
                            <h3>Clarity</h3>
                            <p className="perk-description">Knowing your shape clears up 
                            all those frustrating moments when something looks good on 
                            someone else but not on you. It’s not you, it’s your shape.</p>
                        </div>

                        <div className="perk">
                            <p className="pill">Benefit</p>
                            <h3>Body Positivity</h3>
                            <p className="perk-description">Your body is not just a bunch of 
                            individual parts you may or may not like. It’s a beautiful shape 
                            and it’s time to see it and appreciate it as others do</p>
                        </div>

                        <div className="perk">
                            <p className="pill">Benefit</p>
                            <h3>Shopping made easy</h3>
                            <p className="perk-description">Imagine a world where you actually 
                            wear, and love, all the clothes you buy so they no longer sit in 
                            the back of your closet with the tags on. </p>
                        </div>
                    </div>
                    
                      
                </div>
            </div>

            {
                //Measuring tips
            }

            <div className="measuring-tips">
                <div className="measuring-tips-inner">
                    <h2>Measuring Tips
                        <span>Tips to get the most accurate result</span>
                    </h2>                    
                        <img className="waist-img" src={waistMeasure} alt="person with waist being measured" />
                        
                        <p className="steps step-one"><span>01</span>Look into a full length mirror or get someone to assist you</p>   
                        <p className="steps step-two"><span>02</span>If you are between numbers round up to the nearest whole number</p>
                        <p className="steps step-three"><span>03</span>Wrap the tape measure around the fullest part of each area</p>
                        <p className="steps step-four"><span>04</span>Keep measuring tape horizontal to the floor</p>
                        <p className="steps step-five"><span>05</span>Write down the measurements as you go so you don't forget</p>
                </div>
               
            </div>

            {
                //Testimonials
            }

            <div className="testimonials-container">
                <h2>Testimonials
                    <span>See what our previous clients have to say</span>
                </h2>
                <div className="testimonial-wrapper">
                    <div className="testimonial">
                        <img className="avatar" src={avatarOne} alt="testimonial author"/>
                        <p>"I had no idea how important it is to know your body shape. Once 
                        I found out what mine was, I was able to choose the items that were 
                        perfect for my shape, no more guessing!"
                        </p>
                        <p className="author">Betty Sue</p>
                    </div>
                    <div className="testimonial">
                        <img className="avatar" src={avatarTwo} alt="testimonial author"/>
                        <p>"So thankful I took a chance and tried this calculator. I will 
                        admit, I was skeptical about yet another thing that promises to 
                        improve your style but this knowledge is priceless!"
                        </p>
                        <p className="author">Tiffany White</p>
                    </div>
                    <div className="testimonial">
                        <img className="avatar" src={avatarThree} alt="testimonial author"/>
                        <p>
                            "Not only is the body calculator such an amazing tool, I love that 
                            there is such a helpful chatbot ready to answer any potential styling 
                            questions you might have!"
                        </p>
                        <p className="author">Rebecca Johnson</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main


   






