interface DetailsProps {
    logo: JSX.Element;
    sosmed: string;
    link: string;
}

export default function Details({ logo, sosmed, link }: DetailsProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex p-1.5 px-2 rounded-lg border-2 border-black items-center gap-2 hover:text-blue-600 transition">
            {logo} | 
            <span className="font-semibold">{sosmed}</span>
        </a>
    );
}
