# nm8
Ridiculously small animation library. Less than 260 bytes. Fits in a tweet.

# Usage
- `npm install nm8 --save`
- Or get it from https://unpkg.com/nm8: 

```html
<script src="https://unpkg.com/nm8"></script>
```

```js
import nm8 from 'nm8';

const output = value => console.log(value);

// create animation
const animation = nm8(output, 1000);

// play animation
animation.play();

// pause animation
animation.pause();

// stop animation
animation.stop();
```

# API
## `nm8(onTick: (value: number) => void, duration?: number)`

Creates an animation that calls `onTick` with the current:
- `offset` (between 0 and 1) if `duration` is specified
- `delta` (in ms) if no `duration` is specified. Usually `16` or `17`.

## `animation.play()`

Starts playing the animation, because the animation doesn't just fire off immediately. That's irresponsible.

## `animation.pause()`

Pauses the animation. The `onTick` handler won't be called again until `.play()` or `.stop()` is called.

## `animation.stop()`

Stops the animation. The `onTick` handler will be called with the end value (either `1` if `duration` is specified or `Infinity` otherwise). Calling `.play()` on a stopped animation will restart it.

# FAQs

**How do I actually make stuff move?**

```js
const ball = document.querySelector('#ball');

const animation = nm8(offset => {
  // moves ball from 0 to 1000px over 1 second
  ball.style.transform = `translateX(${offset * 1000}px)`
}, 1000).play();
```

**What about easing?**

```js
// use sine easing, it's really nice
const easeSine = fn => offset => fn((1 - Math.cos(offset * Math.PI)) / 2);

const animation = nm8(easeSine(offset => {
  ball.style.transform = `translateX(${offset * 1000}px)`
}), 1000).play();
```

**What about delays?**

```js
// just copy-paste this. it's math
const delayNm8 = (fn, duration, delay) => nm8(delayOffset => {
  const offset = Math.max(delayOffset - delay / (duration + delay), 0) * (duration + delay) / duration;
  fn(offset);
}, duration + delay);

// 1-second ease animation with 2-second delay
const animation = delayNm8(easeSine(offset => {
  ball.style.transform = `translateX(${offset * 1000}px)`
}), 1000, 2000).play();
```

**I want more easing functions.**

Here's a bunch: https://github.com/just-animate/just-curves

**Can I request a feature?**

No. Use https://github.com/tweenrex/tweenrex if you want a small tweening library with more features.

**What is the browser support?**

Just avoid IE, okay?

**Why is it so small?**

So you can copy-paste it:

```js
function nm8(a,b){let c,d,e,f=(g)=>{let h=+!c||-(d||g)+(d=g);a(b?Math.min(Math.max((e+=h)/b,0),1):h);return!c||e>=b||requestAnimationFrame(f)},g={play:()=>(c=1,b&&e<=b||(e=0),f(performance.now()),g),pause:()=>(c=0,g),stop:()=>(e=d=c=0,g)};return g}
```

**Have examples?**
Check out the examples directory: https://github.com/davidkpiano/nm8/blob/master/examples
