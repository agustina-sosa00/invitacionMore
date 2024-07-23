export interface ICarouselImage {
  src: string;
  title: string;
  id: number;
}

export interface IExampleProps {
  className?: string;
  activeIndex?: number;
  next?: () => void;
  previous?: () => void;
}
