import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/7054384/pexels-photo-7054384.jpeg')]">
                <h1 className='text-6xl m-8 font-bold bg-black p-2 pb-[17.5px] px-3 rounded-lg bg-opacity-50 text-white  border-white border-2'>Currency Converter</h1>
                <div className="w-full">
                    <div className="w-full h-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-black bg-opacity-50">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert()

                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}


                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[rgb(20,22,157)] hover:bg-[rgb(23,24,95)] text-white px-2 py-0.5 text-center items-center"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-[rgb(20,22,157)] hover:bg-[rgb(23,24,95)] text-white border-white border-2 px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App
