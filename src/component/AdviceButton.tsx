import IconDice from "/public/images/icon-dice.svg";

const AdviceButton = () => {
  return (
    <button className="absolute -bottom-7 bg-neonGreen h-14 w-14 rounded-full flex items-center justify-center sm:h-16 sm:w-16 hover:shadow-neonGreen hover:shadow-shadowBtn transition-[.2s]">
      <img src={IconDice} alt="Icon Dice" className="w-5 sm:w-6" />
    </button>
  );
};

export default AdviceButton;
