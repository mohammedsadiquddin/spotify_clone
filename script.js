console.log("welcome to mysongs");
let audioElement=new Audio('1.mp3');
// audioElement.play();
let songIndex=0;
let play=document.getElementById('play');
let myProgressBar=document.getElementById('myProgressBar');
let musicgif=document.getElementById('musicgif');
let songsItem=Array.from(document.getElementsByClassName('songsItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
songs=[
    {songName:"mere rang me",filePath:"1.mp3"},
    {songName:"pehla nasha",filePath:"2.mp3"},
    {songName:"miyabhai",filePath:"3.mp3"},
    {songName:"astronaut",filePath:"4.mp3"},
    {songName:"mere mehboob",filePath:"5.mp3"},
]
// songsItem.forEach(element => {
//     element.getElementsByClassName('')
// });
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("song is playing....")
        play.classList.remove('fa-play-circle-o');
        play.classList.add('fa-pause-circle-o');
        musicgif.style.opacity=1;
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-pause-circle-o');
        play.classList.add('fa-play-circle-o')
        musicgif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progbar=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progbar;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    songItemPlay.forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
}
songItemPlay.forEach((element) => {
    element.addEventListener("click", (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        musicgif.style.opacity=1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })  
});

document.getElementById('next').addEventListener("click",()=>{
    if(songIndex==4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex==0){
        songIndex = 4;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})

// songItemPlay.forEach((element) => {
//     if(audioElement.isplaying){
//         element.addEventListener("click",(e)=>{
//             makeAllPlays();
//             songIndex=parseInt(e.target.id);
//             musicgif.style.opacity=1;
//             // e.target.classList.remove('fa-play-circle');
//             // e.target.classList.add('fa-pause-circle');
//             audioElement.src=`${songIndex+1}.mp3`;
//             audioElement.currentTime=0;
//             audioElement.pause();
//             play.classList.add('fa-play-circle');
//             play.classList.remove('fa-pause-circle');
//         })
//     }
// });