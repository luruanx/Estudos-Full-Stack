import { LoggedUserContext } from "@/contexts/LoggedUser"
import { useContext } from "react"

export const Header = () => {
    const LoggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        LoggedUserCtx?.setName('');
    }

    return (
        <header className="m-7">
            <h1 className="text-3xl">Título da página</h1>
            {LoggedUserCtx?.name &&
                <>
                    <p>Usuário Logado: {LoggedUserCtx?.name}</p>
                    <button onClick={handleLogout} className="cursor-pointer">Sair</button>
                </>
            }
            {(!LoggedUserCtx || LoggedUserCtx?.name === '') &&
                <p>Usuário Deslogado</p>
            }

        </header>
    )
}