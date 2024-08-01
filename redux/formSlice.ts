import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

const initialState = {
  isLoading: false,
  pan: "",
  fullName: "",
  state: [] as string[],
  city: [] as string[],
  focusInput: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPan(state, action) {
      state.pan = action.payload;
    },
    setName(state, action) {
      state.fullName = action.payload;
    },
    setState(prevState, action) {
      const { index, state } = action.payload;
      prevState.state[index] = state;
    },
    setCity(state, action) {
      const { index, city } = action.payload;
      state.city[index] = city;
    },
    setFocus(state, action) {
      state.focusInput = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { setLoading, setPan, setName, setCity, setState, setFocus } =
  formSlice.actions;

const url = "https://lab.pixel6.co/api/";

export const validatePAN = (payload: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "form/setLoading",
        payload: true,
      });
      const res = await fetch(url + "verify-pan.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          panNumber: "payload",
        }),
      });
      if (!res.ok) {
        throw new Error("Fail to get details");
      }
      const data = await res.json();
      dispatch(setName(data.fullName));
    } catch (e) {
      console.error(e);
      setLoading(false);
    } finally {
      dispatch({
        type: "form/setLoading",
        payload: false,
      });
    }
  };
};

export const getPostCode = (payload: { code: number; index: number }) => {
  const { code, index } = payload;
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "form/setLoading",
        payload: true,
      });
      const res = await fetch(url + "get-postcode-details.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postcode: code,
        }),
      });
      if (!res.ok) {
        throw new Error("Fail to get details");
      }
      const data = await res.json();
      if (data.status === "Success") {
        dispatch({
          type: "form/setCity",
          payload: { index, city: data.city[0].name },
        });
        dispatch({
          type: "form/setState",
          payload: { index, state: data.state[0].name },
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({
        type: "form/setLoading",
        payload: false,
      });
    }
  };
};
