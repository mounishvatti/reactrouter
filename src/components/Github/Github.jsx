import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mounishvatti')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
  return (
    <div className='text-center m-4 text-black p-4 text-3xl font-mono'>
        {data.login}<br />
    <img src={data.avatar_url} alt="avatar" className='rounded-full w-32 h-32 m-4' />
    </div>
  )
}

export default Github