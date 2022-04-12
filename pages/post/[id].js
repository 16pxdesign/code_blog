import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";

const Post = ({content, meta}) => <div>
    <ReactMarkdown children={content}/>
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