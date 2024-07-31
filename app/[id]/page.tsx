"use client";

import { useAppSelector } from "@/redux/hooks";
import Form from "../_components/Form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FormWithId({ params }: { params: { id: string } }) {
  const router = useRouter();
  const customer = useAppSelector((state) =>
    state.customers.find((customer) => customer.id === params.id),
  );
  useEffect(() => {
    if (!customer) router.push("/");
  }, [customer, router]);
  return <Form customerData={customer} />;
}
