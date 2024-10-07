import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    try {
        //Captura e verificacao da existencia da chave
        const key = process.env.NEWS_KEY
        if(!key){
            return NextResponse.json({ message: "Nao ha uma chave de API disponivel" }, { status: 401 });
        }

        // Definicao da localizacao preferida das noticias a serem recebidas
        const country = request.nextUrl.searchParams.get('country') || 'br';

        // Rota da api com a minha KEY pessoal, usando template string corretamente
        const response = await fetch(`https://newsapi.org/v2/everything?q=stock&language=pt&from=2024-10-01&to=2024-10-07&sortBy=popularity&apiKey=${key}`);

        // Verifica o resultado da response do fetch
        if (!response.ok) {
            throw new Error("Ocorreu um erro no fetch das informacoes");
        }

        // Armazenamento do resultado da rota e retorno de valor com codigo de sucesso 200
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        // Retorno de erro para caso ocorra algum erro na requisicao, adivindo de !ok
        return NextResponse.json({ message: "Ocorreu um problema na requisição das noticias" }, { status: 500 });
    }
}