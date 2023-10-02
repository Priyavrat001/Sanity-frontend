"use client"
import React from 'react'

const Post = ({ params }) => {
  const { slug } = params
  return (
    <div>Post: {slug}</div>
  )
}

export default Post