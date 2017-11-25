import assert from 'assert'
import nm8 from '../src/nm8'

/**
 * Dummy test
 */
describe('nm8', () => {
  beforeAll(() => {
    global['performance'] = Date
    global['requestAnimationFrame'] = (fn: Function) => {
      setTimeout(() => {
        fn(performance.now())
      }, 16.66666)
    }
  })

  it('plays to the duration if specified', done => {
    let last = 0
    const tween = nm8(o => (last = o), 300)

    tween.play()

    setTimeout(() => {
      assert.equal(last, 1)
      done()
    }, 350)
  })

  it('plays for no particular duration if not specified', done => {
    let cycles = 0
    const tween = nm8(o => {
      if (++cycles === 10) {
        done()
      }
    })

    tween.play()
  })

  it('pauses an active timeline', done => {
    let cycles = 0
    const tween = nm8(o => {
      ++cycles
    })

    tween.play()

    setTimeout(() => {
      tween.pause()
      setTimeout(() => {
        assert.equal(cycles >= 1, true)
        assert.equal(cycles < 3, true)
        done()
      })
    }, 17)
  })
})
