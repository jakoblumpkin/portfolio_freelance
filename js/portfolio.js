var word_card_href  = $("#word-card_href");
var word_card_img  = $("#word-card_img");
var word_card_title  = $("#word-card_title");
var index = 0;

var project_data = [
    {
    href: "https://www.loom.com/share/e964e4e589264d3b8295c9c079de087e",
    img: "images/twoclothes_img.png",
    title: "Two Clothes"
   },
   {
    href: "https://www.loom.com/share/47858ed0ea4242049c89f4f8e023c3ec",
    img: "images/easycoffee.PNG",
    title: "Easy Coffee"
   },
   {
    href: "https://www.loom.com/share/0ea9c96d16cc458abfea74830cbc9ae9",
    img: "images/galaxybox.PNG",
    title: "Galaxy box"
   }
]

function setProject() {
    var proj_obj = project_data[index];
    word_card_href.attr("href", proj_obj.href);
    word_card_img.attr("src", proj_obj.img);
    word_card_title.text(proj_obj.title);
}

$(document).ready(function() {
    setProject();
});

$("#next_project").on("click", function(event) {
    var length_ = project_data.length - 1;
    if(index == length_) {index = 0;
    } else {index ++;}

    setProject();
});

$("#previous_project").on("click", function(event) {
    var length_ = 0;
    if(index == length_) {index = project_data.length - 1;
    } else {index --;}
    
    setProject();
});