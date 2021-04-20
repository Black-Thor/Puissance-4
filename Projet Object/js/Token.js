class Token {
    constructor (index , owner)  {
        this.owner = owner ; 
        this.dropped = false ; 
        this.id = `token-${index}-${owner.id}`; //crée un token unique 
    }
    //methode 
    createTokens() {
        
    }
    
}