import React from 'react';
import client, { urlFor } from '@/app/components/client';
import { PortableText } from '@portabletext/react';

const Post = async ({ params }) => {
  const { slug } = params
  let query = `*[_type == "blog" && slug.current == '${slug}']{content, title,  blogimage}[0]`;
  const blog = await client.fetch(query);
  return (<>
    <div className="blog-content max-widh-1 m-auto my-2 ">
        <h1 className="font1 text-3xl my-3 text-blue-800">{blog.title}</h1>
        <div className="blogpost-meta">
            <div className="authour-info">
                <div>
                    <b>
                        <a href="index.html">
                            Authour - Priyavrat
                    </a>
                    </b>
                </div>
                <div>
                    {blog.createdAt}
                </div>
            </div>
        </div>
        <PortableText
        value={blog.content}
        />
    </div>
  </>
  )
}

export default Post