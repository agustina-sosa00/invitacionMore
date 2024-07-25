import { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICarouselImage, IExampleProps } from "../../interface/ICarrusel";

const items: ICarouselImage[] = [
  {
    src: "https://i.ibb.co/C616Y2v/image2.jpg",
    id: 1,
  },
  {
    src: "https://i.ibb.co/BrYJMyd/image3.jpg",
    id: 2,
  },
  {
    src: "https://i.ibb.co/5kv4My1/Imagen-de-Whats-App-2024-07-24-a-las-13-47-Photoroom-1.jpg",
    id: 3,
  },
  {
    src: "https://i.ibb.co/nszhSbC/Imagen-de-Whats-App-2024-07-24-a-las-13-47-Photoroom.jpg",
    id: 4,
  },
  {
    src: "https://i.ibb.co/4P73DcP/image1.jpg",
    id: 5,
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
            className="w-72 h-96  lg:w-[300px] lg:h-[450px] xl:w-[450px] xl:h-[650px] p-4 overflow-hidden ShadowEffect redondo mb-3"
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="w-full sm:w-2/3   "
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        className=" bg-violetaOscuro mt-2 "
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
}

export default Example;
