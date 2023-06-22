
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
import Faq from './Faq'
import Button from './components/Button'

import './App.css'


function App() {

  const [faqs, setFaqs] = useState([
    {
        question: 'Who is this calculator for?',
        answer: 'Here is the answer to your question',
        open: true
    },
    {
        question: 'How do I use this information?',
        answer: 'Here is the answer to your question',
        open: false
    },
    {
        question: `What if I don't like the results?`,
        answer: 'Here is the answer to your question',
        open: false
    },
    {
        question: 'What if I need help?',
        answer: 'Here is the answer to your question',
        open: false
    }
])

const toggleFaq = index => {
  setFaqs(faqs.map((faq, i) => {
    if(i === index){
      faq.open = !faq.open
    } else {
      faq.open = false
    }
    return faq
  }))
}

  return (
    <div className="App">
      
      
     <Main />
    
    <div className="faqs-container">
      <h2>FAQs
        <span>Answers to common questions</span>
      </h2>
        <div className="faqs">
            {faqs.map((faq, i) => (
              <Faq faq={faq} index={i} toggleFaq={toggleFaq}/>
            ))}
        </div>
    </div>

    <div className="get-started">
        <h2>Ready to get started?</h2>
        <Button text="Lets Gooo"/>  
    </div>
   
     
     <Footer />
   
    
      
      
      




    </div>
  );
}

export default App;
