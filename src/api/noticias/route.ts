import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        //Rota da api com a minha KEY pessoal
        const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2024-09-01&sortBy=publishedAt&apiKey=36ce6757c2394ea59c29b3e64fa9f4f3")

        //Verifica o resultado da response do fetch
        if(!response.ok){
            throw new Error("Ocorreu um erro no fetch das informacoes");    
        }

        //Armazenamento do resultado da rota e retorno de valor com codigo de sucesso 200
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        //Retorno de erro para caso ocorra algum erro na requisicao, adivindo de !ok
        return NextResponse.json({ message: "Ocorreu um problema na requisição" }, { status: 500 });
    }
}