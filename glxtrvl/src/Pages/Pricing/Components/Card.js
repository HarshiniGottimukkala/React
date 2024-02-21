import React from 'react'
import SetCard from './SetCard'

const Card = () => {
  const cards = [
    {
      
      heading : "Basic",
      line1 : "5 Lakhs",
      line2 : "No Unlimited Access",
      line3 : "No Food"
    },
    {
      heading : "Medium",
      line1 : "10 Lakhs",
      line2 : "Unlimited Access",
      line3 : "No Food"
    },
    {
      heading : "Premium",
      line1 : "20 Lakhs",
      line2 : "Ulimited Access",
      line3 : "Food"
    },
  ]
  return (
    <>
    <h1 className='heading'>Pricing</h1>
    <section className="cards">
          {cards.map((item)=>{
            const {heading, line1, line2, line3 } = item;
            return(
              <SetCard heading={heading} line1={line1} line2={line2} line3={line3}/>
            )
          })}
    </section>
    </>
  )
}

export default Card