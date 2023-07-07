import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts' className='w-full h-screen bg-[#162554] flex justify-center items-center p-4'>
        <form method='POST'action="https://getform.io/f/5f9c5e03-7c1f-422c-bec1-74a239d79fb2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-xl py-6 text-yellow-400'>For further discussions, either submit the form or send an email to himakarananthasetty@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message"  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 mx-auto my-8 px-4 py-3 items-center rounded-md'>Lets connect!</button>

        </form>
    </div>
  )
}

export default Contacts