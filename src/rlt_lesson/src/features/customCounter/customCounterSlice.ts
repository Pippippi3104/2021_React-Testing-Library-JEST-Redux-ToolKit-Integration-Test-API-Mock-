import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

type User = {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type Response = {
  data: User;
};

const sleep = async (msec: number) => {
  const start = new Date().getTime();
  while (new Date().getTime() - start < msec);
};
export const fetchDummy = createAsyncThunk<
  // PayloadCreatorの返却値の型
  number,
  // PayloadCreatorの第一引数の型
  { num: number },
  // PayloadCreatorの第二引数(ThunkAPI)の型
  {
    // rejectした時の返却値の型
    rejectValue: {
      num: number;
      msg: string;
    };
  }
>("fetch/dummy", async (args, thunkApi) => {
  try {
    await sleep(2000);
  } catch (e) {
    return thunkApi.rejectWithValue({ num: args.num, msg: e });
  }
  return args.num;
});
export const fetchJSON = createAsyncThunk("fetch/api", async () => {
  const res: Response | void = await axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .catch((e) => {
      throw new Error(e.message);
    });
  const { username } = res.data;
  return username;
});

export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState: {
    mode: 0,
    value: 0,
    username: "",
  },
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += action.payload * 100;
          break;
        case 2:
          state.value += action.payload * 10000;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchDummy.rejected, (state, action) => {
      state.value = 100 - (action.payload?.num ?? 0);
    });
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      state.username = action.payload;
    });
    builder.addCase(fetchJSON.rejected, (state, _action) => {
      state.username = "anonymous";
    });
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = customCounterSlice.actions;

export const selectCount = (state: RootState) => state.customCounter.value;
export const selectUsername = (state: RootState) =>
  state.customCounter.username;

export default customCounterSlice.reducer;
