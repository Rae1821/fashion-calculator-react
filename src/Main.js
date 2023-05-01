import greenCalc from './images/green-calc.jpg'
import tapeImg from './images/measuring-tape.png'

export default function Main() {


    return (
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
                //Benefits section 
            }
            <div className="benefits">
                <h2>The Benefits</h2>
                    <div className="arrow-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow-left">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow-middle">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow-right">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                    </div>
                <div className="benefits--container">
                    <div className="benefit-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F2CB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <h3>Clarity</h3>
                        <p>Have you ever bought something you saw an influencer on IG wearing only to realize it looks terrible on you? The reality is that clothes look different on different people because their shapes are not the same.</p>
                    </div>

                    <div className="benefit-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#088C7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
                        <h3>Positivity</h3>
                        <p>As women, it can be hard not to look in the mirror and pick yourself apart. Knowing your body shape allows you to view your body as a whole, instead of just a bunch of parts you may or may not like.</p>
                    </div>
                    <div className="benefit-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F2B807" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <h3>Simplicity</h3>
                        <p>You know all those clothes in the back of your closet you bought but never wear? Once you know your shape,  you'll know what items in the store will work for you and can start buying things you'll actually wear. How great is that?</p>
                    </div>
                </div>
            </div>


            {
                //How it works section 
            }
            <div id="works" className="works--container">
                <div className="works-left">
                <div className="works">
                        <h2>How It Works</h2>
                            <p class="works-p">The way the calculator determines your body shape is by comparing 
                            3 main body measurements: your shoulders, your waist, and your hips. The 
                            calculator then compares these measurements against each other and tells
                            you your body shape! 
                            <br />
                            <br />
                            It's important to remember that all body shapes are beautiful and unique and 
                            this calculator is only here to help, it is not meant to be negative in any way.
                            This is simply a tool to help you achieve your style goals! So grab your measurements 
                            and let the calculator work its magic!✨
                            </p>
                    </div>
                </div>
                <div className="works-right">
                    <img className="calculator-img" src={greenCalc} alt="calculator" />
                </div>
            </div>

            {
                // large quote section 
            }

            <div class="quote">
                <h2>You can have anything you want in life if you dress for it</h2>
                <p>Edith Head</p>
            </div>

            {
                //measuring tips section
            }

            <div className="measuring-tips">
                <div className="tips-left">
                
                    <img src={tapeImg} alt="measuring tape" />
                </div>
                <div className="tips-right">
                    <h2>Measuring Tips</h2>
                    <div className="tips">
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
            </div>

            {
                //Testimonials
            }

            <div className="testimonials-container">
                <h2>Testimonials</h2>
                <div className="testimonial-wrapper">
                    <div className="testimonial">
                        <p>"Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in dolor."
                        </p>
                        <p className="author">-Betty Sue</p>
                    </div>
                    <div className="testimonial">
                        <p>"Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in dolor."
                        </p>
                        <p className="author">-Tiffany White</p>
                    </div>
                    <div className="testimonial">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut lab
                            ore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in dolor."
                        </p>
                        <p className="author">-Rebecca Johnson</p>
                    </div>
                </div>
            </div>



        </main>







    )


}