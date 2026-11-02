import { ImageResponse } from "next/og";
import { author } from "@/lib/authors";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const alt = "Guia IPTV Portugal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Share image for one article: category, title and byline on the brand gradient.
export default async function Image({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await Promise.resolve(params);
  const post = posts.find((p) => p.slug === slug);
  const title = post?.title ?? site.name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #07070d 0%, #2a1050 60%, #5b1240 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              background: "linear-gradient(90deg, #7c3aed, #ec4899)",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {post?.category ?? "Blog"}
          </div>
          <div style={{ fontSize: 26, color: "#d4d4e4" }}>Blog IPTV Portugal</div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 55 ? 60 : 68, fontWeight: 800, lineHeight: 1.12 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#d4d4e4" }}>
          <span>Por {author.name}</span>
          <span style={{ color: "#ec4899", fontWeight: 700 }}>portugaliptv.top</span>
        </div>
      </div>
    ),
    size
  );
}
