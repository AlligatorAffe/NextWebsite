import { title } from "process";

type Props = {
  title: string,
}



export default function Header({title}: Props){
  return (
    <header className="bg-amber-300 p-8">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  )           

}