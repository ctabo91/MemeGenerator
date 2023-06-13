let form = document.querySelector('#meme-form');
let memeArea = document.querySelector('#result');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let memeImg = document.querySelector('#img-link').value;
    let topText = document.querySelector('#top-text').value;
    let bottomText = document.querySelector('#bottom-text').value;

    let removeButton = document.createElement('button');

    let newMeme = document.createElement('div');
    newMeme.classList.add('meme');
    
    let memeImgContainer = document.createElement('img');
    memeImgContainer.src = memeImg;
    memeImgContainer.classList.add('meme-img');

    let topTextContainer = document.createElement('div');
    topTextContainer.innerText = topText;
    topTextContainer.classList.add('top');
    topTextContainer.classList.add('text');

    let bottomTextContainer = document.createElement('div');
    bottomTextContainer.innerText = bottomText;
    bottomTextContainer.classList.add('bottom');
    bottomTextContainer.classList.add('text');

    memeArea.appendChild(newMeme);
    newMeme.appendChild(memeImgContainer);
    newMeme.appendChild(topTextContainer);
    newMeme.appendChild(bottomTextContainer);
    newMeme.appendChild(removeButton);

    form.reset();
})

memeArea.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentNode.remove();
    }
})

// function adjustContainerHeight() {
//     var container = document.getElementById("container");
//     var contentHeight = container.clientHeight; // Get the height of the content

//     container.style.minHeight = contentHeight + "px"; // Update the minimum height of the container
// }

// // Call the function whenever content is added or the window is resized
// window.addEventListener("load", adjustContainerHeight);
// window.addEventListener("resize", adjustContainerHeight);
