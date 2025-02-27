"use client"

//---------- Opção 1

const Page = () => {
  const handleClick = () => {
    alert("Funcionou")
  }

  return (
    <div className="m-w-screen h-screen flex justify-center items-center">
      <button onClick={handleClick} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
    </div>
  )
}

//----------- Opção 2

// const Page = () => {

//   return (
//     <div className="m-w-screen h-screen flex justify-center items-center">
//       <button onClick={function click() {
//         alert("funcionou2")
//       }} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
//     </div>
//   )
// }

//------------- Opção 3

// const Page = () => {

//   return (
//     <div className="m-w-screen h-screen flex justify-center items-center">
//       <button onClick={() => alert("funcionou3")} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
//     </div>
//   )
// }

export default Page;