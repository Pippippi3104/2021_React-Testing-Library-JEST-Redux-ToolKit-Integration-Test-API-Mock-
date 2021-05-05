import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

const dummyData = [
  { id: 1, item: "React dummy" },
  { id: 2, item: "Angular dummy" },
  { id: 3, item: "Vue dummy" },
];

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    render(<FrameworkList />);

    expect(screen.getByText("No data !")).toBeInTheDocument(); // 指定した要素がドキュメント内に存在するか判定
  });

  it("Should render list item correctly", () => {
    render(<FrameworkList frameworks={dummyData} />);

    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);

    expect(frameworkItems).toEqual(dummyItems); // 指定した要素と要素が等しいか判定
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
