import React, { useState } from 'react'

const Faq = () => {
    const data = [
        {
            question: "Question 1",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
        {
            question: "Question 2",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
        {
            question: "Question 3",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
        {
            question: "Question 4",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
        {
            question: "Question 5",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
        {
            question: "Question 6",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur vitae alias amet perspiciatis expedita voluptas, sapiente eius mollitia quasi deserunt dolore? Deleniti nam ratione placeat similique! Quo, atque ullam."
        },
    ]

     const [selected, setSelected] = useState(null);

     const handleSelected =  (i) =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
     }
    return (
        <>
            <h1 className='heading'>FAQ</h1>
            <section className='faq'>
                <div className="item">
                    {data.map((item,i) => {
                        return (
                            <div className='wrapper'>
                                <div className="question" onClick={()=>{handleSelected(i)}}>
                                    <p>{item.question}</p>
                                    <img src={require("../../../assets/arrow.png")} alt="" className={selected===i ? "reverse" : ""}/>
                                </div>
                                <div className={selected === i ? "answer show" : "answer"}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Faq