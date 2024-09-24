import React from 'react';

interface StockItem {
    name: string;
    value: string;
    change: string;
    url: string;
}

const stocks: StockItem[] = [
    { name: 'Ibovespa', value: '134.806pts', change: '-0,23%', url: '/ibovespa' },
    { name: 'DÓLAR', value: 'R$5,50', change: '-0,15%', url: '/dolar' },
    { name: 'BITCOIN', value: 'R$324.112', change: '+1,51%', url: '/bitcoin' },
    { name: 'PETR3', value: 'R$32,50', change: '+0,30%', url: '/petr3' },
    { name: 'VALE3', value: 'R$93,20', change: '-0,45%', url: '/vale3' },
    { name: 'ITUB4', value: 'R$31,40', change: '+0,65%', url: '/itub4' },
    { name: 'B3SA3', value: 'R$11,90', change: '-1,12%', url: '/b3sa3' },
    { name: 'WEGE3', value: 'R$70,30', change: '+0,85%', url: '/wege3' },
    { name: 'BBAS3', value: 'R$54,60', change: '-0,73%', url: '/bbas3' },
    { name: 'CSNA3', value: 'R$14,20', change: '+1,24%', url: '/csna3' },
    { name: 'KROT3', value: 'R$6,50', change: '-2,10%', url: '/krot3' },
    { name: 'MRFG3', value: 'R$21,80', change: '+0,58%', url: '/mrfg3' },
    { name: 'LREN3', value: 'R$85,00', change: '+1,12%', url: '/lren3' },
    { name: 'COGN3', value: 'R$6,10', change: '-0,48%', url: '/cogn3' },
    { name: 'MGLU3', value: 'R$7,80', change: '+0,77%', url: '/mglu3' },
    { name: 'HYPE3', value: 'R$26,90', change: '-0,96%', url: '/hype3' },
    { name: 'GGBR4', value: 'R$13,60', change: '+1,34%', url: '/ggbr4' },
    { name: 'SBSP3', value: 'R$29,20', change: '-0,85%', url: '/sbsp3' },
];

const StockMarquee: React.FC = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-white border-t border-b border-neutral-400 text-black">
            <div className="flex animate-marquee">
                {stocks.map((stock, index) => (
                    <a key={index} href={stock.url} className="relative hover:bg-neutral-200 hover:cursor-pointer px-4 py-2 text-xs flex items-center gap-2 border-r border-neutral-400 last:border-r-0">
                        <span className="font-semibold">{stock.name}</span>
                        <span className="font-normal">{stock.value}</span>
                        <span className={`font-semi-bold ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stock.change}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default StockMarquee;