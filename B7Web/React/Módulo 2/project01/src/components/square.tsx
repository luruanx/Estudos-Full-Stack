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

export const Person = () => {
    return (
        <>
            <h1>Elon Musk</h1>
            <img src="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg" alt="" className="w-20"/>
            <ul>
                <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li>
            </ul>
        </>
    )
}