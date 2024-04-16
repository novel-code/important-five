import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(function () {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    return JSON.parse(data);
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );

  return [state, setState];
}
