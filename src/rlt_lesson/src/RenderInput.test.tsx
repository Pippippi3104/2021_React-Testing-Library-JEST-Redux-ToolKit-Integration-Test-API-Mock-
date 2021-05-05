import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";
import { output } from "./App";

interface InputValue extends HTMLElement {
  value: string;
}

afterEach(() => cleanup()); // stateの初期化、テスト間で影響し合うことを防ぐ

// 意図する要素が存在するか検証
describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput outputConsole={output} />);

    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

// 意図する動きをするか検証 (入力フォーム)
describe("Input form onChange event", () => {
  it("Should update input value correctly", () => {
    render(<RenderInput outputConsole={output} />);

    const inputValue = screen.getByPlaceholderText("Enter") as InputValue; // input formを取得
    userEvent.type(inputValue, "test"); // input form に test と入力させる
    expect(inputValue.value).toBe("test");
  });
});

// 意図する動きをするか検証 (クリックイベント)
describe("Console button conditinally triggered", () => {
  // 未入力状態での動作確認
  it("Should not trigger output functions", () => {
    const outputConsole = jest.fn(); // モック関数、ダミーの関数
    render(<RenderInput outputConsole={outputConsole} />);

    userEvent.click(screen.getByRole("button")); // クリックイベント
    expect(outputConsole).not.toHaveBeenCalled(); // 関数が呼び出されていないことを判定
  });

  it("Should trigger output functions", () => {
    // 入力状態での動作確認
    const outputConsole = jest.fn(); // モック関数、ダミーの関数
    render(<RenderInput outputConsole={outputConsole} />);

    const inputValue = screen.getByPlaceholderText("Enter") as InputValue; // input formを取得
    userEvent.type(inputValue, "test"); // input form に test と入力させる
    userEvent.click(screen.getByRole("button")); // クリックイベント
    expect(outputConsole).toHaveBeenCalledTimes(1); // 関数が一回だけ呼び出されていることを判定
  });
});
