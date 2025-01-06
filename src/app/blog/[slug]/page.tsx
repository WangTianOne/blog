import Layout from "../layout";
import { promises as fs } from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  // 确保 params 是异步获取的
  const { slug } = await params;
  const markdownPath = path.join('src', 'app', 'blog', 'post', `${slug}.md`);
  
  // 读取 Markdown 文件内容
  try {
    const fileContents = await fs.readFile(markdownPath, 'utf8');
    const { content } = matter(fileContents);
    // 解析 Markdown 为 HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    
    return (
      <Layout>
        <article className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Layout>
    );
  } catch {
    notFound();
  }
}
