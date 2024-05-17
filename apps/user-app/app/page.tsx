import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-red-300 text-2xl">
      <h2>Hello there</h2>
    </div>
  );
}
