export function InputForm() {
  return (
    <>
      <form className='mt-10 wrapper'>
        <input
          type='text'
          placeholder='Create a new todo . . .'
          className='w-full pl-20 py-4  rounded-md outline-none text-md bg-custom-VeryDarkBlue placeholder:text-custom-DarkGrayishBlue/50 placeholder:relative placeholder:top-0.5 '
        />
      </form>
    </>
  )
}
