import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <Button
        className='p-0 m-0 text-white dark:hidden'
        variant={'none'}
        onClick={() => setTheme('dark')}
      >
        <Moon />
      </Button>
      <Button
        className='hidden p-0 m-0 dark:block '
        variant={'none'}
        onClick={() => setTheme('light')}
      >
        <Sun />
      </Button>
    </>
  )
}
