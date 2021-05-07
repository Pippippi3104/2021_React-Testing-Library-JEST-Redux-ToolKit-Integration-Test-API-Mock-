import reducer, {
  fetchDummy,
} from "../src/features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 1,
    username: "",
  };

  // case 001
  it("Should output 100 + payload when fulfiled", () => {
    // fulfilled, payloadを指定する
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);

    expect(state.value).toEqual(105);
  });

  // case 002
  it("Should output 100 - payload when fulfiled", () => {
    // rejected, payloadを指定する
    const action = { type: fetchDummy.rejected.type, payload: { num: 5 } };
    const state = reducer(initialState, action);

    expect(state.value).toEqual(95);
  });
});
