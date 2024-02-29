// bottoni
const btnStart= document.getElementById('start')

// elementi 
const container=document.getElementById('square-container')



btnStart.addEventListener('click', start)

 


// FUNZIONI



function start(){
  reset()
   for(let i=1; i<=100; i++){
 const square=generateSquare(i)
 container.append(square)
 
}
}
function reset(){
  container.innerHTML=''
 

}

function generateSquare(num){
  const cell= document.createElement('div')
  cell.className ='square';
  cell.numero=num

  cell.addEventListener('click', function(){
    console.log(num)
    this.innerHTML=this.numero
    this.classList.add('blue')
  }) 
  
  return cell
}