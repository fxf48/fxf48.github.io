const coverUrl = "http://7xp06y.com1.z0.glb.clouddn.com/music1cover.jpg";
const defaultArtist = "佚名";


const playerlist = [{
    name: 'start dash!',
    url: 'http://7xp06y.com1.z0.glb.clouddn.com/music1.mp3'
}, {
    name: 'start dash!',
    url: 'http://7xp06y.com1.z0.glb.clouddn.com/music1.mp3'
}, {
    name: 'start dash!',
    url: 'http://7xp06y.com1.z0.glb.clouddn.com/music1.mp3'
}, {
    name: 'start dash!',
    url: 'http://7xp06y.com1.z0.glb.clouddn.com/music1.mp3'
}];

for (var i = 0; i < playerlist.length; i++) {
    if (playerlist[i].artist === undefined) {
        playerlist[i].artist = defaultArtist;
    }
    if (playerlist[i].cover === undefined) {
        playerlist[i].cover = coverUrl;
    }
}