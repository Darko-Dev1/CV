turns = 0
function open_aside() {

    let take_asi = document.getElementById("asi")
    let take_menu_burger = document.getElementById("Menu_Burger")
    let take_aside = document.querySelector('aside');
    if (turns === 0) {

        take_aside.style.left = "0%"
        take_asi.innerHTML =`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>`
        console.log(take_asi)
        
        turns = 1
        console.log("heyyy")
    } else {
        take_asi.innerHTML = `<g id="Menu_Burger"><path d="M3.563,4.063c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001Z"></path><path d="M3.563,12.501c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"></path><path d="M3.563,20.939c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"></path></g>`
        console.log(take_asi)
        take_aside.style.left = "100%"
        turns = 0

    }


}

let leftt = 0;
let take_everything = document.querySelector('#everything');
let take_banners = document.querySelector('#banners');

take_everything.addEventListener('click', function (e) {
    const a = e.target.closest('[value]'); // Ensure correct target
    if (!a) return; // Exit if no valid element is clicked

    let side = a.getAttribute('value');
    console.log("Clicked side:", side);

    const maxScrollLeft = take_banners.scrollWidth - take_banners.clientWidth;
    console.log("Max Scroll Left:", maxScrollLeft);

    if (side === "left") {
        if (leftt > 0) {
            leftt -= 320;
        } else {
            leftt = -30;
        }
    } else if (side === "right") {
        if (leftt < maxScrollLeft) {
            leftt += 320;
        } else {
            leftt = -30;
        }
    } else {
        console.log("Invalid click");
        return;
    }

    console.log("Updated leftt:", leftt);

    // Ensure the scroll position is within valid bounds
    take_banners.scrollTo({
        top: 0,
        left: leftt,
        behavior: 'smooth'
    });
});





