"use client";
import { Settings } from "react-slick";
import { ReactNode, useRef } from "react";
import SliderArrows from "./SliderArrows";
import Slider from "react-slick";

type Props = {
  children: ReactNode;
  settings: Settings;
};

const ItemsSlider = ({ children, settings }: Props) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="relative mt-4">
      <SliderArrows slider={sliderRef} />
      <Slider ref={sliderRef} {...settings} arrows={false}>
        {children}
      </Slider>
    </div>
  );
};

export default ItemsSlider;
