import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    try {
               // Rota da api com a minha KEY pessoal, usando template string corretamente
        // const response = await fetch(`https://www.bcb.gov.br/api/servico/sitebcb/ri/relatorios?quantidade=10`);
        const response = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=01/01/2023&dataFinal=01/07/2024`);

        // Verifica o resultado da response do fetch
        if (!response.ok) {

            throw new Error("Ocorreu um erro no fetch das informacoes");
        }

        // Armazenamento do resultado da rota e retorno de valor com codigo de sucesso 200
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        // Retorno de erro para caso ocorra algum erro na requisicao, adivindo de !ok
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    
    }
}