type Observer<E> = (event: E) => unknown;

export class Observable<E> {
  private observers: Observer<E>[] = [];

  constructor() {}

  addObserver = (observer: Observer<E>) => {
    this.observers.push(observer);
  };

  protected notify = (event: E) => {
    this.observers.forEach((o) => o(event));
  };
}
