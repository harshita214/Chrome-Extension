
//Content.Js Code -

let funnyim = [ "https://i.kym-cdn.com/photos/images/original/000/317/354/602.jpg",
                "https://i.pinimg.com/originals/c6/b8/e5/c6b8e543a613641fe6bd830e4a9bfb01.jpg",
                "https://c.tenor.com/CxWHSGcbPB4AAAAd/dog-stare.gif" ];
const imgs = document.getElementsByTagName("img");
const headers = document.getElementsByTagName('p');
    for(let i=0;i<headers.length;i++) {
    headers[i].innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, augue et sollicitudin accumsan, lorem odio ornare risus, nec vulputate mauris mauris vel tellus. Vestibulum tempus augue erat, id sodales tellus finibus ac. Nulla blandit in est non imperdiet. Sed quis nibh vitae augue eleifend pulvinar. Quisque non porta velit. Pellentesque vitae leo non eros ultrices fringilla. Donec feugiat neque sapien, placerat laoreet diam luctus sed. Phasellus finibus elit et massa suscipit, nec gravida nulla semper. Phasellus feugiat velit vitae ligula mattis, in sodales sapien tincidunt. Pellentesque ac dignissim ante.";
    }
    for(let i=0; i<imgs.length; i++)
    {
        const randomImg = Math.floor(Math.random() * funnyim.length);
        imgs[i].src = funnyim[randomImg];
    }
    let paragraphs = document.getElementsByTagName('p');
    for( elt of paragraphs) {
        elt.style['background-color'] = '#FF0000';
}

alert("Click OK \nFOR THE LOVE OF DOGGIES!");



