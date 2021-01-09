// function resizeImage(){
// 	//read file object and extract image as encoded url
    
// 	file = document.querySelector("input[type=file]").files[0];
// 	output = document.querySelector("#output");
//     reader = new FileReader();
    
//     // console.log(file);

//     var toWidth = document.getElementById("width");
//     toWidth = parseInt(toWidth.value);
    
//     var toHeight = document.getElementById("height");
//     toHeight = parseInt(toHeight.value);
	
//     var img = document.createElement("img");
//     reader.addEventListener("load", function (e) {
//         output.src = reader.result;
//         img.src = e.target.result;

//         var canvas = document.createElement("canvas");
//         //var canvas = $("<canvas>", {"id":"testing"})[0];
//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0);

//         // var MAX_WIDTH = toWidth;
//         // var MAX_HEIGHT = img.height;

//         var width = img.width;
//         var height = img.height;
        
//         if(toHeight===0 && toWidth===0){
//             alert("Please Enter either Width or Height");
//         }else if(toHeight===0){
//             toHeight = (height * toWidth)/width;
//         }else if(toWidth===0){
//             toWidth = (width * toHeight)/height;
//         }else{
//             toHeight = (height * toWidth)/width;
//         }
//         console.log(toHeight);
//         console.log(toWidth);

//         // if (width > height) {
//         //     if (width > MAX_WIDTH) {
//         //         height *= MAX_WIDTH / width;
//         //         width = MAX_WIDTH;
//         //     }
//         // } else {
//         //     if (height > MAX_HEIGHT) {
//         //         width *= MAX_HEIGHT / height;
//         //         height = MAX_HEIGHT;
//         //     }
//         // }

//         canvas.width = toWidth;
//         canvas.height = toHeight;
//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, toWidth, toHeight);

//         var dataurl = canvas.toDataURL("image/png");
//         output.src = dataurl;
//         document.querySelector("input[type=file]").files[0] = output;
//     }, false);
    
//     reader.readAsDataURL(file);
//     console.log(document.querySelector("input[type=file]").files[0]);

// }

function showPreview(){
	//read file object and extract image as encoded url
	file = document.querySelector("input[type=file]").files[0];
	preview = document.querySelector("#source_img");
	reader = new FileReader();
    
    var toWidth = document.getElementById("width");
    toWidth = parseInt(toWidth.value);
    
    var toHeight = document.getElementById("height");
    toHeight = parseInt(toHeight.value);
	
    var img = document.createElement("img");


	reader.addEventListener("load", function () {
        preview.src = reader.result;
        

        img.src = e.target.result;

        var canvas = document.createElement("canvas");
        //var canvas = $("<canvas>", {"id":"testing"})[0];
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // var MAX_WIDTH = toWidth;
        // var MAX_HEIGHT = img.height;

        var width = img.width;
        var height = img.height;
        
        if(toHeight===0 && toWidth===0){
            alert("Please Enter either Width or Height");
        }else if(toHeight===0){
            toHeight = (height * toWidth)/width;
        }else if(toWidth===0){
            toWidth = (width * toHeight)/height;
        }else{
            toHeight = (height * toWidth)/width;
        }
        console.log(toHeight);
        console.log(toWidth);

        // if (width > height) {
        //     if (width > MAX_WIDTH) {
        //         height *= MAX_WIDTH / width;
        //         width = MAX_WIDTH;
        //     }
        // } else {
        //     if (height > MAX_HEIGHT) {
        //         width *= MAX_HEIGHT / height;
        //         height = MAX_HEIGHT;
        //     }
        // }

        canvas.width = toWidth;
        canvas.height = toHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, toWidth, toHeight);

        var dataurl = canvas.toDataURL("image/png");
        output = document.querySelector('#output');
        output.src = dataurl;

	  }, false);

    reader.readAsDataURL(file);
}