
async function generatAdvice(){
    let advice = await fetch("https://api.adviceslip.com/advice");
    let data = await advice.json()

    let Id = document.getElementById("id");
    Id.innerHTML = "" + data.slip.id + "";

    let text = document.getElementById("text")
    text.innerHTML = `"` + data.slip.advice + `"`

    console.log(data)
    console.log(data.slip.id)
    console.log(data.slip.advice)
}


generatAdvice();


console.log(screen.width)