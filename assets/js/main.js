// // перекидывает нас на 500 пикселей вниз (задание 1)
// function buttonClick(){
//     setTimeout(scrollBy(0,500), 3000)
// }
// // 2 задание
// function buttonClick2(){
//     var prok=Math.max(document.documentElement.scrollHeight) //узнаёт мак высату страници 
//     let resul= (prok>1080)? 'прокрутка есть':'прокрутки нет'; // если высота больше 1080px то значит проерутка есть 
//     alert(resul)
// }
// //3 задание 
// function btn(){
//     // переменые куда водятся числа 
//     var num1=Number(document.getElementById('i1').value)
//     var num2=Number(document.getElementById('i2').value)
//     var num3=Number(document.getElementById('i3').value)
//     var num4=Number(document.getElementById('i4').value)
//     var num5=Number(document.getElementById('i5').value)
//     var num6=Number(document.getElementById('i6').value)
//     var result=num1+num2+num3+num4+num5+num6 // их сложение 
//     document.getElementById('result').innerHTML= result //вписыванеи результата в result
//     var id=form.getAttribute("id")//находит id у form
//     document.getElementById("id").innerHTML= id//заменяет пустое место на id form
// }


// // 5 задание
// function ffff(){
//     let ol=document.getElementById("elem"); 
//     let li=document.createElement('li') // создоёт новый li
//     li.innerHTML='пункт' // добовляет в только созданый li текст
//     ol.appendChild(li); //саздаёт нового потомка 
// }

// 4 задание 
// let select = document.querySelector('#select')
// let selectCity = document.createElement('select')
// selectCity.innerHTML = `<option value=""></option>
// <option value=""></option>
// <option value=""></option>`
// select.insertAdjacentElement('afterend', selectCity)
// function selectContr() {
//     console.log(select.index);
//     let city =  {
//         'rus': ['1sus', '2as', 'sd'],
//         'qwe': ['ded', 'zxc', 'kirk'],
//         'asd': ['keka', 'dikl', 'humsk'],

//     }
//     if (select.selectedIndex) {
//         for (let i = 0; i < city[select.selectedIndex].length; i++) {
//             selectCity.children[i].value = city[selectedIndex][i]
//             selectCity.children[i].innerHTML = city[selectedIndex][i]
//         }  
// }
// }

// 6 задание
// function Link(i){
//     let a = document.getElementsByClassName('link')[i]
//     a.innerText += `(${a.href})`
// }

// 8 задание
// function clicker() {
//     let btn = document.getElementById('btnClick') //кнопка через id 
//     btn.innerText =Number(btn.innerText)+1 
// }

// 7 задание
// function qrr(i) {
//         let textNum = document.getElementsByClassName('qrrw')[i] //достаём элементы по классу
//         textNum.innerText = Number(textNum.innerText) **2 //возводим в квадрат
//     }

// function fff(){
//     let ol=document.getElementById("elem1"); 
//     let li=document.createElement('li') // создоёт новый li
//     li.insertAdjacentHTML("afterbegin","<li id='lil' onclick='liclik'>пункт</li> ")
//     ol.appendChild(li); //саздаёт нового потомка 
// }
// function liclik(){
    
// }

// function changeContent(){
//   var table=document.getElementById('myTable')
//   var child=table.children[0]
//   var i1= prompt('ведите имя ячейки');
//   child.innerText=i1
// }
// function pip(){
//     var namee=document.getElementById("name")
//     var famle=document.getElementById("famle")
//     table.insertAdjacentHTMl("afterbegin","<tr onclick='changeContent()'><td ></td><td onclick='changeContent()'>Иванов</td></tr>")
// }