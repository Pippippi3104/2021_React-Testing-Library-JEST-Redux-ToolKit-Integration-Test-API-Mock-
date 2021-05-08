import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

describe("useCounter custom Hook", () => {
  it("Should increment by 1", () => {
    // init
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    // case 001
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(4);
  });

  it("Should decrement by 1", () => {
    // init
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    // case 002
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(2);
  });

  it("Should double by counter value", () => {
    // init
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    // case 003
    act(() => {
      result.current.double();
    });
    expect(result.current.count).toBe(6);
  });

  it("Should triple by counter value", () => {
    // init
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    // case 004
    act(() => {
      result.current.triple();
    });
    expect(result.current.count).toBe(9);
  });

  it("Should reset to zero", () => {
    // init
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    // case 005
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
