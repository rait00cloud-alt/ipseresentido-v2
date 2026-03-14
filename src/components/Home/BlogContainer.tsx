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
  },
  {
    id: "sigilo-da-psicologia",
    title: "O que é o sigilo da psicologia e como ele funciona?",
    description: "Entenda o que é o sigilo profissional do psicólogo, o que ele protege e quais são suas exceções previstas pelo Código de Ética.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "08 Mar 2026"
  },
  {
    id: "psicologia-infantil-quando-levar",
    title: "Psicologia infantil: saiba quando levar o seu filho ao psicólogo",
    description: "Entenda os sinais que indicam que uma criança pode se beneficiar do acompanhamento psicológico e como funciona esse processo.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "5 min",
    date: "09 Mar 2026"
  },
  {
    id: "psicoterapia-adolescentes-problemas",
    title: "Como a psicoterapia ajuda os adolescentes a enfrentarem seus problemas?",
    description: "A adolescência é uma fase intensa de transformações. Entenda como a psicoterapia pode ser um suporte fundamental para os jovens.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "10 Mar 2026"
  },
  {
    id: "psicoterapia-o-que-e-como-funciona",
    title: "Psicoterapia: O que é e como funciona?",
    description: "Um guia completo para quem quer entender o que é psicoterapia, como funciona o processo e o que esperar das sessões.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "6 min",
    date: "11 Mar 2026"
  },
  {
    id: "ansiedade-normal-ou-patologica",
    title: "Ansiedade: quando ela é normal e quando procurar ajuda?",
    description: "Nem toda ansiedade é patológica. Saiba diferenciar a ansiedade saudável do transtorno e entenda quando é hora de buscar apoio profissional.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "12 Mar 2026"
  },
  {
    id: "depressao-ou-tristeza",
    title: "Como diferenciar depressão da tristeza e quando buscar ajuda?",
    description: "Tristeza e depressão não são a mesma coisa. Entenda as diferenças, os sinais de alerta e quando é hora de procurar um profissional.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "5 min",
    date: "13 Mar 2026"
  },
  {
    id: "o-que-acontece-em-uma-sessao",
    title: "O que realmente acontece em uma sessão de psicoterapia?",
    description: "Muita gente tem curiosidade sobre o que acontece numa sessão de terapia. Vamos desmistificar esse processo.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "14 Mar 2026"
  },
  {
    id: "talvez-voce-precise-de-terapia",
    title: "Talvez você precise de terapia se…",
    description: "Alguns sinais sutis — e nem tão sutis — de que pode ser hora de buscar acompanhamento psicológico.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "4 min",
    date: "15 Mar 2026"
  },
  {
    id: "como-saber-se-preciso-de-terapia",
    title: "Como saber se eu preciso de terapia?",
    description: "Uma reflexão honesta sobre os sinais que indicam que pode ser hora de buscar acompanhamento psicológico.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "16 Mar 2026"
  },
  {
    id: "relacionamento-precisa-de-apoio",
    title: "Como saber se meu relacionamento precisa de apoio?",
    description: "Todo relacionamento passa por fases difíceis. Mas como saber quando é hora de buscar ajuda profissional?",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "5 min",
    date: "17 Mar 2026"
  },
  {
    id: "o-que-e-a-nr1",
    title: "O que é a lei NR1 e o que ela muda?",
    description: "A atualização da NR-1 passou a exigir que empresas gerenciem riscos psicossociais no trabalho. Entenda o que muda na prática.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "5 min",
    date: "18 Mar 2026"
  },
  {
    id: "orientacao-parental-como-ajuda",
    title: "Como a orientação dos pais pode me ajudar?",
    description: "A orientação parental não é só para quando as coisas estão difíceis. Entenda como esse acompanhamento pode transformar a relação com seus filhos.",
    imgSrc: "/photos/blog-ansiedade.png",
    readTime: "5 min",
    date: "19 Mar 2026"
  },
  {
    id: "meu-filho-tem-um-diagnostico",
    title: "Meu filho tem um diagnóstico e agora?",
    description: "Receber o diagnóstico de um filho pode ser avassalador. Entenda como processar essa notícia e quais são os próximos passos.",
    imgSrc: "/photos/blog-saude.png",
    readTime: "6 min",
    date: "20 Mar 2026"
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
