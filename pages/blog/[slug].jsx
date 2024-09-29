import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownHtml from 'zenn-markdown-html';  // 追加
import 'zenn-content-css';  // ZennのCSSを読み込む

export default function BlogPost({ frontmatter, content }) {
  return (
    <div className="znc prose dark:prose-dark mx-auto">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/blog'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/blog', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Zenn形式のMarkdownをHTMLに変換
  const contentHtml = markdownHtml(content);

  return {
    props: {
      frontmatter,
      content: contentHtml,
    },
  };
}
