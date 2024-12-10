import { useCheckDarkMode } from "@src/app/hooks/useCheckDarkMode";
import Image from "next/image";

interface ISliderToggleProps {
  children: React.ReactNode;
}

const Toggle = ({ children }: ISliderToggleProps) => {
  return (
    <div className="slider round">
      <div className="slider-toggle flex justify-center items-center absolute">
        {children}
      </div>
    </div>
  );
};

const Icon = () => {
  const { isDarkMode } = useCheckDarkMode();

  return isDarkMode ? (
    <Image src={"/images/night.png"} alt="..." fill priority sizes="100%" />
  ) : (
    <Image src={"/images/sun.png"} alt="..." fill priority sizes="100%" />
  );
};

const Slider = {
  Toggle,
  Icon,
};

export default Slider;
