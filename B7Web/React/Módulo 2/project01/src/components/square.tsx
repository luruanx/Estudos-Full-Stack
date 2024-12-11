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
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date())
}

type Props = {
    name: string
    avatar?: string
    roles: string[]
}

export const Person = ({ 
    name, 
    avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg' , 
    roles 
}: Props) => {

    return (
        <div className="p-10">
            <h1 style={{ color: 'red', fontSize: '30px' }}>{name} - {getWeekday()}</h1>
            <img
                src={avatar}
                alt={name}
                className="w-20" />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    )
}