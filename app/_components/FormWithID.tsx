"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import Form from "./Form";

export default function FormWithID({ id }: { id: string }) {
  const customer = useAppSelector((state) =>
    state.customers.find((customer) => customer?.id === id),
  );
  if (!customer)
    return (
      <Link
        className="border-b-2 border-solid border-slate-200 hover:border-slate-400"
        href="/"
      >
        Not found, Go back
      </Link>
    );

  return <Form customerData={customer} />;
}
