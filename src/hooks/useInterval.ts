const useInterval = (func: Function , num: number) => {
  const intervals = setInterval(func, num)
  return () => {
      clearInterval(intervals)
  }   
};

export default useInterval;
