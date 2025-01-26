interface PropsType {
  date: number
  week: number
  month: number
  year: number
}

const today = new Date()

const Day = ({ date, week, month, year }: PropsType) => {
  const isToday =
    today.getFullYear() === year && today.getMonth() === month - 1 && today.getDate() === date
  return (
    <div
      className={`${isToday ? 'bg-[#FF8A3D]' : ''} ${(week === 0 && date >= 23) || (week >= 3 && date <= 6) ? 'text-[#a1a1aa]' : ''} flex items-center justify-center w-10 h-10 rounded-md`}
    >
      {date}
    </div>
  )
}

export default Day
