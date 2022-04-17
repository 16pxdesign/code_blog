import Link from 'next/link'
import {getFilesMeta} from "../../lib/file";

const Tag = ({data,links}) => <div>{data} contains {links}
    <hr/>
    {
        links?.map(item => (<div key={item}><Link href={'/post/'+item}><a>{item}</a></Link><br/></div>))
    }
</div>;

export const getStaticPaths = async () => {

    console.log(getFilesMeta())

    const filter = getFilesMeta()
        .map(x=>x.tags.split(', '))
        .flat()
        .filter((v, i, a) => a.indexOf(v) === i)
        .map(tag => (  {
            params: {
                tag: tag
            }
        }))

    console.log(filter)


    return {
        paths: filter,
        fallback: false,
    }

}

export const getStaticProps = async ({params}) => {

    return {
        props: {
            data: params.tag,
        //    links: []
        }
    }
}

export default Tag;