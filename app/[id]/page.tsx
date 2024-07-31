export async function generateStaticParams() {
  return store.getState().customers.map((customer) => ({ id: customer.id }));
}

import store from "@/redux/store";
import FormWithID from "../_components/FormWithID";

export default function CustomerForm({ params }: { params: { id: string } }) {
  return <FormWithID id={params.id} />;
}
