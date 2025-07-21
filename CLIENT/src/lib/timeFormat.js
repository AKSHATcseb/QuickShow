const timeFormat = (minute) => {
  const hour = Math.floor(minute/60)
  const minRem = minute % 60
  return `${hour}h ${minRem}m`
}

export default timeFormat 