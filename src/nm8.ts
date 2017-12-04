// Get it? An-im-a-tion?
export interface Nm810 {
  play: () => Nm810
  pause: () => Nm810
  stop: () => Nm810
}

const nm8 = (fn: (deltaOrOffset: number) => any, duration: number): Nm810 => {
  let rate = 0
  let elapsed = 0
  let currentTime: number
  let resetCurrentTime = () => (currentTime = performance.now())
  let tick = () => {
    let delta = -currentTime + resetCurrentTime()
    elapsed += delta
    fn(duration ? elapsed / duration : delta)
    return !rate || elapsed >= +duration || requestAnimationFrame(tick)
  }
  let nm810 = {
    play: () => (
      (rate = 1),
      elapsed >= +duration && (elapsed = 0),
      resetCurrentTime(),
      tick(),
      nm810
    ),
    pause: () => ((rate = 0), nm810),
    stop: () => (
      (elapsed = duration || 1 / 0), resetCurrentTime(), tick(), nm810
    )
  }
  return nm810
}

export default nm8
