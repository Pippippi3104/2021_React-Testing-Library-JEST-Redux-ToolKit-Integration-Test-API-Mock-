import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Redux from "./Redux";
import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import customCounterReducer from "../src/features/customCounter/customCounterSlice";

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  // store の作成
  let store: Store<any, AnyAction>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  // レンダリング準備
  it("Should display value with increment by 1 per click", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );

    // case 001
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(String(3));
  });

  // レンダリング準備
  it("Should display value with decrement by 1 per click", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );

    // case 002
    userEvent.click(screen.getByText("-"));
    userEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(String(-2));
  });

  // レンダリング準備
  it("Should display value vwith imcrementByAmount", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );

    // case 003
    userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    userEvent.click(screen.getByText("incrementByAmount"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(String(30));
  });
});
