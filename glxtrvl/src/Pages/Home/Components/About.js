import React from 'react'

const About = ({heading, image}) => {
  return (
    <>
        <h1 className='heading'>{heading}</h1>
        <section className="about">
            <img src={image} alt="" />
            <div className="content">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae consequatur, libero error ab saepe eos consequuntur voluptatibus est soluta asperiores incidunt delectus officiis aut beatae. Ratione dignissimos delectus illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium, id maiores nulla sed quo sit, aperiam, optio accusantium dolorum vel dolor. Maiores illum omnis odit corrupti, culpa quia unde!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis nulla aut odio nobis ad harum placeat expedita suscipit magni sint, labore autem necessitatibus ullam? Suscipit minus architecto laboriosam at?</p>
            </div>
        </section>
        
    </>
  )
}

export default About