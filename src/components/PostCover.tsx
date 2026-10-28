import Icon from "./Icon";
import type { Post } from "@/lib/posts";

const styles: Record<Post["category"], { gradient: string; icon: string }> = {
  Guias: { gradient: "from-purple-600 via-fuchsia-600 to-pink-500", icon: "star" },
  Instalação: { gradient: "from-sky-600 via-blue-600 to-indigo-600", icon: "tv" },
  Dicas: { gradient: "from-amber-500 via-orange-500 to-rose-500", icon: "bolt" },
  Comparações: { gradient: "from-emerald-500 via-teal-600 to-cyan-600", icon: "hd" },
};

// Generated cover so articles look finished without stock photos.
export default function PostCover({ post, large = false }: { post: Post; large?: boolean }) {
  const s = styles[post.category];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${s.gradient} ${large ? "aspect-[16/9]" : "aspect-[16/8]"}`}>
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Icon
        name={s.icon}
        className={`absolute -bottom-6 -right-6 text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
          large ? "h-56 w-56" : "h-36 w-36"
        }`}
      />
      <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur">
        {post.category}
      </span>
      <p className={`absolute bottom-4 left-4 right-16 font-extrabold leading-tight text-white ${large ? "text-2xl md:text-3xl" : "text-lg"}`}>
        {post.keyword}
      </p>
    </div>
  );
}
