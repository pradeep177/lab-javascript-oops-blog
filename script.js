/* Fill your code*/
var addBlog = document.getElementById("addBlog");
addBlog.addEventListener('click',display);

function display(){
    document.getElementById("popupContact").style.display = "block";
};

var close = document.getElementById("close");
close.addEventListener('click',noDisplay);

function noDisplay(){
    document.getElementById("popupContact").style.display = "none";
};

var post = document.getElementById("post");
post.addEventListener('click',postInfo);
function postInfo(){
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var image=document.createElement('img');
    image.src="./assets/javascript.png";
    image.setAttribute('id','image')
    document.getElementById('card-text').appendChild(image);
    var post1 = new Blog(title,detail);
    post1.addTitle();
    post1.addDescription();
}


class Blog{
    constructor(title,detail){
        this.title = title;
        this.detail = detail;
    }
        addTitle(){
            var titleCard = document.createElement('h1');
            titleCard.setAttribute("id","blog-title");
            document.getElementById("card-text").appendChild(titleCard);
            titleCard.innerHTML += this.title;
        }
        addDescription(){
            var description = document.createElement('p');
            description.setAttribute("id", "blog-description");
            document.getElementById("card-text").appendChild(description);
            description.innerHTML += this.detail;
        }
}




