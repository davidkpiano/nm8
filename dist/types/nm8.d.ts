export interface Nm810 {
    play: () => Nm810;
    pause: () => Nm810;
    stop: () => Nm810;
}
export default function nm8(fn: (deltaOrOffset: number) => any, duration?: number): Nm810;
