document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray =[
        {
            name:'Lovely',
            img: 'Images/Lovely.jpg'
        },
        {
            name:'Lovely',
            img: 'Images/Lovely.jpg'
        },
        {
            name:'Shigatsu',
            img: 'Images/Shigatsu.jpg'
        },
        {
            name:'Shigatsu',
            img: 'Images/Shigatsu.jpg'
        },
        {
            name:'steins',
            img: 'Images/steins.jpg'
        },
        {
            name:'steins',
            img: 'Images/steins.jpg'
        },
        {
            name:'toradora',
            img: 'Images/toradora.png'
        },
        {
            name:'toradora',
            img: 'Images/toradora.png'
        },
        {
            name:'Yahari',
            img: 'Images/Yahari.png'
        },
        {
            name:'Yahari',
            img: 'Images/Yahari.png'
        },
        {
            name:'Yamada',
            img: 'Images/Yamada.jpg'
        },
        {
            name:'Yamada',
            img: 'Images/Yamada.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    const resultDisplay = document.querySelector('#result')

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','Images/one.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','Images/blanco.png')
            cards[optionTwoId].setAttribute('src','Images/blanco.png')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','Images/one.jpg')
            cards[optionTwoId].setAttribute('src','Images/one.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }

    createBoard()


})