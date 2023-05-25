let cl = console.log;

const spread = document.getElementById('spread');

// let text = [...spread.innerText] 
// spread.innerHTML = text.map(ele => `<span>${ele}</span>`).join('')

function spreadTemp(arr){
    let text = [...arr.innerText];
    return spread.innerHTML = text.map(ele => `<span>${ele}</span>`).join('')

}
spreadTemp(spread)