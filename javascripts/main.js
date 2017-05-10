console.log("hello main.js");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// console.log(songs);
// Add one song to the beginning and the end of the array.
songs.unshift("Morning Bell > by Radiohead on the album Kid A");
songs.push("Exit Music > by Brad Mehldau on the album Art of the Trio");
// console.log("songs", songs);


// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.
for (var i = 0; i < songs.length; i++){
	var songList = songs[i];
	// console.log("this songlist", songList);
	var correctSonglist = songs[i].replace(/[@!*(]/g, "")
	.replace(/>/g, '-');
	console.log(correctSonglist);
	document.getElementById("songs").innerHTML += correctSonglist;
}
