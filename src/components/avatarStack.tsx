import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function AvatarStack({
  people: people,
}: {
  people: {
    id: number
    anonymous_id: string
    display_name: string
    avatar_image_url: string
    html_url: URL
    pronouns: any
  }[]
}) {
  return (
    <div className={'flex flex-row mt-2 w-[' + people?.length * 5 + 5 + 'px]'}>
      {people?.map((teacher, index) => {
        if (index <= 2)
          return (
            <div key={index} className='ml-[-10px] translate-x-[10px]'>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar
                    className={`z-[${
                      index + 1
                    }] bg-secondary aspect-square w-7 h-7 border-[1px] border-solid`}
                  >
                    <AvatarImage src={teacher?.avatar_image_url} />
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {teacher?.display_name.split(' ').map(name => {
                    return (
                      name[0].toUpperCase() + name.slice(1).toLowerCase() + ' '
                    )
                  })}
                </TooltipContent>
              </Tooltip>
            </div>
          )
        else if (index === 3)
          return (
            <div key={index} className='ml-[-15px] translate-x-[15px]'>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className='aspect-square w-8 h-8'>
                    <AvatarFallback>+{people?.length - index}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {people?.length - index} more teachers
                </TooltipContent>
              </Tooltip>
            </div>
          )
      })}
    </div>
  )
}
