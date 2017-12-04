export interface Nm810 {
    play: () => Nm810;
    pause: () => Nm810;
    stop: () => Nm810;
}
declare const nm8: (fn: (deltaOrOffset: number) => any, duration: number) => Nm810;
export default nm8;
