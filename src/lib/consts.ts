type FavoritesList = {
	games: { title: string; link: string }[];
	songs: { title: string; link: string }[];
	getKeys: () => ['games', 'songs'];
};

export const myFavoritesList: FavoritesList = {
	games: [
		{
			title: 'The Legend Of Zelda: Breath of the Wild - Tears of the Kingdom',
			link: 'https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-112383/'
		},
		{
			title: 'OneShot',
			link: 'https://store.steampowered.com/app/420530/OneShot/'
		},
		{
			title: 'Super Smash Bros. Ultimate/4',
			link: 'https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-us/'
		},
		{
			title: 'Mario Kart 8/8D/Wii/DS',
			link: 'https://www.nintendo.com/us/store/products/mario-kart-8-deluxe-switch/'
		},
		{
			title: "Five Nights at Freddy's (1 - UCN)",
			link: 'https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/'
		},
		{
			title: 'Super Mario Bros. Wonder',
			link: 'https://www.nintendo.com/us/store/products/super-mario-bros-wonder-switch/'
		}
	],
	songs: [
		{
			title: 'Never Gonna Give You Up',
			link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: "L'incroyable vie des choses",
			link: 'https://www.youtube.com/watch?v=Pb2LwzsWBvI'
		},
		{
			title: 'Taswell',
			link: 'https://www.youtube.com/watch?v=Mj6jF7I2s10'
		}
	],
	getKeys: function () {
		return ['games', 'songs'];
	}
};
