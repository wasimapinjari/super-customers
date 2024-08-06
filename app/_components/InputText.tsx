import { useAppSelector } from "@/redux/hooks";
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";
import Spinner from "./Spinner";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
  spinner?: boolean;
  inputName?: string;
};

export default forwardRef(function InputText(
  { label, inputName = "", className = "", spinner = false, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { isLoading, focusInput } = useAppSelector((state) => state.form);
  return (
    <label className="flex flex-col gap-[.01rem]">
      <span>
        <span className="bg-purple-400/10 px-[.1rem] text-neutral-300">
          {label}
        </span>
        &nbsp;
        {spinner && focusInput === inputName && isLoading && (
          <Spinner className="mb-1 inline w-4" />
        )}
      </span>
      <input
        type="text"
        className={`border-b-2 border-solid border-gray-400 bg-[#222] pb-1 text-white focus:outline-none ${className}`}
        {...props}
        ref={ref}
      />
    </label>
  );
});
