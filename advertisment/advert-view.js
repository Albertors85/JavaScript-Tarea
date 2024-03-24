export function buildAdvert (advert){

    return`
        <h1>anuncios</h1>
        <span>${advert.name}</span>
        <p>${advert.description}</p>
        <p>${advert.user}</p>
        <span>${advert.cost}</span>
        <span>${advert.statu}</span>
        
    `
}