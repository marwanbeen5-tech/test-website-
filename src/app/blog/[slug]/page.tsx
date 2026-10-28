import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell title={post.title} intro={post.date}>
      {post.body.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </PageShell>
  );
}
