export interface Character {
    name: string
    server: string
}

export interface PostingUserCharacters {
    userId: string
    characters: [Character]
}

export interface PostedUserCharacters {
    id: string
    userId: string
    characters: [Character]
}
