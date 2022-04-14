import fs from "fs";
import async from "async";
import highland from "highland";
import path from "path";
import Link from 'next/link'

const Tag = ({data,links}) => <div>{data} contains {links}
    <hr/>
    {
        links.map(item => (<><Link href={'/post/'+item}><a>{item}</a></Link><br/></>))
    }
</div>;

export const getStaticPaths = async () => {
    let tagsarr = [];


    const files = fs.readdirSync('posts');

    await async.filterSeries(files, (file, cb) => {
        const fileStream = fs.createReadStream(path.join('posts', file));


        highland(fileStream)
            .split()
            .take(4)
            .toArray((lines) => {
                let split = lines[3].split(':');
                split.shift()
                const tags = split[0].split(',') //fixme: spacing in split not work well .
                let map = tags.map(m=>(
                    {
                        name: m.replace(" ", ""),
                        file: file.replace(".md", "")
                    }
                ));
                tagsarr = [...tagsarr, ...map]

                cb(null, true);
            });
    });

    let reduce = tagsarr.reduce((group, item)=>{
        group[item.name] = group[item.name] || []
        group[item.name].push(item.file)
        return group
    },{});


    console.log( 'reduce', reduce)

    fs.writeFileSync(path.join('temp', 'temp.txt'), JSON.stringify(reduce))


    const paths = tagsarr.map(tag => (  {
        params: {
            tag: tag.name
        }
    }))

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async ({params}) => {

    const data = fs.readFileSync(path.join('temp', 'temp.txt'),
        {encoding:'utf8', flag:'r'});
    console.log('data',JSON.parse(data))


    console.log('inlinks' , params)

    return {
        props: {
            data: params.tag,
            links: JSON.parse(data)[params.tag]
        }
    }
}

export default Tag;