import fs from "fs";
import async from "async";
import highland from "highland";
import path from "path";

const Tag = ({data}) => <div>{data}</div>;
/*
function resolveAfter2Seconds(tagsarr) {
    return new Promise(resolve => {
        const files = fs.readdirSync('posts');

        async.filterSeries(files, (file, cb) => {
            const fileStream = fs.createReadStream(path.join('posts', file));

            highland(fileStream)
                .split()
                .take(4)
                .toArray((lines) => {
                  //  console.log(lines)
                    let split = lines[3].split(':');
                    split.shift()
                    const tags = split[0].split(', ')
                    tagsarr = [...tagsarr, ...tags]
                   // console.log(tagsarr)
                    cb(null, true);
                });
        }, (err, validFiles) => {
            //console.log(validFiles);  // => Prints a list of all valid files

            resolve(tagsarr)

        });
    });
}
*/

export const getStaticPaths = async () => {
    let tagsarr = [];
    //get all tags from files



   // let newVar = await resolveAfter2Seconds(tagsarr);

   // tagsarr = [... newVar]

    const files = fs.readdirSync('posts');

    await async.filterSeries(files, (file, cb) => {
        const fileStream = fs.createReadStream(path.join('posts', file));

        highland(fileStream)
            .split()
            .take(4)
            .toArray((lines) => {
                //  console.log(lines)
                let split = lines[3].split(':');
                split.shift()
                const tags = split[0].split(', ') //fixme: spacing in split not work well .
                tagsarr = [...tagsarr, ...tags]
                // console.log(tagsarr)
                cb(null, true);
            });
    });



    console.log('tttttttttttttttttttttttttttttttttttttttttt', tagsarr)
    return {
        paths:  tagsarr.map(name => ({
            params: {
                tag: name
            }
        })),
        fallback: false
    }

}

export const getStaticProps = async ({params: {tag}}) => {

    return {
        props: {
            data: tag
        }
    }
}

export default Tag;