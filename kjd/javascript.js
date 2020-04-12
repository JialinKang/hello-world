var arr = document.querySelectorAll(".box-page");
for (var i=0; i<arr.length ; i++){
	for ( n=0; n<3 ; n++ ){
		for ( m=0 ; m<3 ; m++ ){
			var divs=document.createElement("div");
			divs.style.cssText="width:100px; height:100px; border:1px solid #fff; box-sizing:border-box;position: absolute;background-image:url(img/a"+i+".jpg);background-size:300px 300px;"; 
			arr[i].appendChild(divs);
			divs.style.left=m*100+"px";
			divs.style.top=n*100+"px";

			divs.style.backgroundPositionX=-m*100+"px";
			divs.style.backgroundPositionY=-n*100+"px";
		}
	}
}
