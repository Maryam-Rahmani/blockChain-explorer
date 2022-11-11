import React, { useState, useEffect, useRef } from 'react';

const useInterval = (func: any, num: number) => {
  const x = setInterval(func, num)
  return () => {
      clearInterval(x)
  }   
};

export default useInterval;
