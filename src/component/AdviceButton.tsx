import { useContext, useState } from "react";
import IconDice from "/public/images/icon-dice.svg";
import { AdviceContext } from "../context/AdviceContext";
import { getAdvice } from "../service/getAdvice";

const AdviceButton = () => {
  const { setAdviceData } = useContext(AdviceContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await getAdvice();
      const { id, advice } = res.slip;

      setAdviceData({ id: id, advice: advice });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <button
      className={`${
        isLoading ? "hidden" : "block"
      } absolute -bottom-7 bg-neonGreen h-14 w-14 rounded-full flex items-center justify-center sm:h-16 sm:w-16 hover:shadow-neonGreen hover:shadow-shadowBtn transition-[.2s]`}
      onClick={handleClick}
    >
      <img src={IconDice} alt="Icon Dice" className="w-5 sm:w-6" />
    </button>
  );
};

export default AdviceButton;
