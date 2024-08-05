import FormWithID from "../_components/FormWithID";

export default function CustomerForm({ params }: { params: { id: string } }) {
  return <FormWithID id={params.id} />;
}
