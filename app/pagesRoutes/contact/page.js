import React from 'react'

export default function Contact() {
  const profile = {
    fb:"https://www.facebook.com/profile.php?id=100006660876418",
    linkdin:"https://www.linkedin.com/in/priyavrat-kumar-08660b226/",
    insta:"https://www.instagram.com/priyevratsharma/",

  }
    return (<>
     <div className="container flex justify-center align-center flex-col my-20 mx-auto py-5 text-center bg-gray-200 w-3/4 bd-radius h-96">
      <h1 className='my-10 text-5xl'>Feel free to contact me!</h1>
      <img className='w-28 txt-center m-auto photo' src="/image/dev.jpg" alt="developer image" />
      <span className="inline-flex justify-center">
      <a href={profile.fb} target='_blank' rel='norep' className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href={profile.insta} target='_blank' rel='norep' className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href={profile.linkdin} target='_blank' rel='norep' className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
     </div>
    </>
    )
}