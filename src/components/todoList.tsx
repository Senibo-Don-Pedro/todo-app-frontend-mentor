import { Button } from './ui/button'

export function TodoList() {
  return (
    <>
      <div className='mt-5 rounded wrapper bg-custom-VeryDarkBlue '>
        <div className='flex items-center justify-between px-5 py-3 border-b-2 '>
          <div className='flex items-center gap-7'>
            <div className='grid w-10 h-10 border-2 rounded-full place-items-center'>
              <img src='/images/icon-check.svg' />
            </div>
            <p className=''>seiff</p>
          </div>

          <div>
            <img src='/images/icon-cross.svg' />
          </div>
        </div>
        <div className='flex items-center justify-between py-3 pl-7'>
          <p className=''>5 items left</p>
          <Button variant={'none'}>Clear Completed</Button>
        </div>
      </div>
    </>
  )
}
