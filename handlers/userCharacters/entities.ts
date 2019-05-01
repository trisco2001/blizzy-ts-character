interface Character {
    name: string
    server: string
}

interface PostingUserCharacters {
    userId: string
    characters: [Character]
}

interface PostedUserCharacters {
    id: string
    userId: string
    characters: [Character]
}
