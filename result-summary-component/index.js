

window.addEventListener('DOMContentLoaded', () => {
    const scoreContainer = document.querySelector('.score-container')
    fetch('./data.json').then(async(data) => {
        const res = await data.json();
        console.log(res)
        for(let i = 0; i < res.length; i++){
            const div = document.createElement('div')
            const divleft = document.createElement('div')
            const divright = document.createElement('div')
            const h1 = document.createElement('h1') 
            const h2 = document.createElement('h1') 
            const h3 = document.createElement('h1') 
            const img = document.createElement('img') 
            const span = document.createElement('span')

            span.textContent = "/"
            h3.textContent = '100'
            img.src = res[i].icon
            h2.textContent = res[i].score

            h2.className = "text-darkBlue"
            divright.className = "flex gap-x-3 text-slate-400 font-bold"
            divleft.className = "flex items-center gap-2"
            img.className = "h-5 w-5 "  
            div.className = 'score '
            div.style.backgroundColor = res[i].bg  
            h1.className = res[i].text
            h1.textContent = res[i].category
            
            h2.appendChild(span)
            divright.append(h2, span, h3)
            div.append(divleft, divright) 
            divleft.append(img, h1)
            scoreContainer.appendChild(div);
        }
    }).catch(err => {
        console.log(err)
    })
})