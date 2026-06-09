import React from 'react'

const InputBox = () => {
    return (
        <div className='bg-gray-900'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <div>
                    <label htmlFor="">From</label>
                    <input type="number" placeholder='Amount' />
                </div>
                <div>
                    <p>Currency Type</p>
                    {/* <select name="" id="">
            ['usd','inr'].map((currency)=>(
                <option value="">{currency}</option>
            ))
        </select> */}
                </div>
            </div>
        </div>

    )
}

export default InputBox
