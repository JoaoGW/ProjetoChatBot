import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    try {
        //Captura e verificacao da existencia da chave
        const key = process.env.CONV_KEY
        if(!key){
            return NextResponse.json({ message: "Nao ha uma chave de API disponivel" }, { status: 401 });
        }

        // Rota da api com a minha KEY pessoal, usando template string corretamente
        const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${key}&base=EUR&symbols=USD,BRL,JPY`);

        // Verifica o resultado da response do fetch
        if (!response.ok) {
            throw new Error("Ocorreu um erro no fetch das informacoes");
        }

        // Armazenamento do resultado da rota e retorno de valor com codigo de sucesso 200
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        // Retorno de erro para caso ocorra algum erro na requisicao, adivindo de !ok
        // return NextResponse.json({ message: "Ocorreu um problema na requisição das noticias" }, { status: 500 });
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    
    }
}