import { AdviceProvider } from "../context/AdviceContext";
import AdviceCard from "../layout/AdviceCard";

const Page = () => {
  return (
    <AdviceProvider>
      <div className="w-screen min-h-screen bg-darkBlue relative">
        <AdviceCard />
      </div>
    </AdviceProvider>
  );
};

export default Page;
