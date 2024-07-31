"use client";

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Form from "./Form";
import { useEffect } from "react";

export default function FormWithID({ id }: { id: string }) {
  const router = useRouter();
  const customer = useAppSelector((state) =>
    state.customers.find((customer) => customer.id === id),
  );
  useEffect(() => {
    if (!customer) router.push("/");
  }, [customer, router]);
  return <Form customerData={customer} />;
}
