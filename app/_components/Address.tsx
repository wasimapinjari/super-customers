import selectData from "@/data/selectData";
import { getPostCode, setCity, setFocus, setState } from "@/redux/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { AddressNumber, Form } from "./Form";
import InputText from "./InputText";

export default function Address({
  index,
  register,
  setValue,
}: {
  index: AddressNumber;
  register: UseFormRegister<Form>;
  setValue: UseFormSetValue<Form>;
}) {
  const { state, city } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    setCities(selectData[state[index]]);
  }, [state, index]);

  useEffect(() => {
    setValue(`state-${index}`, state[index]);
    setValue(`city-${index}`, city[index]);
  }, [city, index, setValue, state, cities]);
  return (
    <div className="g-4 mb-2 flex flex-col justify-between space-y-4 rounded-md border-2 border-solid border-gray-400 p-4 sm:mb-0">
      <InputText
        label="Address Line 1"
        {...register(`addressLine1-${index}`, {
          required: {
            value: true,
            message: "Address Line 1 is required",
          },
        })}
      />
      <InputText
        label="Address Line 2"
        {...register(`addressLine2-${index}`)}
      />
      <div className="mb-4 flex justify-between gap-4 sm:flex-col">
        <InputText
          label="Postcode"
          type="number"
          spinner={true}
          inputName={`postCode-${index}`}
          className="w-28 sm:w-full"
          {...register(`postCode-${index}`, {
            required: {
              value: true,
              message: "Address Line 1 is required",
            },
            pattern: {
              value: /^[0-9]{6}$/,
              message: "Input Valid 6-Digit Post Code",
            },
            onChange: (e) => {
              dispatch(getPostCode({ code: +e.target.value, index }));
              dispatch(setFocus(`postCode-${index}`));
            },
          })}
        />
        <div className="mb-4 flex justify-between gap-3 sm:flex-col">
          <label className="flex flex-col gap-1">
            <span>
              <span className="text-neutral-3 bg-purple-400/10 px-[.1rem]">
                State
              </span>
            </span>
            <select
              className="scrollbar block h-7 min-w-[6.2rem] rounded-md border-2 border-solid border-gray-400 bg-[#222] pl-[.15rem] text-slate-200 hover:bg-zinc-800"
              {...register(`state-${index}`, {
                required: {
                  value: true,
                  message: "State is required",
                },
                onChange: (e) => {
                  dispatch(setState({ index, state: e.target.value }));
                },
              })}
            >
              <option value="" />
              {Object.keys(selectData).map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>
              <span className="text-neutral-3 bg-purple-400/10 px-[.1rem]">
                City
              </span>
            </span>
            <select
              className="scrollbar block h-7 min-w-48 rounded-md border-2 border-solid border-gray-400 bg-[#222] pl-[.15rem] text-slate-200 hover:bg-zinc-800"
              {...register(`city-${index}`, {
                required: {
                  value: true,
                  message: "City is required",
                },
                onChange: (e) => {
                  dispatch(setCity({ index, city: e.target.value }));
                },
              })}
            >
              <option className="bg-transparent" value="" />
              {cities?.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
