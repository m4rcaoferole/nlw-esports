
export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)
  // 18:00 -> ["18", "00"] -> [18, 00]

  const minutesAmount = (hours * 60) + minutes;
  
  return minutesAmount
}