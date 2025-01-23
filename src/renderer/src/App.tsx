import { Arrow, Logo } from './assets'
import Day from './components/day'
import { changeDate } from './function/getCalendar'

const DayOfTheWeek = ['월', '화', '수', '목', '금', '토', '일']

function App() {
  const calendar = [new Date().getFullYear(), new Date().getMonth() + 1]
  const calendarData = changeDate(calendar[0], calendar[1])
  return (
    <>
      <div className="flex flex-col h-screen p-10 text-white bg-custom-bg w-fit">
        <Logo />
        <div>
          <span className="text-lg">오늘의 명언</span>
          <h3 className="text-4xl font-semibold">
            삶이 있는 한<br /> 희망은 있다 - 키케로
          </h3>
        </div>
        <div className="flex flex-col mt-12">
          <div className="flex justify-between">
            <span className="text-2xl font-semibold">2025년 1월 16일</span>
            <div className="flex">
              <Arrow direction="top" />
              <Arrow direction="bottom" />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            {DayOfTheWeek.map((day) => (
              <div className="flex items-center justify-center w-9 h-9">{day}</div>
            ))}
          </div>
          <div className="flex flex-col justify-between w-full max-h-[400px] h-full bg-transparent/5">
            {calendarData.map((week, i) => (
              <div className="flex justify-between" key={i}>
                {week.map((date, j) => (
                  <Day date={date} week={i} key={j} month={calendar[1]} year={calendar[0]} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default App
