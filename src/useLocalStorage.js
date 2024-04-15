import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(function () {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    return JSON.parse(data);
  });

  return [state, setState];
}
