import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <h1 className='font-medium text-2xl font-outfit pl-10' >{text1} 
        <span className="underline text-[#F84565]">{text2}</span>
        </h1>
    )
}

export default Title
