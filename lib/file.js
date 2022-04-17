import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFileNames = (path) => {
    return fs.readdirSync(path).map((file) => {
        return file.replace(".md", "")
    });
}

export const getFileContent = (dir, file) => {
    const read = fs.readFileSync(path.join(dir, file + '.md')).toString();
    return matter(read);
}

export const getFilesMeta = () => {
    const dir = 'posts'
    const files = getFileNames(dir);
    return files.map(file => {
        const {data} = getFileContent(dir, file);
        return {
            file: file + '.md',
            ...data
        }
    })
}

export const saveFilesMeta = (data) => {
    fs.writeFileSync(path.join('temp', 'temp.txt'), JSON.stringify(data))
}

