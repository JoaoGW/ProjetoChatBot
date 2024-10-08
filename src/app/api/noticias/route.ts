import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    try {
        //Parâmetros de URL
        const { searchParams } = new URL(request.url);
        const categoria = searchParams.get('categoria') || 'default';

        //Captura e verificacao da existencia da chave
        const key = process.env.NEWS_KEY;
        if (!key) {
            return NextResponse.json({ message: "Nao ha uma chave de API disponivel" }, { status: 401 });
        }

        // Definicao da localizacao preferida das noticias a serem recebidas
        const country = searchParams.get('country') || 'br';

        // Rota da API com a categoria recebida
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${categoria}&country=${country}&apiKey=${key}`);

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