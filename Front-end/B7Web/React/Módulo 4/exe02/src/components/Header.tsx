import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react"

export const Header = () => {
    const postCtx = useContext(PostContext);

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = () => {
        if(titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput('');
            setBodyInput('');
        }
    }

    return (
        <header>
            <h1 className="text-3xl">Titulo da página</h1>

            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 my-4 p-3">
                <input
                    type="text"
                    placeholder="Digite um título"
                    className="bg-white border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea
                    placeholder="Digite um corpo"
                    className="bg-white h-24 border border-gray-300 p-2 text-black text-xl"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}>
                </textarea>
                <button 
                    className="bg-blue-500 p-3 text-white rounded-md"
                    onClick={handleAddButton}
                >Adicionar</button>
            </div>
        </header>
    )
}