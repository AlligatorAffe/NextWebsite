import { title } from "process";


export default function Header(){
  return (
    <header className="bg-amber-300 p-8">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  )           

}