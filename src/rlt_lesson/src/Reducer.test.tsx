import reducer, {
  increment,
  incrementByAmount,
} from "../src/features/customCounter/customCounterSlice";

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    // case 001
    let initialState = {
      mode: 0,
      value: 1,
      username: "",
    };
    it("Should increment by 1 with mode 0", () => {
      const action = { type: increment.type }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(2); // new state が意図した結果となっているのか判定
    });

    // case 002
    it("Should increment by 100 with mode 1", () => {
      let initialState = {
        mode: 1,
        value: 1,
        username: "",
      };
      const action = { type: increment.type }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(101); // new state が意図した結果となっているのか判定
    });

    // case 003
    it("Should increment by 10000 with mode 2", () => {
      let initialState = {
        mode: 2,
        value: 1,
        username: "",
      };
      const action = { type: increment.type }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(10001); // new state が意図した結果となっているのか判定
    });
  });

  describe("incrementByAmount action", () => {
    // case 004
    let initialState = {
      mode: 0,
      value: 1,
      username: "",
    };
    it("Should increment by payload value with mode 0", () => {
      const action = { type: incrementByAmount.type, payload: 3 }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(4); // new state が意図した結果となっているのか判定
    });

    // case 005
    it("Should increment by 100 * payload value with mode 1", () => {
      let initialState = {
        mode: 1,
        value: 1,
        username: "",
      };
      const action = { type: incrementByAmount.type, payload: 3 }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(301); // new state が意図した結果となっているのか判定
    });

    // case 006
    it("Should increment by 10000 * payload value with mode 2", () => {
      let initialState = {
        mode: 2,
        value: 1,
        username: "",
      };
      const action = { type: incrementByAmount.type, payload: 3 }; // action 作成
      const state = reducer(initialState, action); // new state 作成

      expect(state.value).toEqual(30001); // new state が意図した結果となっているのか判定
    });
  });
});
