import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: crypto.randomUUID(),
    name: "Rakesh Sharma",
    email: "rakesh@gmail.com",
    pan: "HOJOX2345F",
    mobileNumber: 8043434334,
    addresses: [
      {
        addressLine1: "Madhav Park",
        addressLine2: "M.G Road",
        postCode: 322372,
        state: "Maharashtra",
        city: "Nasik",
      },
      {
        addressLine1: "Shiv Park",
        addressLine2: "A.K Nagar",
        postCode: 122103,
        state: "Karnataka",
        city: "Bangalore",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Shreya Kulkarni",
    email: "shreya@gmail.com",
    pan: "SIPLB2342U",
    mobileNumber: 7734538392,
    addresses: [
      {
        addressLine1: "A.B Colony",
        addressLine2: "Pink Road",
        postCode: 828012,
        state: "Madhya Pradesh",
        city: "Indore",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Amol Jadhav",
    email: "amol@gmail.com",
    pan: "FOKOI9145U",
    mobileNumber: 9134533498,
    addresses: [
      {
        addressLine1: "Diamond Street",
        addressLine2: "Purple Valley",
        postCode: 397390,
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
      state[index] = action.payload.data;
    },
  },
});

export default customerSlice.reducer;

export const { addCustomer, deleteCustomer, updateCustomer } =
  customerSlice.actions;
