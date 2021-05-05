import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

// Testの名前をつける
describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />); // コンポーネントの取得

    // screen.debug(); // 取得した内容を見る
    // screen.debug(screen.getByRole("heading")); // h1の内容を見る
    // screen.debug(screen.getByText("Udemy")); // 指定した文字列を検索する

    expect(screen.getByRole("heading")).toBeTruthy(); // 指定した要素が存在しているかを判定
    expect(screen.getByRole("textbox")).toBeTruthy(); // 指定した要素が存在しているかを判定
    expect(screen.getAllByRole("button")[0]).toBeTruthy(); // 指定した要素が存在しているかを判定
    expect(screen.getAllByRole("button")[1]).toBeTruthy(); // 指定した要素が存在しているかを判定
    expect(screen.getByText("Udemy")).toBeTruthy(); // 指定した要素が存在しているかを判定
    expect(screen.getByTestId("copyright")).toBeTruthy(); // 指定した要素が存在しているかを判定

    expect(screen.queryByText("Udeeemy")).toBeNull(); // 指定した要素が存在していないことを判定
  });
});
