import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "./MockServer";

// モック検証用の擬似的なサーバーを作成する
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    // モック検証用の擬似的なレスポンス結果を作成
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen()); // 擬似サーバーを起動する

afterEach(() => {
  server.resetHandlers();
  cleanup();
}); // テスト毎にクリーニング
afterAll(() => server.close()); // テスト毎にクリーニング

describe("Mocking API", () => {
  it("[Fetch success] Sholud display fetched data correctly and button disable", async () => {
    render(<MockServer />);

    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument(); // クリック後、指定した要素が出現するか判定
    expect(screen.getByRole("button")).toHaveAttribute("disabled"); // 指定した要素がtrueか判定
  });

  it("[Fetch failure] Should display error msg, no render heading and button abled", async () => {
    // このテスト内でのみ有効な処理
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    render(<MockServer />);

    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetching Failed !"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled"); // 指定した要素がfalseか判定
  });
});
