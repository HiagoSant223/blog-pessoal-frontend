import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
// import { toastAlerta } from "../utils/toastAlerta"


// TIPANDO O CONTEXTO, DECLARANDO AS INFORMAÇÕES QUE O CONTEXTO ARMAZENARA
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

// CONSTRUÇÃO INICIAL DO CONTEXTO DE ARMAZENAMENTO
export const AuthContext = createContext({} as AuthContextProps)


// FUNÇÃO QUE GERENCIA O CONTEXTO DE ARMAZENAMENTO
export function AuthProvider({ children }: AuthProviderProps) {

    // CRIANDO UM ESTADO DO USUARIO LOGADO COM - hook useState
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)


    // RESPONSAVEL POR LOGAR O USUARIO E ATUALIZAR O ESTADO DE USUARIO
    async function handleLogin(userLogin: UsuarioLogin) {
        
        setIsLoading(true) // INDICA QUE ESTA AVENDO ALGUM PROCESSAMENTO

        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    // RESPONSAVEL POR DESLOGAR O USUARIO REINICIANDO O ESTADO DE USUARIO LOGADO
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}