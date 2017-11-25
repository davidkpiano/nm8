export interface Nm810 {
    play: () => void;
    pause: () => void;
    stop: () => void;
}
export default function nm8(fn: (deltaOrOffset: number) => any, duration?: number): Nm810;
