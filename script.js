// Color Change Functions
const color_1 = document.querySelector(".color-1");
const colorChange_1 =()=> {
    document.querySelector(".image-watch-2").style.display = "none"
    document.querySelector(".image-watch").style.display = "block"
}
color_1.onclick = colorChange_1;

const color_2 = document.querySelector(".color-2");
const colorChange_2 =()=> {
    document.querySelector(".image-watch").style.display = "none"
    document.querySelector(".image-watch-2").style.display = "block"
}
color_2.onclick = colorChange_2;

const color_3 = document.querySelector(".color-3");
const colorChange_3 =()=> {
    document.querySelector(".image-chair-4").style.display = "block"
    document.querySelector(".image-chair").style.display = "none"
    document.querySelector(".image-chair-2").style.display = "none"
    document.querySelector(".image-chair-3").style.display = "none"
}
color_3.onclick = colorChange_3;

const color_4 = document.querySelector(".color-4");
const colorChange_4 =()=> {
    document.querySelector(".image-chair-2").style.display = "block"
    document.querySelector(".image-chair").style.display = "none"
    document.querySelector(".image-chair-3").style.display = "none"
    document.querySelector(".image-chair-4").style.display = "none"
}
color_4.onclick = colorChange_4;

const color_5 = document.querySelector(".color-5");
const colorChange_5 =()=> {
    document.querySelector(".image-chair-3").style.display = "block"
    document.querySelector(".image-chair").style.display = "none"
    document.querySelector(".image-chair-2").style.display = "none"
    document.querySelector(".image-chair-4").style.display = "none"
}
color_5.onclick = colorChange_5;

const color_6 = document.querySelector(".color-6");
const colorChange_6 =()=> {
    document.querySelector(".image-chair").style.display = "block"
    document.querySelector(".image-chair-2").style.display = "none"
    document.querySelector(".image-chair-3").style.display = "none"
    document.querySelector(".image-chair-4").style.display = "none"
}
color_6.onclick = colorChange_6;

const color_7 = document.querySelector(".color-7");
const colorChange_7 =()=> {
    document.querySelector(".image-clock-2").style.display = "block"
    document.querySelector(".image-clock").style.display = "none"
    document.querySelector(".image-clock-3").style.display = "none"
}
color_7.onclick = colorChange_7;

const color_8 = document.querySelector(".color-8");
const colorChange_8 =()=> {
    document.querySelector(".image-clock").style.display = "block"
    document.querySelector(".image-clock-2").style.display = "none"
    document.querySelector(".image-clock-3").style.display = "none"
}
color_8.onclick = colorChange_8;

const color_9 = document.querySelector(".color-9");
const colorChange_9 =()=> {
    document.querySelector(".image-clock-3").style.display = "block"
    document.querySelector(".image-clock").style.display = "none"
    document.querySelector(".image-clock-2").style.display = "none"
}
color_9.onclick = colorChange_9;

const color_10 = document.querySelector(".color-10");
const colorChange_10 =()=> {
    document.querySelector(".image-stool-3").style.display = "block"
    document.querySelector(".image-stool").style.display = "none"
    document.querySelector(".image-stool-2").style.display = "none"
    document.querySelector(".image-stool-4").style.display = "none"
    document.querySelector(".image-stool-5").style.display = "none"
}
color_10.onclick = colorChange_10;

const color_11 = document.querySelector(".color-11");
const colorChange_11 =()=> {
    document.querySelector(".image-stool-4").style.display = "block"
    document.querySelector(".image-stool").style.display = "none"
    document.querySelector(".image-stool-2").style.display = "none"
    document.querySelector(".image-stool-3").style.display = "none"
    document.querySelector(".image-stool-5").style.display = "none"
}
color_11.onclick = colorChange_11;

const color_12 = document.querySelector(".color-12");
const colorChange_12 =()=> {
    document.querySelector(".image-stool").style.display = "block"
    document.querySelector(".image-stool-2").style.display = "none"
    document.querySelector(".image-stool-3").style.display = "none"
    document.querySelector(".image-stool-4").style.display = "none"
    document.querySelector(".image-stool-5").style.display = "none"
}
color_12.onclick = colorChange_12;

const color_13 = document.querySelector(".color-13");
const colorChange_13 =()=> {
    document.querySelector(".image-stool-5").style.display = "block"
    document.querySelector(".image-stool").style.display = "none"
    document.querySelector(".image-stool-2").style.display = "none"
    document.querySelector(".image-stool-3").style.display = "none"
    document.querySelector(".image-stool-4").style.display = "none"
}
color_13.onclick = colorChange_13;

const color_14 = document.querySelector(".color-14");
const colorChange_14 =()=> {
    document.querySelector(".image-arm-chair-2").style.display = "block"
    document.querySelector(".image-arm-chair-3").style.display = "none"
}
color_14.onclick = colorChange_14;

const color_15 = document.querySelector(".color-15");
const colorChange_15 =()=> {
    document.querySelector(".image-arm-chair-3").style.display = "block"
    document.querySelector(".image-arm-chair-2").style.display = "none"
}
color_15.onclick = colorChange_15;

// Menu Change Functions

const section_2_3 = document.querySelector(".featured");
const sectionChange =()=> {
    document.querySelector(".section-2").style.display = "none"
    document.querySelector(".section-2-4").style.display = "none"
    // document.querySelector(".section-2-3").style.display = "block"
    document.querySelector(".section-2-3").style.display = "flex"
    document.querySelector(".featured").style.color = "#000"
    document.querySelector(".featured").style.borderBottom = "2px solid #1ac200"
    document.querySelector(".best_sellers").style.color = "#757575"
    document.querySelector(".best_sellers").style.borderBottom = "none"
    document.querySelector(".sales").style.color = "#757575"
    document.querySelector(".sales").style.borderBottom = "none"

}
section_2_3.onclick = sectionChange;

const section_2 = document.querySelector(".best_sellers");
const sectionChangeTwo =()=> {
    document.querySelector(".section-2-3").style.display = "none"
    document.querySelector(".section-2-4").style.display = "none"
    // document.querySelector(".section-2").style.display = "block"
    document.querySelector(".section-2").style.display = "flex"
    document.querySelector(".best_sellers").style.color = "#000"
    document.querySelector(".best_sellers").style.borderBottom = "2px solid #1ac200"
    document.querySelector(".featured").style.color = "#757575"
    document.querySelector(".featured").style.borderBottom = "none"
    document.querySelector(".sales").style.color = "#757575"
    document.querySelector(".sales").style.borderBottom = "none"
}
section_2.onclick = sectionChangeTwo;


const section_2_4 = document.querySelector(".sales");
const sectionChangeThree =()=> {
    // document.querySelector(".section-2-4").style.display = "block"
    document.querySelector(".section-2").style.display = "none"
    document.querySelector(".section-2-3").style.display = "none"
    document.querySelector(".section-2-4").style.display = "flex"
    document.querySelector(".sales").style.color = "#000"
    document.querySelector(".sales").style.borderBottom = "2px solid #1ac200"
    document.querySelector(".featured").style.color = "#757575"
    document.querySelector(".featured").style.borderBottom = "none"
    document.querySelector(".best_sellers").style.color = "#757575"
    document.querySelector(".best_sellers").style.borderBottom = "none"
}
section_2_4.onclick = sectionChangeThree;