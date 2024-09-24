import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    try {
        //Definicao dos valores de rota de fetch
        const news_url = "https://newsapi.org/v2/everything?q=bitcoin&from=2024-09-01&sortBy=publishedAt&apiKey="
        const key = process.env.NEWS_KEY
        const country = request.nextUrl.searchParams.get('country') || 'br';

        //Rota da api com a minha KEY pessoal
        const response = await fetch(`${news_url}${key}`)

        //Verifica o resultado da response do fetch
        if(!response.ok){
            throw new Error("Ocorreu um erro no fetch das informacoes");    
        }

        //Armazenamento do resultado da rota e retorno de valor com codigo de sucesso 200
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        //Retorno de erro para caso ocorra algum erro na requisicao, adivindo de !ok
        return NextResponse.json({ message: "Ocorreu um problema na requisição das noticias" }, { status: 500 });
    }
}