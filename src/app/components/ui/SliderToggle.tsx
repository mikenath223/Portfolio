import Image from "next/image";

interface ISliderToggleProps {
  isDarkMode: boolean;
}

export const SliderToggle = ({ isDarkMode }: ISliderToggleProps) => {
  return (
    <div className="slider round">
      <div className="slider-toggle flex justify-center items-center absolute">
        {isDarkMode ? (
          <Image
            src={"/images/night.png"}
            alt="..."
            fill
            priority
            sizes="100%"
          />
        ) : (
          <Image src={"/images/sun.png"} alt="..." fill priority sizes="100%" />
        )}
      </div>
    </div>
  );
};
