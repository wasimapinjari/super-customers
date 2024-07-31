import { deleteCustomer } from "@/redux/customerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const customers = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center px-8 sm:min-w-80">
      <button
        onClick={() => router.push("/create")}
        className="hover: mb-8 block rounded-md bg-gradient-to-b from-[white] to-[#fff7] to-[200%] px-4 py-2 text-center font-medium text-black hover:bg-white"
      >
        Create
      </button>
      <div className="w-full space-y-4">
        {customers.map((customer) => {
          return (
            <div
              key={customer.id}
              className="flex min-w-80 flex-col rounded-md border-2 border-solid border-gray-400 px-4 py-2"
            >
              <div className="mb-2 flex items-center justify-between gap-4 sm:flex-col sm:gap-0">
                <h2 className="border-b-2 border-solid border-white text-lg sm:mb-2">
                  {customer.name.length < 25
                    ? customer.name
                    : customer.name.substring(0, 25) + "..."}
                </h2>
                <div className="space-x-2">
                  <button
                    className="hover:text-green-300"
                    onClick={() => router.push("/" + customer.id)}
                  >
                    Edit
                  </button>
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
                  {customer.email.length < 25
                    ? customer.email
                    : customer.email.substring(0, 25) + "..."}
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
