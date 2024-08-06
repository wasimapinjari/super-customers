import { createSlice } from "@reduxjs/toolkit";

export type CustomerState = (typeof initialState)[0];

export type CustomerKeys = keyof CustomerState;

export const initialState = [
  {
    id: "4296e070-43fb-489a-8dbb-2fe5c867deb6",
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
    id: "d3f1d839-2f19-4451-998c-20c8e1f417fa",
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
    id: "51090037-dc8a-47a2-b08e-363e0a01c905",
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
    resetCustomer() {
      return initialState;
    },
  },
});

export default customerSlice.reducer;

export const { addCustomer, deleteCustomer, updateCustomer, resetCustomer } =
  customerSlice.actions;
