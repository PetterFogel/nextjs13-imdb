import { RefObject } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Slider from "react-slick";

type Props = {
  slider: RefObject<Slider>;
};

const SliderArrows = ({ slider }: Props) => {
  return (
    <>
      <button
        className="absolute inset-y-1/3 -left-3 z-10 h-12 bg-black opacity-80 hover:opacity-100"
        onClick={() => slider.current && slider.current.slickPrev()}>
        <ChevronLeftIcon className="h-10" />
      </button>
      <button
        className="absolute inset-y-1/3 -right-3 z-10 h-12 bg-black opacity-80 hover:opacity-100"
        onClick={() => slider.current && slider.current.slickNext()}>
        <ChevronRightIcon className="h-10" />
      </button>
    </>
  );
};

export default SliderArrows;
