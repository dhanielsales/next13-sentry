import { Checkbox } from "./checkbox";

async function toggle(data: boolean) {
  "use server";
  condition = data;
  console.log({ data });
}

let condition = false;

async function form() {
  "use server";

  if (condition) {
    throw new Error("Name or Email is undefined");
  }
}

export default function Page() {
  return (
    <div>
      <h1>Form</h1>
      <div>On error: {condition}</div>
      <Checkbox toggle={toggle} />
      <form action={form}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
