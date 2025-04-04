import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <Button variant="">Hello Button</Button>
    </div>
  );
}
