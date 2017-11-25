# nm8
Ridiculously small animation library. Fits in a tweet.

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
## `nm8(handler: (value: number) => void, duration?: number)`

Creates an animation that calls `handler` with the current:
- `offset` (between 0 and 1) if `duration` is specified
- `delta` (in ms) if no `duration` is specified. Usually `16` or `17`.

## `animation.play()`

Starts the animation, because the animation doesn't just fire off immediately. That's irresponsible.

## `animation.pause()`

Pauses the animation. The `handler` won't be called until `.play()` or `.stop()` is called.

## `animation.stop()`

Stops the animation. The `handler` will be called with the end value (either `duration` or `Infinity`). Calling `.play()` on a stopped animation will restart it.

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
const easeSine = offset => fn => fn(Math.sin(offset * Math.PI / 2));

const animation = nm8(easeSine(offset => {
  ball.style.transform = `translateX(${offset * 1000}px)`
}));
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
const nm8=(a,b)=>{let c,d=0,e=0,f=_=>c=performance.now(),g=_=>{let h=-c+f();return e+=h,a(b?e/b:h),!d||e>=+b||requestAnimationFrame(g)},h={play:_=>(d=1,e>=+b&&(e=0),f(),g(),h),pause:_=>(d=0,h),stop:_=>(e=b||1/0,f(),g(),h)};return h}
```
