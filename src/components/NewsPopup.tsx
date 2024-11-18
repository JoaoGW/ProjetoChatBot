import React, { useEffect, useState } from "react";

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

type NewsPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewsPopup: React.FC<NewsPopupProps> = ({ isOpen, onClose }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          .slice(0, 12);

        setArticles(filteredArticles);
        setLoading(false);
      } catch (err) {
        setError("Não foi possível carregar as notícias.");
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchNews();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-4xl p-6 shadow-lg max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Últimas Notícias</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-gray-800 transition"
          >
            Fechar
          </button>
        </div>
        {loading ? (
          <div>Carregando notícias...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold mb-2 text-black">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {article.description || "Sem descrição disponível."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-500 hover:underline"
                >
                  Ler mais
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPopup;