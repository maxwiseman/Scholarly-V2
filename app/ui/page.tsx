import { Button } from '../../components/ui/button'

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
    </div>
  )
}