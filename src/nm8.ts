// Get it? An-im-a-tion?
export interface Nm810 {
  play: () => void
  pause: () => void
  stop: () => void
}

export default function nm8(
  fn: (deltaOrOffset: number) => any,
  duration?: number
): Nm810 {
  let rate: number
  let currentTime: number
  let elapsed: number

  let tick = (timeStamp: number) => {
    let delta =
      +!rate || -(currentTime || timeStamp) + (currentTime = timeStamp)
    fn(
      duration ? Math.min(Math.max((elapsed += delta) / duration, 0), 1) : delta
    )
    return !rate || elapsed >= duration! || requestAnimationFrame(tick)
  }
  let nm810 = {
    play: () => (
      (rate = 1),
      (duration && elapsed <= duration!) || (elapsed = 0),
      tick(performance.now()),
      nm810
    ),
    pause: () => ((rate = 0), nm810),
    stop: () => ((elapsed = currentTime = rate = 0), nm810)
  }
  return nm810
}
