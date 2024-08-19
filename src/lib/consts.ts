type FavoritesList = {
    games: { title: string; link: string; }[];
    wip: { title: string; link: string; } [];
    getKeys: () => ["games", "wip"];
};

export const myFavoritesList: FavoritesList = {
    games: [
        {
            title: "The Legend Of Zelda: Breath of the Wild - Tears of the Kingdom",
            link: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-112383/"
        },
        {
            title: "OneShot",
            link: "https://store.steampowered.com/app/420530/OneShot/"
        },
        {
            title: "Super Smash Bros. Ultimate/4",
            link: "https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-us/"
        },
        {
            title: "Mario Kart 8/8D/Wii/DS",
            link: "https://www.nintendo.com/us/store/products/mario-kart-8-deluxe-switch/"
        },
        {
            title: "Five Nights at Freddy's (1 - UCN)",
            link: "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/"
        },
        {
            title: "Super Mario Bros. Wonder",
            link: "https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/"
        }
    ],
    wip: [
        {
            title: "WiP",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ],
    getKeys: function() {
        return ["games", "wip"];
    }
};