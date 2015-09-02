//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
console.log("Input "+_INPUT);	
INPUT = _INPUT.split("\n");

for(i=1;i< INPUT.length;i++)
{
	R=INPUT[i].split(' ');
	A= R[0];
	B= R[1];

	contador=0;
	 while (A<=B)
 {
 	if(A<0)
 	{
 		console.log("Error no existen Raices Negativas");
 		break;
 	}
 	else
 	{
 		Raiz=Math.sqrt(A);
 		if(Raiz % 1!=0)
 		{
 			A++;
 		}else
 		{
 			
 			contador++;
 			A++;
 		}
 	}
 }
console.log(contador);
}
