import { Circle, Square, Person } from '@/components/square'

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Outro texto</h3>

      <Square />
      <Circle />
      <Person />
    </div>
  );
}

export default Page;