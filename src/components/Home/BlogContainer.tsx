import { motion } from "framer-motion";
import React from "react";
import { Clock } from "lucide-react";

const BLOG_ARTICLES = [
  {
    id: "ansiedade-quando-buscar-ajuda",
    title: "Ansiedade: Quando a Preocupação se Torna um Problema",
    description: "Entenda a diferença entre ansiedade normal e transtorno de ansiedade, seus sintomas e quando buscar ajuda profissional.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "6 min",
    date: "07 Mar 2026"
  },
  {
    id: "saude-mental-importancia",
    title: "Saúde Mental: Por Que Cuidar da Mente é Tão Importante",
    description: "Descubra por que a saúde mental merece a mesma atenção que a saúde física e como a psicoterapia pode transformar sua vida.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "7 min",
    date: "07 Mar 2026"
  }
];

const BlogContainer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-16 px-8 bg-[#faf8f5]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-[BrandonBold] text-[#5e4e27]">
            Destaques do Blog
          </h2>
          <a 
            href="/blog" 
            className="text-sm font-[BrandonMedium] text-[#d7a21e] hover:text-[#c89219] transition-colors"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.a
              key={article.id}
              href={`/blog/${article.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.imgSrc}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-[BrandonBold] text-[#5e4e27] mb-2 group-hover:text-[#d7a21e] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-[#6a5a4a] text-sm font-[BrandonRegular] mb-4 line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-[#6a5a4a] font-[BrandonLight]">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
