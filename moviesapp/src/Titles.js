import { movies } from "./Movies";

const titles = [];
movies.forEach(movie=>titles.push(movie.title.trim().toLocaleLowerCase()));

export {titles};