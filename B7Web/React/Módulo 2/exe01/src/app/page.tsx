const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
  let greenting = '';

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">
        {hour >= 0 && hour < 11 && "Bom Dia 😊"}
        {hour >= 12 && hour < 18 && "Boa Tarde 😎"}
        {hour >= 18 && hour <= 23 && "Boa Noite 🌚"}
      </div>
    </div>
  )
}

export default Page;