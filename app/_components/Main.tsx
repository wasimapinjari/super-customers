import { deleteCustomer, resetCustomer } from "@/redux/customerSlice";
import { resetForm } from "@/redux/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect } from "react";

export default function Main() {
  const customers = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-center px-8 sm:min-w-full">
      <Link href="/create">
        <button className="hover: mb-8 block rounded-md bg-gradient-to-b from-[white] to-[#fff0] to-[200%] px-4 py-2 text-center font-medium text-black hover:to-[#fff5]">
          Create
        </button>
      </Link>
      {!customers.length && (
        <button
          onClick={() => dispatch(resetCustomer())}
          className="hover: mb-8 block rounded-md bg-gradient-to-b from-[white] to-[#fff0] to-[200%] px-4 py-2 text-center font-medium text-black hover:to-[#fff5]"
        >
          Reset
        </button>
      )}
      <div className="w-full space-y-4">
        {customers.map((customer) => {
          return (
            <div
              key={customer.id}
              className="flex min-w-80 flex-col rounded-md border-2 border-solid border-gray-400 px-4 py-2 hover:bg-zinc-800 sm:min-w-max"
            >
              <div className="mb-2 flex items-center justify-between gap-4 text-nowrap sm:flex-col sm:gap-0">
                <h2 className="border-b-2 border-solid border-white text-lg sm:mb-2">
                  {customer.fullName.length < 20
                    ? customer.fullName
                    : customer.fullName.substring(0, 20) + "..."}
                </h2>
                <div className="space-x-2">
                  <Link href={"/" + customer.id}>
                    <button className="hover:text-purple-400">Edit</button>
                  </Link>
                  <button
                    className="hover:text-red-400"
                    onClick={() => dispatch(deleteCustomer(customer.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="text-sm tracking-[0.01] text-gray-400 sm:text-center">
                <p>{customer.pan}</p>
                <p>
                  {customer.email.length < 20
                    ? customer.email
                    : customer.email.substring(0, 20) + "..."}
                </p>
                <p>+91 {customer.mobileNumber}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
