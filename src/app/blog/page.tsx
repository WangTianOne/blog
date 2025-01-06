import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  title: string;
  slug: string;
}

export default async function Blog() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'post');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      title: data.title || '未命名标题',
      slug: filename.replace('.md', ''),
    };
  });
  
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '25%', paddingRight: '20px' }}>
        <h2>文章列表</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`./blog/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main style={{ width: '75%' }}>
        <h1>博客文章标题</h1>
        {/* 这里可以添加主要内容 */}
      </main>
    </div>
  );
}
