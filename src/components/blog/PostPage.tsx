import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function PostPage({ post }) {
  return (
    <div className="relative max-w-4xl mx-auto p-4 pt-16 sm:py-24">
      <img src={post.data.cover} className="w-full rounded-xl" />

    <div className="flex flex-col gap-2 py-8">
      <h1 className="text-2xl font-[BrandonBold]">
        {post.data.title}
      </h1>

      <p className="text-lg text-black/80 font-[BrandonRegular]">
        {post.data.description}
      </p>

        <div className="flex flex-row gap-2">
            <p className="text-black font-[BrandonMedium] text-sm">
            Por {post.data.por}
          </p>
           <p className="text-black font-[BrandonLight] text-sm">
            {post.data.data}
          </p>
          </div>

          </div>

        <article className="prose prose-lg max-w-none font-[BrandonRegular] text-black [&_p]:mb-6">
       <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="font-[BrandonBold] uppercase bg-[#d7a21e] max-w-max px-2 text-white sm:text-2xl mb-6 text-lg"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-[BrandonBold] text-xl mt-8 mb-4"
                {...props}
              />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>

      </article>


    <div className="flex flex-col items-center gap-4 mt-12 pt-8 border-t border-[#d7a21e]/20">
        <img 
          src="/logo/favicon.png" 
          alt="Instituto de Psicologia Ser e Sentido"
          className="w-16 h-16 opacity-80"
        />
        
        <div className="flex flex-row gap-4">
          <a 
            target="_blank"
            href="https://www.instagram.com/institutoseresentido/"
            className="bg-[#d7a21e] text-white px-4 py-2 rounded-full font-[BrandonMedium] text-sm hover:bg-[#c89219] transition-colors"
          >
            Instagram
          </a>
          
          <a 
            target="_blank"
            href="https://www.ipseresentido.com.br"
            className="bg-[#5e4e27] text-white px-4 py-2 rounded-full font-[BrandonMedium] text-sm hover:bg-[#4a3a2a] transition-colors"
          >
            Website
          </a>
        </div>
      </div>

    </div>
  );  
}
