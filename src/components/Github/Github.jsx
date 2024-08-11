import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 text-black p-4 text-3xl font-mono'>
        {data.login}<br />
    <img src={data.avatar_url} alt="avatar" className='rounded-full w-32 h-32 m-4' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/mounishvatti')
    return res.json()
}