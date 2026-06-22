import Link from "next/link";
import { posts } from "../../lib/blog";
export const metadata={title:"Blog Profesional",description:"Artículos sobre prevención de riesgos, D.S. 44, CPHS, matrices de riesgo y masoterapia."};
export default function Blog(){return <main><section className="section"><div className="container"><div className="eyebrow">Blog SEO</div><h1>Blog Profesional</h1><p>Contenido educativo para empresas y personas.</p><div className="grid-3" style={{marginTop:28}}>{posts.map(post=><Link className="card" href={`/blog/${post.slug}`} key={post.slug}><span className="badge">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p></Link>)}</div></div></section></main>}
