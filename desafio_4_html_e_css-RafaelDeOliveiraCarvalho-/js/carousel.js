const elementos = [
    {
        imagem: './anexo_desafio_htmlcss/img/imagem_1.jpg',
        text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
        url: 'lancamento.html'
    },

    {
        imagem: './anexo_desafio_htmlcss/img/imagem_2.jpg',
        text: 'Ford a nossa história.',
        url: 'lancamento.html'
    },

    {
        imagem:'./anexo_desafio_htmlcss/img/imagem_3.jpg',
        text: 'Nova Ford Bronco Sport 2022.',
        url: 'lancamento.html'
    }
]

class Carousel{
    
    constructor(elementos){
        this._elementos = elementos
        this._posicao = 0
    }

    Start(){
        const img = document.getElementById('ranger-img')
        const txt = document.querySelector('#carousel-title');
        const link = document.querySelector('url');

        setInterval(()=>{img.setAttribute("src", this._elementos[this._posicao].imagem);
        txt.textContent = this._elementos[this._posicao].text;
        link.setAttribute("href", this._elementos[this._posicao].url);

        this.Next();

    }, 2000)
    }

    Next(){
        // permite percorrer a lista e condiciona para caso chegar no ultimo elemento, volte para o inicial. Se não, incremente até chegar
        if(this._elementos == this._posicao.length - 1){
            this._posicao = 0;
        }else{
            this._posicao++
        }
    }
}

const carouselCarros = new Carousel(elementos);
carouselCarros.Start();