class Token {
    constructor (index , owner)  {
        this.owner = owner ; 
        this.dropped = false ; 
        this.id = `token-${index}-${owner.id}`; //crée un token unique 
    }
    //methode 
    createTokens() {
        
    }
    get htmlToken() {
        return document.getElementById(this.id);
    }
     /** 
     * Draws new HTML token.
     */
      drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}
