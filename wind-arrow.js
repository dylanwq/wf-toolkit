// js for weather
function drawWeatherPic(ctxObj,x,y,winD,winR){
    var lineW = 30;//�����ߵĳ���
    
	if(winD == null ||winD == 'undefined' ){return;}
	//if(winR == null ||winR == 'undefined' ){return;}
	if (ctxObj.getContext){
		var ctx = ctxObj.getContext('2d');
		//����
		ctx.beginPath();
		ctx.arc(x,y,2,0,Math.PI*2,true);
		ctx.stroke();
		
		//������
		ctx.beginPath();
		ctx.moveTo(x,y);
		var left = x+Math.sin(winD*(Math.PI*2/360))*lineW;
		var top = y-Math.cos(winD*(Math.PI*2/360))*lineW;
		ctx.lineTo(left,top);
		ctx.stroke(); 
  }else{
 
	}
 }

