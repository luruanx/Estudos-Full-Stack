type Props = {
    phrase: string;
    author?: string;
}

export const Card = ({ phrase, author }: Props) => {
        return (
            <div className="border-2 border-red-600 p3 text-center text-2xl">
                <h3 className="text-3xl font-bold">{phrase}</h3>
                <p>- {author ?? 'Autor Desconhecido'}</p>
            </div>
        );
}