/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICarouselImage, IExampleProps } from "../../interface/ICarrusel";

const items: ICarouselImage[] = [
  {
    src: "https://i.ibb.co/KqB1ZNB/8b09f670bb06f4880977ae33915e258c.jpg",
    title: "X-MEN - AGE OF APOCALYPSE",
    id: 1,
  },
  {
    src: "https://i.ibb.co/7YyGLrG/00dae8ba6a878b72e77bcd522b0292f8.jpg",
    title: "TEAMS",
    id: 2,
  },
  {
    src: "https://i.ibb.co/1dQyb3s/370244e01ef558f5f6bb0bc472e87b43.jpg",
    title: "UNCANNY X-MEN",

    id: 3,
  },
  {
    src: "https://i.ibb.co/vVKP9Q4/3d607081aeccb67fb93212633bab37d8.jpg",
    title: "MARVEL KNIGHTS",
    id: 4,
  },
];

function Example(args: IExampleProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="  "
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        id={item.src}
      >
        <div className="w-full flex flex-col sm:flex-row justify-center items-center  ">
          <img
            src={item.src}
            className="w-72 h-96  lg:w-[300px] lg:h-[450px] xl:w-[450px] xl:h-[650px] p-4 overflow-hidden ShadowEffect rounded-full"
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="w-full sm:w-1/2 "
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        className="hidden"
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        className="hidden"
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
