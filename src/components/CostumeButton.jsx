export const CostumeButton = ({
  text,
  w,
  hg,
  black,
  styles,
  handel,
  submit,
}) => {
  return (
    <>
      <button
        type={submit ? 'submit' : 'button'}
        className={`rounded-2xl bg-black  text-sm cursor-pointer	font-poppins-regular ${styles}`}
        style={{
          width: w,
          height: hg,
          backgroundColor: black ? 'black' : 'white',
          color: black ? 'white' : 'black',
        }}
        onClick={handel}
      >
        {text}
      </button>
    </>
  )
}
export default CostumeButton
