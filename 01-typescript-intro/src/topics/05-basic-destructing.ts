interface AudioPlayer {
    audioVolume: number,
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 5,
    song: "Yesterday",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song,songDuration:duration } = audioPlayer;
const { author } = audioPlayer.details;

// console.log('SONG : ', song);
// console.log('SON : ', duration);

// console.log('author: ', author);

const [, , p3 = 'Not found'] = ['Goku', 'Vegeta'];
console.error(p3);



