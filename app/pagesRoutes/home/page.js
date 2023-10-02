import React from 'react'
import Project from '../projects/page'

const Home = () => {

  return (<>
    <div className='container flex flex-row-reverse'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi My name is Priyavrat and i am a
              <br className="hidden lg:inline-block" />FullStack Developer
            </h1>
            <p className="mb-8 leading-relaxed">UI/UX Developer with responsive design and development and good knowldge of backend launguage like python and javascript.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-00 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-slate-700 btn-sm">Download CV</button>
              <a target='_blank' rel='nore' href="https://github.com/Priyavrat001"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg btn-sm">Visit Github</button></a>
            </div>
          </div>
          <div className="images lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=" />
          </div>
        </div>
      </section>
    </div>
    <Project/>
  </>
  )
}
export default Home