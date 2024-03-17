import React, {useState} from 'react'

const CheckBox = ({setChecked, value, cheCkedValue}) => {
  const [boxChecked, setBoxChecked] = useState(cheCkedValue === value ? true : false)
    const handleCheckBox = () => {
      setBoxChecked(!boxChecked)
      setChecked(value)
    }

  return (
    <div className='border flex items-center justify-center border-neutral-500 w-4 h-4 rounded-full' onClick={handleCheckBox}>
        {boxChecked && ( cheCkedValue === value ) ? <div className='bg-shades-black p-1 rounded-full'/> : null}
    </div>
  )
}

export default CheckBox