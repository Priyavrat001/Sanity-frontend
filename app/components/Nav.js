import Link from 'next/link'
import React from 'react'


export default function Header() {
    return (
        <div>

            <header className="body-font bg-slate-700 text-blue-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl text-blue-500">PriyavratPortfolio</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-300 cursor-pointer :hover font-bold " href='/pagesRoutes/home'>Home</Link>
                        <Link className="mr-5 hover:text-gray-300 cursor-pointer :hover font-bold " href='/pagesRoutes/blogs'>Blogs</Link>
                        <Link className="mr-5 hover:text-gray-300 cursor-pointer :hover font-bold" href='/pagesRoutes/allprojects'>Project</Link>
                        <Link className="mr-5 hover:text-gray-300 cursor-pointer :hover font-bold" href='/pagesRoutes/services'>Services</Link>
                        <Link className="mr-5 hover:text-gray-300  cursor-pointer :hover font-bold" href='/pagesRoutes/contact'>Contact</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}
