export const secToHMS = time => {
  const hrs = ~~(time / 3600)
  const mins = ~~((time % 3600) / 60)
  const secs = ~~time % 60

  let ret = ""
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "")
  ret += "" + secs
  return ret
}

export const getAttr = linkName => {
  const linkSplit = linkName[0]?.split("~")
  const len = linkSplit?.length
  if (len !== 1 && len !== undefined) return JSON.parse(linkSplit[1])
}

export const getLink = linkName => {
  const linkSplit = linkName[0]?.split("~")
  const len = linkSplit?.length
  if (len !== 1 && len !== undefined) return linkSplit[0]
  else return linkName
}

export const convertCurrency = labelValue => {
  return Math.abs(labelValue) >= 1.0e9
    ? "$" + Math.round((Math.abs(labelValue) / 1.0e9) * 10) / 10 + "B"
    : Math.abs(labelValue) >= 1.0e6
    ? "$" + Math.round((Math.abs(labelValue) / 1.0e6) * 10) / 10 + "M"
    : Math.abs(labelValue) >= 1.0e3
    ? "$" + Math.round((Math.abs(labelValue) / 1.0e3) * 10) / 10 + "K"
    : "$" + Math.abs(labelValue)
}
