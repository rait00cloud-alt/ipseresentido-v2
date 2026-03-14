
// Cores para cada tipo de tag — paleta do instituto
const TAG_COLORS: Record<string, string> = {
  'Saúde Mental':          'bg-[#5e4e27]',   // marrom principal
  'Psicoterapia':          'bg-[#7a6340]',   // marrom médio
  'Bem-estar':             'bg-[#d7a21e]',   // dourado
  'Psicologia Infantil':   'bg-[#a0845c]',   // terracota suave
  'Adolescência':          'bg-[#8c7355]',   // marrom arenoso
  'Parentalidade':         'bg-[#b8956a]',   // bege escuro
  'Relacionamentos':       'bg-[#6b5744]',   // marrom profundo
  'Saúde Mental no Trabalho': 'bg-[#4a3f2f]', // marrom escuro
  'Ética e Profissão':     'bg-[#9e8060]',   // bronze
  'default':               'bg-[#5e4e27]',
};

export default function BlogCard({ title, description, image, slug, type, por, data, socials }) {
  const tagColor = TAG_COLORS[type] || TAG_COLORS.default;
  
  return (
    <a href={`/blog/${slug}`} className="group block">
      <div className="rounded-xl bg-white/70 border border-white/10 transition-all duration-300 group:hover:scale-[1.02]">

      <div className="flex flex-row">

        <div className={`flex flex-row ${tagColor} w-full max-w-max`}>
            <h4 className="font-[BrandonBold] px-2 text-white tracking-tight">{type}</h4>
        </div>

        <div className="h-[3px] bg-black w-full"/>
      </div>

      <div className="flex flex-col p-4">
          <h2 className="text-black font-[BrandonBold] text-2xl mb-3">{title}</h2>
          <p className="text-black font-[BrandonRegular] line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-row gap-2">
            <p className="text-black font-[BrandonMedium] text-sm">
            Por {por}
          </p>
           <p className="text-black font-[BrandonLight] text-sm">
            {data}
          </p>
          </div>
        </div>
      
        <img src={image} className="w-full h-56 object-cover" />
      
      </div>
    </a>
  );
}
