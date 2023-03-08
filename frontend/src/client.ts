// client.ts
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ok3zdq27",
  apiVersion: "2023-03-01",
  dataset: "production",
  useCdn: false,
});

export default client;
