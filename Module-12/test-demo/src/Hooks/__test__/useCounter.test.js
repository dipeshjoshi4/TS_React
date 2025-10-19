import { renderHook } from "@testing-library/react";
import { useCounter } from "../useCounter";
import { act } from "react";

describe("useCounter custom hook", () => {
  test("should initiaze with default value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  test("should initiaze with Provided value", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
  test("should increment by one", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });

  test("should decrement by one", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });
  test("should reset the form", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
