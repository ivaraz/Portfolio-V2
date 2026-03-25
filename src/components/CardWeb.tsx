type Props = {
  logos: string;
  title: string;
  animate: string;
  duration: number;
};

export default function CardWeb({ title, logos, animate, duration }: Props) {
  return (
    <div
      data-aos={animate}
      data-aos-duration={duration}
      className="group flex flex-col items-center gap-3 justify-center transition-transform hover:-translate-y-1"
    >
      <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group-hover:border-violet-200 dark:group-hover:border-violet-500/30 transition-colors">
        <img src={logos} className="w-7 h-7 lg:w-8 lg:h-8 object-contain transition-transform group-hover:scale-110" />
      </div>
      <h1 className="text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300">{title}</h1>
    </div>
  );
}
