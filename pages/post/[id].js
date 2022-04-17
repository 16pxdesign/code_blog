import ReactMarkdown from "react-markdown";
import Link from "next/link";
import rehypeRaw from 'rehype-raw';
import {getFileContent, getFileNames} from "../../lib/file";

const Post = ({content, meta: {tags}}) => <div>
    <>{
        tags.replace(/\s/g, '').split(',').map(item => (<div key={item} ><Link href={'/tags/'+item}><a>{item}</a></Link><br/></div>))
    }</>

    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content}/>
</div>;


export const getStaticPaths = async () => {

    const paths = getFileNames('posts').map(name => ({
        params: {
            id: name
        }
    }));

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({params: {id}}) => {

    let {content, data} = getFileContent('posts',id)
    return {
        props: {
            content: content,
            meta: data
        }
    }

}

export default Post