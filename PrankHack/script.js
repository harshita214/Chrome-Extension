
function check()
{

    const images=document.querySelectorAll('img');
    for(let i=0;i<images.length;i++)
    {
    images[i].src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SGVC32iBAqd8XnxPh6gnyNNWI49mzXQfxg9DQmJ_sZOFIOGjPnJ0RX9hxuBtembBZrA&usqp=CAU';
    }

}
setInterval(() => {
    check();
}, 100);