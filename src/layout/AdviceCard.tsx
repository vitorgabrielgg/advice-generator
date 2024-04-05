import DividerMobile from "/public/images/pattern-divider-mobile.svg";
import DividerDesktop from "/public/images/pattern-divider-desktop.svg";
import AdviceButton from "../component/AdviceButton";
import { useContext } from "react";
import { AdviceContext } from "../context/AdviceContext";

const AdviceCard = () => {
  const { adviceData } = useContext(AdviceContext);
  return (
    <div className="w-[90%] mx-auto absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 bg-darkGrayishBlue text-center pt-11 pb-16 px-5 sm:px-10 rounded-lg max-w-lg flex flex-col items-center gap-6">
      <span className="text-neonGreen/70 uppercase text-xs tracking-space sm:text-sm">
        Advice #{adviceData.id}
      </span>
      <p className="text-lightCyan text-2xl sm:text-[28px]">
        &#8220;{adviceData.advice}&#8220;
      </p>
      <picture className="sm:pt-4">
        <source media="(min-width: 440px)" srcSet={DividerDesktop} />
        <img src={DividerMobile} alt="Divider" />
      </picture>
      <AdviceButton />
    </div>
  );
};

export default AdviceCard;
