//Sound Effect by <a href="https://pixabay.com/users/soundsforyou-4861230/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114354">Micheal</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114354">Pixabay</a>

//this is link to source of mp3 file
function playrain()
{
    mysound = new sound("light-rain-ambient-114354 (1).mp3");
    mysound.play();
}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}

function stoprain()
{
    window.location.reload();
}