"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Form from "./Form";

export default function FormWithID({ id }: { id: string }) {
  const router = useRouter();
  const ref = useRef(null);
  const customer = useAppSelector((state) =>
    state.customers.find((customer) => customer?.id === id),
  );
  if (!customer) return <Link href="/">Not found, Go back</Link>;

  return <Form customerData={customer} />;
}
