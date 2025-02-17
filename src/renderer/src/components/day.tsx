interface PropsType {
  date: number
  week: number
}

const today = new Date()

const Day = ({ date, week }: PropsType) => {
  const isToday = () => {
    if (today.getDate() === date) {
      if (week > 0 && week < 2) return true
      if ((week === 0 && date <= 20) || (week >= 3 && date >= 10)) {
        return true
      }
      return false
    }
    return false
  }
  return (
    <div
      className={`${isToday() ? 'bg-[#FF8A3D]' : ''} ${(week === 0 && date >= 23) || (week >= 3 && date <= 6) ? 'text-[#a1a1aa]' : ''} flex items-center justify-center w-10 h-10 rounded-md`}
    >
      {date}
    </div>
  )
}

export default Day
