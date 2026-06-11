import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    convertedAmount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) => {
    const amountInputId = useId();

    return (
        <div className='bg-white p-3 rounded-lg text-sm flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
                <label htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    type="number"
                    placeholder='Amount'
                    name={amountInputId} id={amountInputId}
                    className='rounded-lg px-1 py-1 bg-gray-100 outline-none'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className='flex flex-col w-1/2 gap-3'>
                <label htmlFor="" className='flex justify-end text-black/70'>Currency Type</label>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map(curr=>(
                        <option key={curr} value={curr}>{curr}</option>
                    ))}
                </select>
            </div>
        </div>

    )
}

export default InputBox
