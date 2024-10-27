let htmlinput = document.querySelector(".html-editor textarea")
let csslinput = document.querySelector(".css-editor textarea")
let jsinput = document.querySelector(".js-editor textarea")
let outputContainer = document.querySelector(".output-container")
let output = document.querySelector("#output")
let full = document.querySelector("#full")
let save = document.querySelector("#save")
let copy = document.querySelectorAll(".copy")

save.addEventListener("click",()=>{
    output.contentDocument.body.innerHTML=htmlinput.value
    output.contentDocument.head.innerHTML=`<style>${csslinput.value}</style>`
    output.contentWindow.eval(jsinput.value)
})
full.addEventListener("click",()=>{
    outputContainer.classList.toggle("output-full-active")
    if(outputContainer.classList.contains("output-full-active"))
    {
full.style.transform = "rotate(180deg)"
}else{
    full.style.transform = "rotate(0deg)"

}
})


copy.forEach((e)=>{

    e.addEventListener("click",()=>{

        if(e.classList.contains("copy1")){
            navigator.clipboard.writeText(htmlinput.value)
    }
    
    else if(e.classList.contains("copy2")){
            navigator.clipboard.writeText(csslinput.value)
    
    }else{
        navigator.clipboard.writeText(jsinput.value)
    }
    })

    })
    