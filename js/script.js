// bottoni
const btnStart= document.getElementById('start')
const livello2=document.getElementById('difficolta2')
const livello3=document.getElementById('difficolta3')



// elementi 
const container=document.getElementById('square-container')



btnStart.addEventListener('click', start)
livello2.addEventListener('click', difficolta2)
livello3.addEventListener('click', difficolta3)
 


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




function difficolta2(){
  reset()
   for(let i=1; i<=81; i++){
 const square=generateSquare2(i)
 container.append(square)
 
}
}



function generateSquare2(num){
  const cell= document.createElement('div')
  cell.className ='square2';
  cell.numero=num

  cell.addEventListener('click', function(){
    console.log(num)
    this.innerHTML=this.numero
    this.classList.add('blue')
  }) 
  
  return cell}


  function difficolta3(){
    reset()
     for(let i=1; i<=49; i++){
   const square=generateSquare3(i)
   container.append(square)
   
  }
  }

  function generateSquare3(num){
    const cell= document.createElement('div')
    cell.className ='square3';
    cell.numero=num
  
    cell.addEventListener('click', function(){
      console.log(num)
      this.innerHTML=this.numero
      this.classList.add('blue')
    }) 
    
    return cell}