import Link from 'next/link';
import React from 'react';
import client, { urlFor } from '@/app/components/client';

const page = async () => {
  let query = `*[_type == "blog"]`;
  const data = await client.fetch(query);
  console.log(data)
  return (
    <>
      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-blue-800 sm:text-5xl lg:text-6xl"
          >
            I also like to write
          </h2>
          <h4
            className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
          >
            Check out my latest posts!
          </h4>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {data.map((e) => (
                  <div className="p-4 md:w-1/3" key={e._id}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img lazyloading="true"
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={urlFor(e.blogimage).url() || "/assets/img/post-01.png"}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {e.title}
                        </h1>
                        <p className="leading-relaxed mb-3">{e.metadesc}</p>
                        <div className="flex items-center flex-wrap">
                          <Link href={`/pagesRoutes/dynamicRoute/` + e.slug.current}  className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                            Read More
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
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
