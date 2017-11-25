export default function nm8(fn, duration) {
    let rate;
    let currentTime;
    let elapsed;
    let tick = (timeStamp) => {
        let delta = +!rate || -(currentTime || timeStamp) + (currentTime = timeStamp);
        fn(duration ? Math.min(Math.max((elapsed += delta) / duration, 0), 1) : delta);
        return !rate || elapsed >= duration || requestAnimationFrame(tick);
    };
    let nm810 = {
        play: () => ((rate = 1),
            (duration && elapsed <= duration) || (elapsed = 0),
            tick(performance.now()),
            nm810),
        pause: () => ((rate = 0), nm810),
        stop: () => ((elapsed = currentTime = rate = 0), nm810)
    };
    return nm810;
}
//# sourceMappingURL=nm8.js.map