export const Square = () => {
    return (
        <div className="w-52 h-52 bg-orange-700 text-white">
            Texto qualquer
        </div>
    )
}

export const Circle = () => {
    return (
        <div className="w-52 h-52 bg-blue-700 text-white">
            Texto qualquer
        </div>
    )
}



const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(new Date())
}

export const Person = () => {
    const name: string = 'Elon Musk';
    const avatar: string = 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg'

    return (
        <>
            <h1>{name} - {getWeekday()}</h1>
            <img 
                src={avatar} 
                alt={avatar} 
                className="w-20"/>
            <ul>
                <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li>
            </ul>
        </>
    )
}