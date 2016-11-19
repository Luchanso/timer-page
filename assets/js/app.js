const MINUTES_15 = 60 * 15 * 1000
const startDate = Date.now()
const timer = document.getElementsByClassName('timer')[0]

function main() {
  let label = document.getElementsByClassName('div-label')[0]
  let y = window.innerHeight / 2 - label.clientHeight
  label.style.top = `${y}px`

  setInterval(tick, 1000)
}

function tick() {
  let time = Math.floor((MINUTES_15 - (Date.now() - startDate)) / 1000)

  if (time < 0) return

  let minutes = Math.floor(time / 60).toString()
  let seconds = Math.floor(time % 60).toString()

  minutes = minutes.length < 2 ? '0' + minutes : minutes
  seconds = seconds.length < 2 ? '0' + seconds : seconds

  timer.textContent = `${minutes}:${seconds}`
}

main()
