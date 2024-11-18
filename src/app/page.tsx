'use client'
import Chatbot from '@/components/Chatbot.tsx/ChatBot';
import StockMarquee from '@/components/carrossel';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaBitcoin } from 'react-icons/fa';
import Image from 'next/image'
import BannerImage from '../assets/banner.jpg'

type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export default function Economia() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching das notícias, filtrando apenas com conteúdo classificado como válido
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/noticias");
        if (!response.ok) {
          throw new Error("Erro ao buscar notícias.");
        }

        const data = await response.json();

        // Filtrar artigos com description diferente de "[Removed]" e limitar a 6 resultados
        const filteredArticles = (data.data.articles || [])
          .filter((article: Article) => article.description !== "[Removed]")
          .slice(0, 6);

        setArticles(filteredArticles);
        setLoading(false);
      } catch (err) {
        setError("Não foi possível carregar as notícias.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>InfoEconomia - Tudo sobre Economia e Investimentos</title>
        <meta name="description" content="InfoEconomia é o seu portal para informações e atualizações sobre investimentos, inflação mundial e criptomoedas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 text-white p-4 fixed w-full top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">InfoEconomia</h1>
          <nav className="space-x-6">
            <a href="#investimento" className="hover:text-gray-300">Investimentos</a>
            <a href="#inflacao" className="hover:text-gray-300">Inflação</a>
            <a href="#criptomoedas" className="hover:text-gray-300">Criptomoedas</a>
            <a href="#perfil" className="hover:text-gray-300">Minha Conta</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 bg-slate-800 min-h-screen">
        <StockMarquee />

        {/* Banner */}
        <section className="relative h-64 flex items-center justify-center text-white">
          {/* Imagem de fundo */}
          <Image
            src={ BannerImage }
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="z-0"
          />
          {/* Texto */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold">
              Tudo sobre Economia e Investimentos
            </h2>
          </div>
          {/* Overlay opcional para contraste */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
        </section>


        {/* Investimento Section */}
        <section id="investimento" className="container mx-auto p-6 mt-8">
          <h2 className="text-3xl font-semibold flex items-center mb-4 text-white">
            <FaMoneyBillWave className="text-blue-500 mr-2" /> Investimentos
          </h2>
          <p className="leading-relaxed mb-6 text-white">
            Investir é essencial para construir um futuro financeiro sólido. Existem diversas opções, como ações, títulos públicos e fundos imobiliários, cada uma com seu perfil de risco e retorno. Conhecer e diversificar seus investimentos é uma estratégia eficaz para maximizar ganhos e minimizar riscos.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Ações</h3>
              <p>Invista em empresas e participe dos lucros através da bolsa de valores.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Títulos Públicos</h3>
              <p>Uma opção segura e de renda fixa para investidores iniciantes e avançados.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Fundos Imobiliários</h3>
              <p>Receba aluguéis através do investimento em imóveis comerciais e residenciais.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Criptomoedas</h3>
              <p>Explore o mundo das moedas digitais e suas oportunidades de valorização.</p>
            </li>
          </ul>
        </section>

        {/* Inflação Mundial Section */}
        <section id="inflacao" className="container mx-auto p-6 mt-8 bg-white rounded-lg shadow-md text-black md:w-3/4">
          <h2 className="text-3xl font-semibold flex items-center mb-4">
            <FaChartLine className="text-blue-500 mr-2" /> Inflação Mundial
          </h2>
          <p className="leading-relaxed">
            A inflação mundial afeta todos os setores da economia. Recentemente, diversos países têm enfrentado um aumento na inflação devido a fatores como crises sanitárias, políticas econômicas e desequilíbrios no comércio global. Acompanhar as taxas de inflação ao redor do mundo é fundamental para entender o cenário econômico atual.
          </p>
        </section>

        {/* Criptomoedas Section */}
        <section id="criptomoedas" className="container mx-auto p-6 mt-8 bg-white rounded-lg shadow-md text-black md:w-3/4">
          <h2 className="text-3xl font-semibold flex items-center mb-4">
            <FaBitcoin className="text-blue-500 mr-2" /> Criptomoedas
          </h2>
          <p className="leading-relaxed">
            As criptomoedas ganharam destaque como uma nova forma de investimento e transação digital. Bitcoin, Ethereum e outras altcoins oferecem oportunidades de lucro, mas também apresentam grandes riscos devido à sua volatilidade. Manter-se informado sobre as tendências do mercado cripto é crucial para investidores dessa área.
          </p>
        </section>

        {/* Notícias Section */}
        <section className="container mx-auto p-6 mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-white mb-4">
                  {article.description || "Sem descrição disponível."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ler mais
                </a>
              </div>
            ))}
          </div>
        </section>
        <Chatbot />
      </main>
    </>
  );
}