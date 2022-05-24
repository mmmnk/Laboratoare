var firstCol = document.getElementById('firstCol');
var secondCol = document.getElementById('secondCol');
var thirdCol = document.getElementById('thirdCol');
var container = document.getElementById('container');


var Img1 = document.getElementById('Img1');
var Img2 = document.getElementById('Img2');
var Img3 = document.getElementById('Img3');


function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const fisrIndex = getActiveIndex(firstCol);
    console.log(fisrIndex);
    const red = colors[fisrIndex];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (i =0; i< 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});


function pt(){
    switch(getActiveIndex(firstCol)){
        case 0:
            Img1.src = "https://cdn.britannica.com/10/6210-004-F4DE7D8D/Flag-Moldova.jpg";
        break;
        case 1:
            Img1.src = "https://www.fotw.info/images/a/ad.gif";
        break;
        case 2:
            Img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1024px-Flag_of_Chad.svg.png";
        break;
        case 3:
            Img1.src = "https://img.freepik.com/free-vector/illustration-of-romania-flag_53876-27113.jpg";
        break;
        case 4:
            Img1.src = "https://cutewallpaper.org/21/wallpaper-colombia/Colombia-Flag-UHD-4K-Wallpaper-Pixelz.jpg";
        break;
    }
}

function ptt(){
    switch(getActiveIndex(secondCol)){
        case 0:
            Img2.src = "https://cdn.pixabay.com/photo/2012/04/23/16/35/palestine-38913_1280.png";
        break;
        case 1:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg/800px-Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg.png";
        break;
        case 2:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/2560px-Flag_of_Sudan.svg.png";
        break;
        case 3:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg";
        break;
        case 4:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/2560px-Flag_of_Kuwait.svg.png";
        break;
    }
}

function pttt(){
    switch(getActiveIndex(thirdCol)){
        case 0:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png";
        break;
        case 1:
            Img3.src = "https://flagpedia.net/data/flags/w1600/kg.png";
        break;
        case 2:
            Img3.src = "https://www.worldatlas.com/r/w1200/img/flag/me-flag.jpg";
        break;
        case 3:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/2560px-Flag_of_Tunisia.svg.png";
        break;
        case 4:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png";
        break;
    }
}

function cola(){
    switch(getActiveIndex(firstCol)){
        case 0 :
            document.getElementById("flaguri").innerHTML = "Moldova";
            break;
        case 1 :
            document.getElementById("flaguri").innerHTML = "Andorra";
            break;           
        case 2 :
            document.getElementById("flaguri").innerHTML = "Ciad";
            break;
        case 3 :
            document.getElementById("flaguri").innerHTML = "Romania";
            break;
        case 4 :
            document.getElementById("flaguri").innerHTML = "Columbia";
            break;
    }
    
}    

function colb(){
    switch(getActiveIndex(secondCol)){
        case 0 :
            document.getElementById("flaguri").innerHTML = "Palestina";
            break;
        case 1 :
            document.getElementById("flaguri").innerHTML = "Sahara Occidentala";
            break;           
        case 2 :
            document.getElementById("flaguri").innerHTML = "Sudan";
            break;
        case 3 :
            document.getElementById("flaguri").innerHTML = "Iordania";
            break;
        case 4 :
            document.getElementById("flaguri").innerHTML = "Kuwait";
            break;
    }
    
} 

function colc(){
    switch(getActiveIndex(thirdCol)){
        case 0 :
            document.getElementById("flaguri").innerHTML = "China";
            break;
        case 1 :
            document.getElementById("flaguri").innerHTML = "Kârgâzstan";
            break;           
        case 2 :
            document.getElementById("flaguri").innerHTML = "Muntenegru";
            break;
        case 3 :
            document.getElementById("flaguri").innerHTML = "Tunisia";
            break;
        case 4 :
            document.getElementById("flaguri").innerHTML = "Vietnam";
            break;
    }
    
}
