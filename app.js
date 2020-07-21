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

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/one.jpg')
            card.setAttribute('data-id',i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


})