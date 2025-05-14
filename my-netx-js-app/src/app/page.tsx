import Link from "next/link";
export default function Home() {
  return (
   <div>
    <h1>home</h1>
    <Link href="/gallery" >go to gallery</Link>
   </div>
  );
}
