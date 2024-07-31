import selectData from "@/data/selectData";
import { addCustomer, updateCustomer } from "@/redux/customerSlice";
import {
  setCity,
  setFocus,
  setIndex,
  setState,
  validatePAN,
} from "@/redux/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Address from "./Address";
import InputText from "./InputText";

export const states: string[] = [];
selectData.forEach(({ state }) => states.includes(state) || states.push(state));

const addressKeys = [
  "addressLine1",
  "addressLine2",
  "postCode",
  "state",
  "city",
];

export default function Form({
  customerData,
}: {
  customerData?: Record<string, any>;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { addressIndex, fullName } = useAppSelector((state) => state.form);

  const { register, unregister, setValue, handleSubmit, formState } = useForm();

  const addressElement = useRef((index: number) => (
    <Address
      key={index}
      index={index}
      register={register}
      setValue={setValue}
    />
  ));
  const fillData = useRef(() => {
    if (customerData) {
      const addressData = (index: string, key: string) =>
        customerData?.["addresses"][index][key];
      const setAddressValue = (index: string, key: string) =>
        setValue(`${key}-${index}`, addressData(index, key));
      for (const key in customerData) {
        if (key === "addresses") {
          for (const index in customerData["addresses"]) {
            if (index) {
              if (index === "0") addresses.current = [];
              addresses.current.push(addressElement.current(+index));
              dispatch(setIndex(addresses.current.length));
            }
            addressKeys.forEach((key) => setAddressValue(index, key));
            dispatch(setState({ index, state: addressData(index, "state") }));
            dispatch(setCity({ index, city: addressData(index, "city") }));
          }
          continue;
        }
        setValue(key, customerData[key]);
      }
    }
  });

  const addresses = useRef([addressElement.current(0)]);

  useEffect(() => {
    setValue("name", fullName);
  }, [fullName, setValue]);

  useEffect(() => {
    fillData.current();
  }, []);

  const { errors } = formState;

  function handleAddAddress() {
    if (addressIndex === 9) return;
    addresses.current.push(addressElement.current(addresses.current.length));
    dispatch(setIndex(addressIndex + 1));
  }
  function handleDeleteAddress() {
    addresses.current.pop();
    addressKeys.forEach((key) => unregister(`${key}-${addressIndex}`));
    dispatch(setIndex(addressIndex - 1));
  }
  function onSubmit(data: FieldValues) {
    const customer: Record<string, any> = {
      id: crypto.randomUUID(),
      addresses: [],
    };
    outerloop: for (const field in data) {
      for (const key of addressKeys) {
        if (field.startsWith(key)) {
          const addressKey: string = field.split("-")[0];
          const index: number = +field.split("-")[1];
          customer["addresses"][index] = customer["addresses"][index] || {};
          customer["addresses"][index][addressKey] = data[field];
          continue outerloop;
        }
      }
      customer[field] = data[field];
    }
    customerData
      ? dispatch(updateCustomer({ id: data.id, data }))
      : dispatch(addCustomer(customer));
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Client side validation can be bypassed, backend validation is required for robust code */}
      <div className="mb-4 grid min-w-[30rem] grid-cols-2 gap-x-6 gap-y-4 sm:min-w-[15rem] sm:grid-cols-1">
        <InputText
          label="PAN"
          spinner={true}
          inputName="pan"
          {...register("pan", {
            required: {
              value: true,
              message: "PAN is required",
            },
            // Pattern: 5 CapitalLetters => 4-Digit Number => 1 Capital Letter (Max Length 10)
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
              message: "Input Valid 10-Character PAN",
            },
            onChange: (e) => {
              dispatch(validatePAN(e.target.value));
              dispatch(setFocus("pan"));
            },
          })}
        />
        <InputText
          label="Full Name"
          {...register("name", {
            required: {
              value: true,
              message: "Full Name is required",
            },
            // Full name => Name + Surname => More than 1 word => Ram Gopal Swami Iyere
            validate: (name: string = "") =>
              name.split(" ").length > 1 || "Please Enter Full Name",
            maxLength: {
              value: 140,
              message: "Maximum Name Characters Limit: 140)",
            },
          })}
        />
        <InputText
          label="Email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            validate: (email: string | undefined) => {
              // Pattern: string@string.string => e.g. wasim@gmail.com
              const stringArray = email?.split("@") || [];
              const isValid =
                stringArray[stringArray.length - 1]?.includes(".");
              return isValid || "Invalid Email";
            },
            maxLength: {
              value: 255,
              message: "Maximum Email Characters Limit: 255",
            },
          })}
        />
        <label className="flex flex-col gap-[.01rem]">
          Mobile Number
          <div className="flex gap-[.4rem] border-b-2 border-solid border-gray-400 bg-[#222] text-white focus:outline-none">
            <span className="">+91</span>
            <input
              type="number"
              className="bg-[#222] pb-1 text-white focus:outline-none"
              {...register("mobileNumber", {
                required: {
                  value: true,
                  message: "Mobile Number is required",
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please Enter Valid 10 Digit Number",
                },
              })}
            />
          </div>
        </label>
      </div>

      <p className="mb-2">Address</p>

      <div className="space-y-4">
        {addresses.current.map((address) => address)}
      </div>

      <div className="flex justify-between gap-4 sm:flex-col sm:gap-2">
        <div className="flex gap-4 sm:gap-2">
          {addresses.current.length < 10 && (
            <button
              className="py-2 hover:text-green-300"
              type="button"
              onClick={handleAddAddress}
            >
              Add
            </button>
          )}
          {addresses.current.length > 1 && (
            <button
              className="py-2 hover:text-red-400"
              type="button"
              onClick={handleDeleteAddress}
            >
              Delete
            </button>
          )}
        </div>
        <div className="flex gap-4 sm:flex-row-reverse sm:gap-2 sm:border-t-2 sm:border-solid sm:border-white">
          <button
            className="py-2 hover:text-red-400 sm:flex-grow sm:text-right"
            type="button"
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
          {customerData && (
            <button
              className="py-2 hover:text-red-400"
              type="button"
              onClick={() => fillData.current()}
            >
              Default
            </button>
          )}
          <button className="py-2 hover:text-red-400" type="reset">
            Reset
          </button>
          <button className="py-2 hover:text-green-300" type="submit">
            {customerData ? "Update" : "Submit"}
          </button>
        </div>
      </div>
      <p className="ml-auto text-right text-red-400">
        {Object.values(errors)[0]?.message as ReactNode}
      </p>
    </form>
  );
}
