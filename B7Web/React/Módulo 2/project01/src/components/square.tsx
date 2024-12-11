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
    const data = {
        name: 'Elon Musk',
        avatar: 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg',
        roles: ['CEO da Tesla', 'CEO SpaceX']
        
    }

    return (
        <>
            <h1 style={{color: 'red', fontSize: '30px'}}>{data.name} - {getWeekday()}</h1>
            <img 
                src={data.avatar} 
                alt={data.name} 
                className="w-20"/>
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    )
}