export interface Nm810 {
    play: () => void;
    pause: () => void;
}
declare const nm8: (fn: (deltaOrOffset: number) => any, duration: number) => Nm810;
export default nm8;
