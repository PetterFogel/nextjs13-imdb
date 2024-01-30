"use client";
import { Settings } from "react-slick";
import { ReactNode, useRef } from "react";
import SliderArrows from "./SliderArrows";
import Slider from "react-slick";

type Props = {
  children: ReactNode;
  settings: Settings;
  noArrows?: boolean;
};

const ItemsSlider = ({ children, settings, noArrows }: Props) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="relative mt-4">
      {!noArrows && <SliderArrows slider={sliderRef} />}
      <Slider ref={sliderRef} {...settings} arrows={false}>
        {children}
      </Slider>
    </div>
  );
};

export default ItemsSlider;
