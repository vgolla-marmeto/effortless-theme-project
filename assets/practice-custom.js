class customComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this
    console.log(this.element)
    this.addEventListener("change", (event) => {
        variantChange()
    
      });
  }
  variantChange(){
    
  }

}

customElements.define("custom-product-card", customComponent)