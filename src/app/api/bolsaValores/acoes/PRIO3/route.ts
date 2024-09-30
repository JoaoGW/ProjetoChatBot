import { NextRequest, NextResponse } from "next/server";

export async function GET(Request: NextRequest) {
    try {
        // Captura e verificacao da chave a ser utilizada
        const key = process.env.STOCK_KEY_PRIO3;
        if (!key) {
            return NextResponse.json({ message: "Chave da API nao e valida" }, { status: 401 });
        }

        // Verifica a response retornada da API
        const response = await fetch(`https://brapi.dev/api/quote/PRIO3?range=1d&interval=1d&fundamental=true&token=${key}`);
        if (!response.ok) {
            throw new Error("Nao foi possivel completar a solictiacao requirida");
        }

        // Se sucesso, armazena a informacao em um data e retorna codigo de sucesso a requisicao
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (Error) {
        return NextResponse.json({ message: "Ocorreu um erro ao realizar a requisicao das informacoes de Acoes" }, { status: 500 });
    }
}