function allLetter(inputtxt)
{
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters))
    {
        alert('Your name has accepted : you can try another');
        return true;
    }
    else
    {
        alert('Please input alphabet characters only');
        return false;
    }
}