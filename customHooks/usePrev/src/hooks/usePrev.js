import { useEffect, useRef } from "react";

/* 1. this declare a custom hook named "usePrev"
2. it take a single parameter : 'value' - which can be any value you want to track.
3. The goal is to return the previous value before the current render. */
export const usePrev = (value) => {
  /* 1. THIS CREATE A REF OBJECT (REF) WITH THE INITIAL VALUE 'UNDEFINED' 
    2. ref persist across render and don't trigger re-render when updated.*/
  const ref = useRef();
  /* => this runs everytime your component using this hook re-render.
    => useful for seeing when why a render is trigger. */
  console.log("re-render happned with new value" + value);

  /* 1. "useEffect" runs after the component renders and the DOM is updated.

    2"ref.current = value" saves the current value to the ref, but this update is after the render, 
         so the previous value remains available during this render.

 3.The "[value]"" dependency array ensures this runs only when value changes.

 => So, the first time it runs, ref.current is undefined. On the next render, 
    ref.current still holds the previous value before it gets updated inside the effect. */
  useEffect(() => {
    console.log("updated the ref to be " + value);
    ref.current = value; //1
  }, [value]);

  
  /* 1. Logs the current value of "ref.current" (which is the previous value of value).
 2. Returns "ref.current", which is the previous value before the effect updates it. */
  console.log("returned " + ref.current);
  return ref.current; // undefined
};

 // ------------------------------------------------ //
/* The usePrevious hook is a very useful hook that stores the previous state or props. 
It's a custom hook that takes a value and returns the previous value. 
It uses the useRef() hook to create a ref for the value and the useEffect() hook to remember the latest value. */
