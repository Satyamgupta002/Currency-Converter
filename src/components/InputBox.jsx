import React, {useId} from 'react'


function InputBox({
    label,
    inputLabel,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencydDisable = false,
    
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 bg-opacity-50 border-2 border-white rounded-lg text-sm flex ${className}` }>
            <div className="w-1/2">
                <label  
                    htmlFor={amountInputId}
                    className="text-black font-bold mb-2 inline-block">
                    {inputLabel}
                </label>
                <input
                    id={amountInputId}
                    className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-full bg-transparent py-1.5 placeholder-black"
                    type="number"
                    placeholder="Enter Amount..."
                    disabled={amountDisable}
                    defaultValue={amount} 
                    value={amount}
                    onFocus={e => e.target.value = ''}
                    onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black font-bold mb-2 w-full">{label} Currency</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 hover:bg-gray-300 cursor-pointer outline-none border-black border-2"
                    value={selectCurrency}
                    onChange={(e) =>onCurrencyChange&&onCurrencyChange(e.target.value)}
                    disabled={currencydDisable}
                >
                
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
