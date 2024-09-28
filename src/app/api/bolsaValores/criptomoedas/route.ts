import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const key = process.env.STOCK_KEY_CRYPTO;
        if (!key) {
            return NextResponse.json({ message: "Chave da API não é válida" }, { status: 401 });
        }

        const response = await fetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
              'X-CMC_PRO_API_KEY': key,
            },
          });
        if (!response.ok) {
            throw new Error("Não foi possível completar a solicitação requerida");
        }

        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Ocorreu um erro ao realizar a requisição das informações" }, { status: 500 });
    }
}