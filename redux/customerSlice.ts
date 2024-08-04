import { createSlice } from "@reduxjs/toolkit";

export type CustomerState = (typeof initialState)[0];

export type CustomerKeys = keyof CustomerState;

export const initialState = [
  {
    id: crypto.randomUUID(),
    fullName: "Rakesh Sharma",
    email: "rakesh@gmail.com",
    pan: "HOJOX2345F",
    mobileNumber: 8043434334,
    addresses: [
      {
        addressLine1: "Madhav Park",
        addressLine2: "M.G Road",
        postCode: 422001,
        state: "Maharashtra",
        city: "Nasik",
      },
      {
        addressLine1: "Shiv Park",
        addressLine2: "A.K Nagar",
        postCode: 560001,
        state: "Karnataka",
        city: "Bangalore",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    fullName: "Shreya Kulkarni",
    email: "shreya@gmail.com",
    pan: "SIPLB2342U",
    mobileNumber: 7734538392,
    addresses: [
      {
        addressLine1: "A.B Colony",
        addressLine2: "Pink Road",
        postCode: 452001,
        state: "Madhya Pradesh",
        city: "Indore",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    fullName: "Amol Jadhav",
    email: "amol@gmail.com",
    pan: "FOKOI9145U",
    mobileNumber: 9134533498,
    addresses: [
      {
        addressLine1: "Diamond Street",
        addressLine2: "Purple Valley",
        postCode: 302003,
        state: "Rajasthan",
        city: "Jaipur",
      },
    ],
  },
];

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const index = state.findIndex(
        (customer) => customer.id === action.payload,
      );
      state.splice(index, 1);
    },
    updateCustomer(state, action) {
      const index = state.findIndex(
        (customer) => customer.id === action.payload.id,
      );
      state[index] = action.payload;
    },
  },
});

export default customerSlice.reducer;

export const { addCustomer, deleteCustomer, updateCustomer } =
  customerSlice.actions;
