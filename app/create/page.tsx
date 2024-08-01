"use client";

import Form from "../_components/Form";

export default function Create() {
  return <Form formKey={crypto.randomUUID()} />;
}
