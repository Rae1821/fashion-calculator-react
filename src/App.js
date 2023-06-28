
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
import Faq from './components/Faq'
import Button from './components/Button'
import Calculator from './components/Calculator'
import Results from './components/Results'
import data from './bodyShapeData'


function App() {


//faq state 
const [faqs, setFaqs] = useState([
  {
      question: 'Who is this calculator for?',
      answer: 'This is for anyone who wants to understand how to look and feel their best in the body they have and the first step is knowing your shape!',
      open: false
  },
  {
      question: 'How do I use this information?',
      answer: 'Once you know your shape you can learn what clothes are flattering for your shape and what will look the best on you.',
      open: false
  },
  {
      question: `What if I don't like the results?`,
      answer: 'Keep in mind that knowing your shape does not define you, it simply arms you with information so you can make the best clothing choices. Remember that every shape is beautiful!',
      open: false
  },
  {
      question: 'What if I need help?',
      answer: 'Feel free to reach out to me if you have any questions.',
      open: false
  }
])

//calculator state
const [showCalculator, setShowCalculator] = useState(false)

//formdata state
const [formData, setFormData] = useState(
  {shoulders:"", waist:"", hips:"", errorMessage: 'Please fill out the selected field',
  required: true,}
)
//results from calculator state
const [shapeResults, setShapeResults] = useState({
      name: '',
      id: ''
  })


//faq section
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

//show calculator 
function toggleShowCalculator(e) {
  setShowCalculator(prevShowCalculator => !prevShowCalculator)
}

//detect changes to form and save to state
function handleChange(event) {
  const {name, value} = event.target
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      }
  })
}

//handle the formdata once submitted
function handleSubmit(event) {
  event.preventDefault()
  
  if(formData.shoulders === "" && formData.waist === "" && formData.hips === "") {
      console.log("Please fill in all the fields")
  } else if(formData.hips / formData.shoulders >= 1.05 && formData.waist < formData.hips) {
      setShapeResults({name: 'Pear', id: 1})
  } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist === formData.shoulders) {
      //console.log("you have an apple body shape")
      setShapeResults({name: 'Apple', id: 2})
  } else if(formData.waist / formData.shoulders <= 0.75 && formData.waist / formData.hips < 0.75 && (formData.hips * 0.95) < formData.shoulders) {
      //console.log("you have an hourglass shape")
      setShapeResults({name: 'Hourglass', id: 5})

  } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist < formData.shoulders) {
      //console.log("you have an inverted triangle shape")
      setShapeResults({name: 'Triangle', id: 3})

  } else if(formData.waist / formData.shoulders >= 0.75 && (formData.shoulders * 0.95) < formData.hips) {
      console.log("you have a rectangle body shape")
      setShapeResults({name: 'Rectangle', id: 4})
  }
  setShowCalculator(false)
}

//start over button 
function handleStartOver() {
  setFormData({shoulders:"", waist:"", hips:""})
  setShapeResults('')
  setShowCalculator(false)
}
 
// render results component
  const results = data.map(item => {
      if(shapeResults.name === item.name && shapeResults.id === item.id) {
        return (
          <Results 
              key={item.id}
              name={item.name}
              bodyShape={item.bodyShape}
              mainCharacteristic={item.characteristics.main}
              secondaryCharacteristic={item.characteristics.secondary}
              additionalCharacteristic={item.characteristics.additional}
              handleStartOver={() => handleStartOver()}
          />
        )
      } else {
        return console.log('error')
      }
    })


    //fetch recommendations from API
    async function fetchClothingApi() {
     
      const url = 'https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e8e61d9638mshf2c592bf697514fp18b971jsn02e0d86ad08e',
          'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result.ChildMenus);
      } catch (error) {
        console.error(error);
      }

    }

    fetchClothingApi()

  return (
    <div className="App">
      
      {/* main portion of website content */}
      <Main />
    
      {/* frequently asked questions */}
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

      {/* call to action */}
      <div className="get-started">
          <h2>Ready to get started?</h2>
          <Button handleClick={toggleShowCalculator} text="Lets Gooo" type="orange-btn"/>  
      </div>

      {/* calculator */}
      {showCalculator && 
        <Calculator 
            formData={formData} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            />}
       
       {/* results */}
      {shapeResults === '' ? '' : results}
            
      <Footer />
   
    </div>
  );
}

export default App;
