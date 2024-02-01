export function ThemeContainer() {
  return (
    <>
      <div className='absolute top-0 left-0 hidden dark:block -z-50'>
        <img
          src='images/bg-mobile-dark.jpg'
          className='w-screen mobile:hidden '
        />
        <img
          src='images/bg-desktop-dark.jpg'
          className='hidden w-screen mobile:block '
        />
      </div>
      <div className='absolute top-0 left-0 dark:hidden -z-50'>
        <img
          src='images/bg-mobile-light.jpg'
          className='w-screen mobile:hidden '
        />
        <img
          src='images/bg-desktop-light.jpg'
          className='hidden w-screen mobile:block '
        />
      </div>
    </>
  )
}
