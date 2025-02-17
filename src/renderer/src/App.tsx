import { Logo } from './assets'
import Day from './components/day'
import { changeDate } from './function/getCalendar'
import { useEffect, useState } from 'react'

const DayOfTheWeek = ['월', '화', '수', '목', '금', '토', '일']
const Example = ['다문화 이해 교육', '모의 토익', '기말고사']
const today = new Date()

function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  const calendar = [today.getFullYear(), today.getMonth() + 1]
  const calendarData = changeDate(calendar[0], calendar[1])

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerHeight > 720 && window.innerWidth > 1080)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex">
      {showSidebar && (
        <div className="flex flex-col h-screen p-10 text-white bg-custom-bg w-fit min-w-[450px]">
          <Logo />
          <div className="flex flex-col gap-2 mt-16">
            <span className="text-lg">오늘의 명언</span>
            <h3 className="text-4xl font-semibold">
              삶이 있는 한<br /> 희망은 있다 - 키케로
            </h3>
          </div>
          <div className="flex flex-col mt-12">
            <span className="text-2xl font-semibold">{`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`}</span>
            <div className="flex justify-between w-full mt-3">
              {DayOfTheWeek.map((day) => (
                <div className="flex items-center justify-center w-9 h-9">{day}</div>
              ))}
            </div>
            <div className="flex flex-col justify-between w-full h-full bg-transparent/5">
              {calendarData.map((week, i) => (
                <div className="flex justify-between" key={i}>
                  {week.map((date, j) => (
                    <Day date={date} week={i} key={j} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4 overflow-y-scroll scrollbar-none">
            {Example.map((schedule) => (
              <div className="flex items-center gap-2">
                <div className="bg-[#ff8a3d] w-2 h-2 rounded-full"></div>
                <div>{schedule}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-full"></div>
    </div>
  )
}

export default App
