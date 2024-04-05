import DividerMobile from "/public/images/pattern-divider-mobile.svg";
import DividerDesktop from "/public/images/pattern-divider-desktop.svg";

const AdviceCard = () => {
  return (
    <div className="w-[90%] mx-auto absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 bg-darkGrayishBlue text-center pt-11 pb-16 px-5 sm:px-10 rounded-lg max-w-lg flex flex-col items-center gap-6">
      <span className="text-neonGreen/70 uppercase text-xs tracking-space sm:text-sm">
        Advice #0
      </span>
      <p className="text-lightCyan text-2xl sm:text-[28px]">
        &#8220;Click on the green button to receive advice.&#8220;
      </p>
      <picture className="sm:pt-4">
        <source media="(min-width: 440px)" srcSet={DividerDesktop} />
        <img src={DividerMobile} alt="" className="" />
      </picture>
    </div>
  );
};

export default AdviceCard;
