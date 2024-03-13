

const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 '>
{label}
<img src={iconURL} alt="arrow right" 
className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button