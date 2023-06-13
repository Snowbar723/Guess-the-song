const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const anime = document.querySelector(".anime");
const dataIn = document.querySelector(".dataIn");
const lyric1 = document.querySelector(".lyric1");
const lyric2 = document.querySelector(".lyric2");
const lyric3 = document.querySelector(".lyric3");
const lyric4 = document.querySelector(".lyric4");
const lyricIn = document.querySelector(".lyricIn");
const show = document.querySelector(".lyricShow");

let song = {
    "name":"",
    "lyrics":[]
    }

function reset(){
    let song = {
    "name":"",
    "lyrics":[]
    }
}
let content = ""
song.lyrics.forEach(e){
    
    content+=e
}

dataIn.addEventListener("click",function(e){
    reset()
    song.name = title.value;
    let artistText = "歌手："+artist.value;
    let animeText = "アニメ："+anime.value;
    song.lyrics.push(artistText);
    song.lyrics.push(animeText);
    show.textContent()
})

lyricIn.addEventListener("click",function(e){
    if(lyric1.value !== ""){
        song.lyrics.push(lyric1.value);
    }
    if(lyric2.value !== ""){
        song.lyrics.push(lyric2.value);
    }
    if(lyric3.value !== ""){
        song.lyrics.push(lyric3.value);
    }
    if(lyric4.value !== ""){
        song.lyrics.push(lyric4.value);
    }
})