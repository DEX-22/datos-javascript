


const cards = document.getElementsByClassName('card')

cards = [...cards]

cards.map(card => {
    console.log('no click');
    card.addEventListener('click',()=>{
        console.log('click');
    })

});


