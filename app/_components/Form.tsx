import {
  addCustomer,
  CustomerState,
  updateCustomer,
} from "@/redux/customerSlice";
import {
  setCity,
  setFocus,
  setName,
  setPan,
  setState,
  validatePAN,
} from "@/redux/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Address from "./Address";
import InputText from "./InputText";

export type Form = FormMain & FormAddress;

type FormMain = {
  id: string;
  pan: string;
  fullName: string;
  email: string;
  mobileNumber: number;
};

export type AddressNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type FormAddress = {
  [K in (typeof addressKeys)[number] as `${K}-${AddressNumber}`]: K extends "postCode"
    ? number
    : string;
};

const addressKeys = [
  "addressLine1",
  "addressLine2",
  "postCode",
  "state",
  "city",
] as const;

export default function Form({
  customerData,
}: {
  customerData?: CustomerState;
}) {
  const router = useRouter();

  const { fullName, pan } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const {
    register,
    setValue,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const [addresses, setAddresses] = useState<JSX.Element[]>([]);

  const addressElement = useRef((index: AddressNumber) => (
    <Address
      key={index}
      index={index}
      register={register}
      setValue={setValue}
    />
  ));

  const fillData = useRef(() => {
    if (customerData) {
      const addressData = (
        index: AddressNumber,
        key: (typeof addressKeys)[number],
      ) => customerData?.["addresses"][index][key];
      const setAddressValue = (
        index: AddressNumber,
        key: (typeof addressKeys)[number],
      ) => setValue(`${key}-${index}`, addressData(index, key));
      setAddresses([]);
      for (const customerKey in customerData) {
        const key = customerKey as keyof CustomerState;
        if (key === "addresses") {
          for (const addressIndex in customerData["addresses"]) {
            const index = +addressIndex as AddressNumber;
            setAddresses((a: JSX.Element[]) => [
              ...a,
              addressElement.current(index),
            ]);
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

  useEffect(() => {
    setValue("fullName", fullName);
  }, [fullName, setValue, pan]);

  useEffect(() => {
    fillData.current();
  }, [dispatch]);

  if (!customerData && !addresses.length)
    setAddresses([addressElement.current(0)]);

  function handleAddAddress() {
    if (addresses.length === 10) return;
    setAddresses((a: JSX.Element[]) => [
      ...a,
      addressElement.current(addresses.length as AddressNumber),
    ]);
  }

  function handleDeleteAddress() {
    setAddresses((a) => a.slice(0, a.length - 1));
    addressKeys.forEach((key) =>
      unregister(`${key}-${(addresses.length - 1) as AddressNumber}`),
    );
  }

  function onSubmit(data: Form) {
    const customer: Record<string, any> = {
      id: crypto.randomUUID(),
      addresses: [],
    };
    outerloop: for (const fieldKey in data) {
      const field = fieldKey as keyof Form;
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
      ? dispatch(updateCustomer({ ...customer, id: data.id }))
      : dispatch(addCustomer(customer));
    router.push("/");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Client side validation can be bypassed, backend validation is required for robust code */}
      <div className="mb-4 grid min-w-[30rem] grid-cols-2 gap-x-6 gap-y-4 sm:min-w-[20rem] sm:grid-cols-1 xs:min-w-full">
        <InputText
          label="PAN"
          spinner={true}
          className="uppercase"
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
              setValue("pan", e.target.value.toUpperCase());
              dispatch(validatePAN(e.target.value));
              dispatch(setFocus("pan"));
              dispatch(setPan(e.target.value));
            },
          })}
        />
        <InputText
          label="Full Name"
          {...register("fullName", {
            required: {
              value: true,
              message: "Full Name is required",
            },
            // Full name => Name + Surname => More than 1 word => Ram Gopal Swami Iyere
            validate: (fullName: string = "") =>
              fullName.split(" ").length > 1 || "Please Enter Full Name",
            maxLength: {
              value: 140,
              message: "Maximum Name Characters Limit: 140)",
            },
            onChange: (e) => {
              dispatch(setName(e.target.value));
            },
          })}
        />
        <InputText
          label="Email"
          type="email"
          className="lowercase"
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
            onChange: (e) => {
              setValue("email", e.target.value.toLowerCase());
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
                onChange: (e) => {
                  setValue("mobileNumber", e.target.value.toLowerCase());
                },
              })}
            />
          </div>
        </label>
      </div>

      <p className="mb-2">Address</p>

      <div className="space-y-4">
        {addresses.map((address: JSX.Element) => address)}
      </div>

      <div className="flex justify-between gap-4 sm:flex-col sm:gap-2">
        <div className="flex gap-4 sm:gap-2">
          {addresses.length < 10 && (
            <button
              className="py-2 hover:text-purple-400"
              type="button"
              onClick={handleAddAddress}
            >
              Add
            </button>
          )}
          {addresses.length > 1 && (
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
          <button className="py-2 hover:text-purple-400" type="submit">
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
