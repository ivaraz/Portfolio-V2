type TotalItem = {
  total: string;
  title: string;
};

export default function Card({ total, title }: TotalItem) {
  return (
    <div className="w-full max-w-[15rem] flex flex-col items-center gap-1 justify-center border-2 border-black rounded-lg p-4 bg-white shadow-lg">
      <h1 className="text-3xl font-bold">{total}</h1>
      <p className="text-sm">{title}</p>
    </div>
  );
}
