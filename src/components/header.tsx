import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <>
      <div className=' wrapper'>
        <div className='flex items-center justify-between mt-5 sm:mt-14'>
          <h1 className='relative text-3xl font-semibold tracking-[0.3em] text-custom-VeryLightGray top-1 '>
            TODO
          </h1>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}
