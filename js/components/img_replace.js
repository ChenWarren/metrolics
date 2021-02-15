function imgReplace(imgSrc)
{
    let imgs = document.getElementsByTagName('img')

    for (i=0; i < imgs.length; i++)
    {
        // imgs[i].src = 'img/minibus.jpg'
        imgs[i].src = imgSrc

    }
}