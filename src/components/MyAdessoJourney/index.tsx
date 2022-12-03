import { useMemo, useState } from 'react'
import { WrapperCommon, SectionCommon } from '../Common'
import { LessonItem, LessonType, Lesson } from './Lesson'

const dummyLessons: Lesson[] = [
  {
    imgSrc: '/images/my-adresso-journey/lesson-01.png',
    lessonType: LessonType.Done,
    title: 'Living From Your Heart',
    time: 8,
    point: 20,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-02.png',
    lessonType: LessonType.Done,
    title: 'Living From Your Heart',
    time: 8,
    point: 20,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-01.png',
    lessonType: LessonType.Current,
    title: 'Living From Your Heart',
    time: 8,
    point: 20,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-02.png',
    lessonType: LessonType.Lock,
    title: 'Living From Your Heart',
    time: 8,
    point: 20,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-01.png',
    lessonType: LessonType.Lock,
    title: 'Relate: People, Passion, and Purpose',
    time: 8,
    point: 10,
    bonus: '+25 Half',
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-02.png',
    lessonType: LessonType.Lock,
    title: 'Know Your Heart',
    time: 8,
    point: 10,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-01.png',
    lessonType: LessonType.Lock,
    title: 'Advocate: Your Medical Care, Your Heart, Your Life',
    time: 8,
    point: 10,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-02.png',
    lessonType: LessonType.Lock,
    title: 'Know Your Numbers',
    time: 8,
    point: 10,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-01.png',
    lessonType: LessonType.Lock,
    title: 'Balance: Hormones and Your Heart',
    time: 8,
    point: 10,
  },
  {
    imgSrc: '/images/my-adresso-journey/lesson-02.png',
    lessonType: LessonType.Lock,
    title: 'Next Steps, success, pass it on',
    time: 8,
    point: 10,
    bonus: '+50 Completed',
  },
]

export const MyAdessoJourneyContent = () => {
  const [dataLessons, setDataLessons] = useState<Lesson[]>(dummyLessons)

  const indexCurrentLesson = dataLessons.findIndex((lesson) => lesson.lessonType === LessonType.Current)
  const percentProcess = ((indexCurrentLesson + 1) / dataLessons.length) * 100

  const myAdessoJourneyContent = useMemo(() => {
    return (
      <WrapperCommon className="space-y-4">
        <SectionCommon className="space-y-4" title="My Adesso Journey">
          <div className="relative">
            <div className="absolute left-[70px] top-0 z-[1] h-[calc(100%-16px)] w-[3px] bg-color-add-goal-secondary" />
            <div className={`absolute left-[70px] top-0 z-[2] w-[3px] bg-color-violet`} style={{ height: `calc(${percentProcess}% - 70px)` }} />

            {dataLessons.map((lesson, key) => {
              return <LessonItem key={key} lesson={lesson} />
            })}
          </div>
        </SectionCommon>
      </WrapperCommon>
    )
  }, [dataLessons])

  return <>{myAdessoJourneyContent}</>
}
