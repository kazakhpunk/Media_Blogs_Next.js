import Image from "next/image";
import './globals.css';
import NewsList from "./components/NewsList";

export default function Home() {
  return (
    <main className='container mx-auto px-4'>
      <header className='px-[115px] py-[90px]'>
        <h1 className='text-4xl fontsemibold my-2'>
          Welcome to Media App!
        </h1>
        <h4 className='text-2xl fontsemibold'>
          Made by Nursultan Sagyntay
        </h4>
      </header>
      <NewsList/>
    </main>
  );
}
