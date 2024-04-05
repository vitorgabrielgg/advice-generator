export const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
