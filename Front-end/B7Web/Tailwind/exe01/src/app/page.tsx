const Page = () => (
  <div className="container mx-auto">

    {/* LOADING */}
    <div className="m-10 mx-auto w-12 h-12 border-8 border-blue-200 border-r-blue-600 rounded-full animate-spin"></div>

    {/* HEROCARD */}
    <div className="m-8 rounded-xl overflow-hidden p-6 bg-slate-800 md:flex md:p-0">
      <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto md:w48 md:h-auto md:rounded-none bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/1200px-BenFranklinDuplessis.jpg)]"></div>

      <div className="grow pt-6 text-center md:p-8 md:text-left">
        <p className="text-lg text-white">"Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu aprendo de verdade.</p>
        <p className="mt-3 font-bold text-sky-400">Benjamin Franklin</p>
        <p className="text-slate-500">Político, EUA</p>
      </div>
    </div>

    {/* GRID RESPONSIVO */}
    <div className="m-8 p-3 rounded-md bg-black text-white">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <div className="w-full h-60 bg-cover bg-center col-span-2 md:row-span-2 md:h-full bg-[url(https://amazingarchitecture.com/storage/files/4049/architecture-firm/magarao-lindenberg-arquitetura/casa-lht/casa-lht-rio-de-janeiro-magarao-lindenberg-arquitetura-01.jpg)]"></div>
        <div className="w-full h-60 bg-cover bg-center  bg-[url(https://amazingarchitecture.com/storage/files/4049/architecture-firm/magarao-lindenberg-arquitetura/casa-lht/casa-lht-rio-de-janeiro-magarao-lindenberg-arquitetura-03.jpg)]"></div>
        <div className="w-full h-60 bg-cover bg-center bg-[url(https://amazingarchitecture.com/storage/files/4049/architecture-firm/magarao-lindenberg-arquitetura/casa-lht/casa-lht-rio-de-janeiro-magarao-lindenberg-arquitetura-15.jpg)]"></div>
      </div>

      <div className="text-2xl font-bold mt-3">Título da Casa</div>

      <div className="flex gap-2 mt-3">
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
        <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
      </div>
    </div>


    {/* TABELA */}
    <table className="m-8 w-full">
      <thead>
        <tr className="border-b text-left text-sm border-gray-200">
          <th className="py-2">Nome</th>
          <th className="hidden md:table-cell">Título</th>
          <th className="hidden md:table-cell">Email</th>
          <th>Função</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">Maria da Silva</p>
            <p className="block md:hidden">Cafezeira</p>
            <p className="block md:hidden">mariadoca@gmail.com</p>
          </td>
          <td className="hidden md:table-cell">Cafezeira</td>
          <td className="hidden md:table-cell">mariadoca@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">editar</a>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">Maria da Silva</p>
            <p className="block md:hidden">Cafezeira</p>
            <p className="block md:hidden">mariadoca@gmail.com</p>
          </td>
          <td className="hidden md:table-cell">Cafezeira</td>
          <td className="hidden md:table-cell">mariadoca@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">editar</a>
          </td>
        </tr>
      </tbody>

      <tbody>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">Maria da Silva</p>
            <p className="block md:hidden">Cafezeira</p>
            <p className="block md:hidden">mariadoca@gmail.com</p>
          </td>
          <td className="hidden md:table-cell">Cafezeira</td>
          <td className="hidden md:table-cell">mariadoca@gmail.com</td>
          <td>Membro</td>
          <td>
            <a href="">editar</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Page;