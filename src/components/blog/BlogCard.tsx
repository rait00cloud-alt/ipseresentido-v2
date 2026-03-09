
// Cores para cada tipo de tag
const TAG_COLORS = {
  'Notícia': 'bg-blue-600',
  'Educação Financeira': 'bg-green-600',
  'Seguros': 'bg-purple-600',
  'Planejamento': 'bg-orange-600',
  'Investimentos': 'bg-teal-600',
  'Saúde Mental': 'bg-[#d7a21e]',
  'Bem-estar': 'bg-[#5e4e27]',
  'default': 'bg-gray-600'
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
