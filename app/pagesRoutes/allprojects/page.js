import Link from 'next/link';
import React from 'react';
import client, { urlFor } from '@/app/components/client';

const Allproject = async ({setProgress}) => {
  let query = `*[_type == "project"]`;
  const data = await client.fetch(query);
  
  return (
    < div >
      <h1 className="text-blue-800 text-5xl text-center my-3">Here is my all Projects</h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((e) => (
                <div className="p-4 md:w-1/3" key={e._id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img lazyloading="true"
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={urlFor(e.image).url() || "/assets/img/post-01.png"}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {e.projectTitle}
                      </h1>
                      <p className="leading-relaxed mb-3">{e.desc}</p>
                      <div className="flex items-center flex-wrap">
                        <Link href={e.url} className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                          Live Demo
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
export default Allproject