export class Card {

    constructor(card: Card){
        this.bio = card.bio
        this.name = card.name
        this.photo_url = card.photo_url
        this.title = card.title
    }

    bio: string | null = null
    name: string | null = null
    photo_url: string | null = null
    title: string | null = null
}