export enum LessonType {
  Done,
  Current,
  Lock,
}

export type Lesson = {
  imgSrc: string
  lessonType: LessonType
  title: string
  time: number
  point: number
  bonus?: string
}

type Props = {
  lesson: Lesson
}

export const LessonItem = ({ lesson }: Props) => {
  const isCurrent = lesson.lessonType === LessonType.Current
  const isLock = lesson.lessonType === LessonType.Lock
  const isDone = lesson.lessonType === LessonType.Done

  return (
    <div className="relative z-10 flex w-full items-center justify-between pb-4">
      <div className="flex w-[141px] justify-center">
        <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white ${isCurrent ? 'h-[141px] w-[141px] border-2 border-color-violet' : 'h-[105px] w-[105px]'}`}>
          <img className={`block h-auto w-full ${isCurrent ? 'max-w-[127px]' : 'max-w-[105px]'}`} src={lesson.imgSrc} alt="title" />
          {isDone && <div className="absolute left-0 top-0 h-full w-full bg-[url('assets/images/icon/i-check-2.svg')] bg-[length:auto_23px] bg-center bg-no-repeat" />}
          {isLock && <div className="absolute left-0 top-0 h-full w-full bg-[url('assets/images/icon/i-lock.svg')] bg-[length:auto_36px] bg-center bg-no-repeat" />}
        </div>
      </div>

      <div className="w-[calc(100%-157px)] space-y-2 font-['Proxima_Nova']">
        <div className="text-ma-base-semibold">{lesson.title}</div>
        <div className="bg-[url('assets/images/icon/i-play.svg')] bg-[length:auto_19px] bg-[center_left] bg-no-repeat pl-6 pt-[1px] text-ma-sm text-ma-gray">{lesson.time} min</div>
        <div className="text-ma-sm font-medium tracking-ma text-ma-pink">
          <p>
            {lesson.point} Heart Beats {lesson.bonus}
          </p>
          {!!lesson.bonus && <p>Journey Bonus Beats</p>}
        </div>
      </div>
    </div>
  )
}
