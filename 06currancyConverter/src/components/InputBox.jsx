import React, {useId} from 'react'
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrancyChange,
    currencyOptions = [],
    selectCurrancy = "usd"
    amountDisabled = false,
    currancyDisabled = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  
                className="text-black/40 mb-2 inline-block">
                {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrancy}
                    onChange={(e) => onCurrancyChange && onAmountChange(e.target.value)}
                    disabled={currancyDisabled}
                >
                    {currencyOptions.map((currancy) => (
                            <option key={currancy} value={currancy}>
                            {currancy}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;