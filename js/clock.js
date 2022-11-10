const clock = document.querySelector("h2#clock");

getTime();
setInterval(getTime, 1000);

function getTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
   // const hours = date.getHours().toString().padStart(2, '0');
   // const min = date.getMinutes().toString().padStart(2, '0');
   // const sec = date.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${hours} : ${min} : ${sec}`;
}

/*
String() => undefined와 Null까지 string 처리 가능
toString() = undefined와 Null시 error 발생
setInterval = 2번째 argu마다 실행
setTimeout = 2번째 argu가 지난 후 실행
*/