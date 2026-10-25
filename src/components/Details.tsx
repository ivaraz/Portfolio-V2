interface DetailsProps {
    logo: JSX.Element;
    sosmed: string;
    link: string;
    isDownload?: boolean;
}

export default function Details({ logo, sosmed, link, isDownload }: DetailsProps) {
    return (
        <a href={link} download={isDownload} target="_blank" rel="noopener noreferrer" className="flex p-1.5 px-2 rounded-lg border-2 border-slate-300 dark:border-white/20 justify-center items-center gap-2 hover:text-slate-900 dark:hover:text-pink-400 transition">
            {logo} | 
            <span className="font-semibold">{sosmed}</span>
        </a>
    );
}
