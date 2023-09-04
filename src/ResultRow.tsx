import paybisLogo from './assets/paybis.png';

type ResultRowProps = {
    loading?: boolean;
    providerName?: string;
    pkr?: string;
    btc?: string;
};

type logo = {
    source:string, 
    invert?:boolean };
const logos:{[keys:string]:logo} = {
    paybis: {source:paybisLogo},
    guardarian:{ source: 'https://guardarian.com/main-logo.svg'},
    transak: {source:'https://assets.transak.com/images/website/transak-logo.svg'},
};

export default function ResultRow({loading, providerName,btc}:ResultRowProps){
let url = `https://${providerName}.com`;
if(providerName === 'guardian'){
    url += '/buy-btc';
}
    return(
        <a 
        href={url}
        target='_blank'
        className="block overflow-hidden relative rounded-lg border h-[64px] border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2">
            <div className="flex gap-4">
                {providerName && (
                    <div className='grow flex items-center'>
                        <img src={logos[providerName].source} 
                        className={"h-8"+ (logos[providerName]?.invert ? 'invert' : '')}
                        alt="" />
                    </div>
                )}
                
                
                {btc && (
                    <div className="flex gap-2">
                    <span className="text-xl text-purple-200/80">
                        {pkr}
                    </span>
                    <span className="text-xl text-purple-200/80">PKR</span>
                    <span className=" gap-2 text-xl text-purple-200/80">
                        {new Intl.NumberFormat('sv-SE', {minimumFractionDigits:8}).format(parseFloat(btc))}
                    </span>
                    <span className="text-xl text-purple-300/50">BTC</span>
                </div>
                ) }
            </div>
            {loading && (
                <div className="bg-gradient-to-r from-transparent via-blue-900/50 to-transparent skeleton-animation inset-0 absolute"></div>
            )}
        </a>
    );
}