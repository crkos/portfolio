export interface Images {
    id: string;
    url: string
}

export interface Projects {
    title: string,
    tags: string[],
    img: Images[],
    link: string,
    gitLink: string
}