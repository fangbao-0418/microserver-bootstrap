import { InjectConfigProps } from './interface';
export { default as Observer } from './utils/Observer';
declare function start(): void;
declare function bootstrap(config: InjectConfigProps[]): {
    start: typeof start;
};
export default bootstrap;
