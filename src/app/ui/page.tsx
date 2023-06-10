import { Input } from '@/src/components/ui/input'
import { Button } from '../../components/ui/button'
import { IconSearch } from '@tabler/icons-react'

export default function UI() {
  return (
    <div>
      <h1>UI</h1>
      <Button variant={'default'}>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'destructive'}>Danger</Button>
      <Button variant={'link'}>Link</Button>
      <br />
      <Button variant={'disabled'}>Save Changes</Button>
      <Button variant={'default'} disabled>
        Primary
      </Button>
      <Button variant={'secondary'} disabled>
        Secondary
      </Button>
      <Button variant={'outline'} disabled>
        Outline
      </Button>
      <Button variant={'ghost'} disabled>
        Ghost
      </Button>
      <Button variant={'destructive'} disabled>
        Danger
      </Button>
      <Button variant={'link'} disabled>
        Link
      </Button>
      <br />
      <Input
        placeholder='Input'
        icon={<IconSearch />}
        className='max-w-[500px]'
      />
    </div>
  )
}
