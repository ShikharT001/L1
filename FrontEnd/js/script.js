
let head = document.getElementById("head")

let input=`
        <div class="main-story-window">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="">
        </div>
`
let i=0;
for (i>0;i<10;i++){
head.innerHTML+=input;
}