import { changeDate } from '@renderer/function/getCalendar'
import { DayOfTheWeek } from '@renderer/types/enum'
import { useState } from 'react'

interface PropsType {
  year: number
  month: number
}

const Calendar = ({ year, month }: PropsType) => {
  const weeks = changeDate(year, month)
  const weekCount = weeks.length
  const [selectDay, setSelectDay] = useState(new Date().getDate())

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        {DayOfTheWeek.map((el) => (
          <div className="flex-1 p-3 text-center">{`${el}요일`}</div>
        ))}
      </div>
      <div
        className="flex-1"
        style={{ display: 'grid', gridTemplateRows: `repeat(${weekCount}, 1fr)` }}
      >
        {weeks.map((week, i) => (
          <div className="grid h-full grid-cols-7" key={i}>
            {week.map((date, j) => {
              const isNowMonth = !((i === 0 && date >= 23) || (i >= 3 && date <= 6))
              return (
                <div
                  className={`${isNowMonth ? '' : 'text-[#a1a1aa]'} ${isNowMonth && date === selectDay ? 'text-[#ff8a3d] bg-[#fff3ec]' : ''} flex px-3 py-3 border-y`}
                  key={j}
                  onClick={() => setSelectDay(date)}
                >
                  {date}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
