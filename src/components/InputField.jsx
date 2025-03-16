import React from 'react'

const InputField = ({ type, styles, placeholder, value, setValue }) => {
  return (
    <input
      type={type}
      className={styles}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
    />
  )
}

export default React.memo(InputField)
