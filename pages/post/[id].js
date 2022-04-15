import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import rehypeRaw from 'rehype-raw'

const Post = ({content, meta: {tags}}) => <div>
    <>{
        tags.replace(/\s/g, '').split(',').map(item => (<div key={item} ><Link href={'/tags/'+item}><a>{item}</a></Link><br/></div>))
    }</>

    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content}/>
</div>;


export const getStaticPaths = async () => {

    const files = fs.readdirSync('posts');

    return {
        paths:  files.map(name => ({
            params: {
                id: name.replace(".md", "")
            }
        })),
        fallback: false
    }
};

export const getStaticProps = async ({params: {id}}) => {

    const file = fs.readFileSync(path.join('posts',id + '.md')).toString();
    let content = matter(file);
    return {
        props: {
            content: content.content,
            meta: content.data
        }
    }

}

export default Post