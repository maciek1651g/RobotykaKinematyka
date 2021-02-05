pi = Math.PI
precyzja = 100					//dodanie jednego zera do końca liczby zwiększa precyzję o jedno miejsce po przecinku

function h50_oblicz()
{
	var t_1 = parseFloat(document.getElementById("h50_t_1").value);
	if(isNaN(t_1)){ t_1 = 0; document.getElementById("h50_t_1").value=0}
	var t_2 = parseFloat(document.getElementById("h50_t_2").value);
	if(isNaN(t_2)){ t_2 = 0; document.getElementById("h50_t_2").value=0}
	var t_3 = parseFloat(document.getElementById("h50_t_3").value);
	if(isNaN(t_3)){ t_3 = 0; document.getElementById("h50_t_3").value=0}
	var t_4 = parseFloat(document.getElementById("h50_t_4").value);
	if(isNaN(t_4)){ t_4 = 0; document.getElementById("h50_t_4").value=0}
	var t_5 = parseFloat(document.getElementById("h50_t_5").value);
	if(isNaN(t_5)){ t_5 = 0; document.getElementById("h50_t_5").value=0}
	
	
	if(!isNaN(t_1) && !isNaN(t_2) && !isNaN(t_3) && !isNaN(t_4) && !isNaN(t_5))
	{
		t_1 = ((t_1*2*pi)/360)
		t_2 = ((t_2*2*pi)/360)
		t_3 = ((t_3*2*pi)/360)
		t_4 = ((t_4*2*pi)/360)
		t_5 = ((t_5*2*pi)/360)

		var macierz = [[],[],[],[]]

		macierz[0].push(Math.cos(t_5)*Math.sin(t_1)-Math.sin(t_5)*Math.cos(t_1)*Math.cos(t_4+t_2+t_3))
		macierz[0].push(-Math.cos(t_1)*Math.cos(t_5)*Math.cos(t_4+t_2+t_3)-Math.sin(t_1)*Math.sin(t_5))
		macierz[0].push(Math.cos(t_1)*Math.sin(t_4+t_3+t_2))
		macierz[0].push(2*Math.cos(t_1)*(8+75*Math.sin(t_4+t_2+t_3)+110*(Math.cos(t_2)+Math.cos(t_2+t_3))))

		macierz[1].push(-Math.cos(t_1)*Math.cos(t_5)-Math.sin(t_5)*Math.sin(t_1)*Math.cos(t_4+t_2+t_3))
		macierz[1].push(-Math.sin(t_1)*Math.cos(t_5)*Math.cos(t_4+t_2+t_3)+Math.cos(t_1)*Math.sin(t_5))
		macierz[1].push(Math.sin(t_1)*Math.sin(t_4+t_3+t_2))
		macierz[1].push(2*Math.sin(t_1)*(8+75*Math.sin(t_4+t_2+t_3)+110*(Math.cos(t_2)+Math.cos(t_2+t_3))))

		macierz[2].push(-Math.sin(t_5)*Math.sin(t_4+t_3+t_2))
		macierz[2].push(-Math.cos(t_5)*Math.sin(t_4+t_3+t_2))
		macierz[2].push(-Math.cos(t_3+t_4)*Math.cos(t_2)+Math.sin(t_3+t_4)*Math.sin(t_2))
		macierz[2].push(10*(35-15*Math.cos(t_4+t_2+t_3)+22*(Math.sin(t_2)+Math.sin(t_3+t_2))))

		macierz[3].push(0.0)
		macierz[3].push(0.0)
		macierz[3].push(0.0)
		macierz[3].push(1.0)
		
		
		
		var tabela = "<table><tbody>"
		for(var i=0;i<4;i++)
		{
			tabela+="<tr>"
			for(var j=0;j<4;j++)
			{
				tabela = tabela + ("<td>" + (Math.round(macierz[i][j]*precyzja)/precyzja) +  "</td>")
			}
			tabela+="</tr>"
		}
		tabela += "</tbody></table>"
		
		document.getElementById("wynik_h50").innerHTML = tabela
	}
}

function h30_oblicz()
{
	var t_1 = parseFloat(document.getElementById("h30_t_1").value);
	if(isNaN(t_1)){ t_1 = 0; document.getElementById("h30_t_1").value=0}
	var t_2 = parseFloat(document.getElementById("h30_t_2").value);
	if(isNaN(t_2)){ t_2 = 0; document.getElementById("h30_t_2").value=0}
	var t_3 = parseFloat(document.getElementById("h30_t_3").value);
	if(isNaN(t_3)){ t_3 = 0; document.getElementById("h30_t_3").value=0}
	
	
	
	if(!isNaN(t_1) && !isNaN(t_2) && !isNaN(t_3))
	{
		t_1 = ((t_1*2*pi)/360)
		t_2 = ((t_2*2*pi)/360)
		t_3 = ((t_3*2*pi)/360)

		var macierz = [[],[],[],[]]

		macierz[0].push(Math.cos(t_1)*Math.cos(t_2)*Math.cos(t_3)-Math.cos(t_1)*Math.sin(t_2)*Math.sin(t_3))
		macierz[0].push(-Math.cos(t_1)*Math.cos(t_3)*Math.sin(t_2)-Math.cos(t_1)*Math.cos(t_2)*Math.sin(t_3))
		macierz[0].push(Math.sin(t_1))
		macierz[0].push(16*Math.cos(t_1)+220*Math.cos(t_1)*Math.cos(t_2)+220*Math.cos(t_1)*Math.cos(t_2)*Math.cos(t_3)-220*Math.cos(t_1)*Math.sin(t_2)*Math.sin(t_3))


		macierz[1].push(Math.cos(t_2)*Math.cos(t_3)*Math.sin(t_1)-Math.sin(t_1)*Math.sin(t_2)*Math.sin(t_3))
		macierz[1].push(-Math.cos(t_3)*Math.sin(t_1)*Math.sin(t_2)-Math.cos(t_2)*Math.sin(t_1)*Math.sin(t_3))
		macierz[1].push(-Math.cos(t_1))
		macierz[1].push(220*Math.cos(t_2)*Math.sin(t_1)+220*Math.cos(t_2)*Math.cos(t_3)*Math.sin(t_1)+16*Math.sin(t_1)-220*Math.sin(t_1)*Math.sin(t_2)*Math.sin(t_3))


		macierz[2].push(Math.cos(t_3)*Math.sin(t_2)+Math.cos(t_2)*Math.sin(t_3))
		macierz[2].push(Math.cos(t_2)*Math.cos(t_3)-Math.sin(t_2)*Math.sin(t_3))
		macierz[2].push(0)
		macierz[2].push(220*Math.cos(t_3)*Math.sin(t_2)+220*Math.sin(t_2)+220*Math.cos(t_2)*Math.sin(t_3)+350)


		macierz[3].push(0.0)
		macierz[3].push(0.0)
		macierz[3].push(0.0)
		macierz[3].push(1.0)
		
		
		var tabela = "<table><tbody>"
		for(var i=0;i<4;i++)
		{
			tabela+="<tr>"
			for(var j=0;j<4;j++)
			{
				tabela = tabela + ("<td>" + (Math.round(macierz[i][j]*precyzja)/precyzja) +  "</td>")
			}
			tabela+="</tr>"
		}
		tabela += "</tbody></table>"
		
		document.getElementById("wynik_h30").innerHTML = tabela
	}
}

function h30_odwrotna_oblicz()
{
	var p_x = parseFloat(document.getElementById("h30_t_1_odwrotna").value);
	if(isNaN(p_x)){ p_x = 0; document.getElementById("h30_t_1_odwrotna").value=0}
	var p_y = parseFloat(document.getElementById("h30_t_2_odwrotna").value);
	if(isNaN(p_y)){ p_y = 0; document.getElementById("h30_t_2_odwrotna").value=0}
	var p_z = parseFloat(document.getElementById("h30_t_3_odwrotna").value);
	if(isNaN(p_z)){ p_z = 0; document.getElementById("h30_t_3_odwrotna").value=0}
	
	if(!isNaN(p_x) && !isNaN(p_y) && !isNaN(p_z))
	{
		var k = 1
		var tabela = "<table><tbody>"
		tabela += "<tr><th>Rozwiązanie</th><th>&theta;<sub>1</sub></th><th>&theta;<sub>2</sub></th><th>&theta;<sub>3</sub></th></tr>"
		for(var i = 1;i<=2;i++)
		{
			for(var j = 1;j<=2;j++)
			{
				tab = h30_odwrotna_oblicz_przypadki(p_x,p_y,p_z,i,j)
				
				var [a,b,c] = [0,0,0]
				
				if(tab == null)
					[a,b,c] = ["X","X","X"]
				else
					[a,b,c]= tab
				
				
				tabela += "<tr><td>"+k+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td></tr>"
				k+=1
			}
		}
		
		tabela += "</tbody></table>"

		document.getElementById("wynik_h30_odwrotna").innerHTML = tabela
	}
}

function h30_odwrotna_oblicz_przypadki(p_x,p_y,p_z,kom1,kom3)
{
	var t_1=0.0
	if(kom1==1)
		t_1 = Math.atan2(p_y,p_x)
	else
		t_1 = Math.atan2(-p_y,-p_x)

	var CCC = ( (p_x*p_x)+(p_y*p_y) +16*16 - 32*(Math.cos(t_1)*p_x+Math.sin(t_1)*p_y) + ((p_z-350)*(p_z-350))-2*(220*220))/(2*220*220)
	var t_3=0.0
	

	if(Math.abs(CCC)>1)
	{
		return null
	}
	else
		if(kom3==1)
			t_3 = Math.atan2(Math.sqrt(1-(CCC*CCC)),CCC)
		else
			t_3 = Math.atan2(-Math.sqrt(1-(CCC*CCC)),CCC)

	
	
	var t_2 = Math.atan2((220*Math.cos(t_3)+220)*(p_z-350)-(220*Math.sin(t_3))*(Math.cos(t_1)*p_x+Math.sin(t_1)*p_y-16), (220*Math.cos(t_3)+220)*(Math.cos(t_1)*p_x+Math.sin(t_1)*p_y-16)+(220*Math.sin(t_3))*(p_z-350))


	t_1 = (360*t_1)/(2*pi)
	t_2 = (360*t_2)/(2*pi)
	t_3 = (360*t_3)/(2*pi)


	t_1 = Math.round(t_1*precyzja)/precyzja
	t_2 = Math.round(t_2*precyzja)/precyzja
	t_3 = Math.round(t_3*precyzja)/precyzja
	
	return [t_1,t_2,t_3]
}

function h50_odwrotna_oblicz()
{
	var p_x = parseFloat(document.getElementById("h50_t_1_odwrotna").value);
	if(isNaN(p_x)){ p_x = 0; document.getElementById("h50_t_1_odwrotna").value=0}
	var p_y = parseFloat(document.getElementById("h50_t_2_odwrotna").value);
	if(isNaN(p_y)){ p_y = 0; document.getElementById("h50_t_2_odwrotna").value=0}
	var p_z = parseFloat(document.getElementById("h50_t_3_odwrotna").value);
	if(isNaN(p_z)){ p_z = 0; document.getElementById("h50_t_3_odwrotna").value=0}
	
	var t_4 = parseFloat(document.getElementById("h50_t_4_odwrotna").value);
	if(isNaN(t_4)){ t_4 = 0; document.getElementById("h50_t_4_odwrotna").value=0}
	var t_5 = parseFloat(document.getElementById("h50_t_5_odwrotna").value);
	if(isNaN(t_5)){ t_5 = 0; document.getElementById("h50_t_5_odwrotna").value=0}
	
	
	if(!isNaN(p_x) && !isNaN(p_y) && !isNaN(p_z) && !isNaN(t_4) && !isNaN(t_5))
	{
		var g=150
		
		var x=0
		var y=0
		var z=-1
		
//		if(p_x<0)
//			t_4=-t_4;
		
		if(((t_4>0)&&(t_4%360)>180) || ((t_4<0)&&((Math.abs(t_4)%360)<=180)))
		{
			x=-p_x
			y=-p_y
		}
		else
		{
			x=p_x
			y=p_y
		}

		
		t_4 = ((t_4*2*pi)/360)
		z = Math.cos(t_4)*z
		
		var dl=Math.sqrt(x*x+y*y)
		if(dl!=0)
		{
			x=x/dl
			y=y/dl
		}
		var tmp1 = x*x+y*y-z*z
		if(tmp1>0)
			dl = Math.sqrt(tmp1)
		else
			dl=0
		x=x*dl
		y=y*dl
		
		var a_x = x
		var a_y = y
		var a_z = z
		
//		console.log([a_x,a_y,a_z])
		
		var p_x_w = p_x - g * a_x
		var p_y_w = p_y - g * a_y
		var p_z_w = p_z - g * a_z		
		
		var k = 1
		var tabela = "<table><tbody>"
		tabela += "<tr><th>Rozwiązanie</th><th>&theta;<sub>1</sub></th><th>&theta;<sub>2</sub></th><th>&theta;<sub>3</sub></th><th>&theta;<sub>4</sub></th><th>&theta;<sub>5</sub></th></tr>"
		for(var i = 1;i<=2;i++)
		{
			for(var j = 1;j<=2;j++)
			{
				tab = h30_odwrotna_oblicz_przypadki(p_x_w,p_y_w,p_z_w,i,j)
				
				var [a,b,c] = [0,0,0]
				t_4 = 0
				
				if(tab == null)
				{
					[a,b,c] = ["X","X","X"]
					t_4 = "X"
					t_5 = "X"
				}
				else
				{
					[a,b,c]= tab

					t_4 = t_4_oblicz(a,b,c,a_x,a_y,a_z)
					
					t_4 = Math.round(t_4*precyzja)/precyzja
					t_5 = Math.round(t_5*precyzja)/precyzja
				}
					
				
				
				
				tabela += "<tr><td>"+k+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+t_4+"</td><td>"+t_5+"</td></tr>"
				k+=1
			}
		}
		
		tabela += "</tbody></table>"

		document.getElementById("wynik_h50_odwrotna").innerHTML = tabela
	}
}


function t_4_oblicz(t_1,t_2,t_3,a_x,a_y,a_z)
{
	t_1 = ((t_1*2*pi)/360)
	t_2 = ((t_2*2*pi)/360)
	t_3 = ((t_3*2*pi)/360)
	
	
	var t_4_1 = Math.atan2(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y,Math.sqrt(1-(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y)*(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y)))-t_3-t_2
	var t_4_2 = Math.atan2(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y,-Math.sqrt(1-(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y)*(Math.cos(t_1)*a_x+Math.sin(t_1)*a_y)))-t_3-t_2
	
	var a_x_t_4_1 = (Math.cos(t_1)*Math.sin(t_4_1+t_3+t_2))
	var a_y_t_4_1 = (Math.sin(t_1)*Math.sin(t_4_1+t_3+t_2))
	var a_z_t_4_1= (-Math.cos(t_3+t_4_1)*Math.cos(t_2)+Math.sin(t_3+t_4_1)*Math.sin(t_2))
	
	var a_x_t_4_2 = (Math.cos(t_1)*Math.sin(t_4_2+t_3+t_2))
	var a_y_t_4_2 = (Math.sin(t_1)*Math.sin(t_4_2+t_3+t_2))
	var a_z_t_4_2= (-Math.cos(t_3+t_4_2)*Math.cos(t_2)+Math.sin(t_3+t_4_2)*Math.sin(t_2))
	
	var sumaBledow_t_4_1 = Math.abs(a_x-a_x_t_4_1)+Math.abs(a_y-a_y_t_4_1)+Math.abs(a_z-a_z_t_4_1)
	var sumaBledow_t_4_2 = Math.abs(a_x-a_x_t_4_2)+Math.abs(a_y-a_y_t_4_2)+Math.abs(a_z-a_z_t_4_2)
	
	
	if(sumaBledow_t_4_1 < sumaBledow_t_4_2)
		return (360*t_4_1)/(2*pi)
	else
		return (360*t_4_2)/(2*pi)
}
