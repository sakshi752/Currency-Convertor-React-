import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  useEffect(() => {
  if (currencyInfo[to]) {
    convert();
  }
}, [from, to]);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(0)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-gray-700'>
      <div className='w-full max-w-lg mx-auto border border-gray-400 p-5 rounded bg-white/30 backdrop-blur-2xl'>
        <h2 className='flex items-center justify-center mb-4 text-xl font-bold text-white tracking-wider'>Currency Convertor</h2>
        <form action="" onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='mb-1'>
            <InputBox label={"From"} amount={amount}  onAmountChange={(amt) => setAmount(amt)} onCurrencyChange={(curr) => setFrom(curr)} currencyOptions={options} selectedCurrency={from} />
          </div>
          <div className="relative w-full h-0.5">
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-blue-600 text-white rounded-md cursor-pointer' onClick={swap}>Swap</button>
          </div>
          <div className='my-1'>
            <InputBox label={"From"} amount={convertedAmount} convertedAmount={convertedAmount} amountDisable onCurrencyChange={(curr) => setTo(curr)} currencyOptions={options} selectedCurrency={to} />
          </div>
          <button type='submit' className='bg-blue-700 w-full rounded-md py-2 text-white text-lg font-bold cursor-pointer'>Convert {from} to {to}</button>
        </form>

      </div>
    </div>
  )
}

export default App
