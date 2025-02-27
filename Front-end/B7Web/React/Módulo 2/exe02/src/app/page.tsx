import { StudentTable } from "@/components/StudentTable"
import { students } from "@/data/students";

const Page = () => {
  return (
    <div className="m-8">
      <h1 className="mb-5 text-5xl">Lista de Alunos</h1>
      <StudentTable students={students} />
    </div>
  )
}

export default Page;