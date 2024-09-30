import Chatbot from '@/components/Chatbot.tsx/ChatBot';
import StockMarquee from '@/components/carrossel';
import Head from 'next/head';
import { FC } from 'react';
import { FaMoneyBillWave, FaChartLine, FaBitcoin } from 'react-icons/fa';

const Economia: FC = () => {
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
        <section className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.pikbest.com%2Fbackgrounds%2Fqiantu-financial-economy-stock-banner-poster_2756452.html&psig=AOvVaw2Mzy5We1fGKcQMxRs1gLao&ust=1727467807037000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDr6-a14YgDFQAAAAAdAAAAABAE  ")' }}>
          <h2 className="text-4xl font-bold">Tudo sobre Economia e Investimentos</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
            <article className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Mercado de Ações em Alta</h3>
              <p>Os índices das bolsas globais apresentam recuperação, impulsionados pelos bons resultados das empresas de tecnologia.</p>
            </article>
            <article className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Inflação na Zona do Euro</h3>
              <p>A inflação na Zona do Euro atinge recorde em 2024, colocando pressão sobre as políticas econômicas do bloco.</p>
            </article>
            <article className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Bitcoin em Alta</h3>
              <p>Após um período de baixa, o Bitcoin mostra sinais de recuperação, despertando o interesse de investidores ao redor do mundo.</p>
            </article>
          </div>
        </section>

        <Chatbot />
      </main>
    </>
  );
};

export default Economia;