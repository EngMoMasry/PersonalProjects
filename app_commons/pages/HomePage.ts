import { Page,expect } from "playwright/test";
import Utils from "../Utils/Utils";

class HomePage extends Utils{


    thinkingBook:string
    thinkingBookPriceLocators:string
    addToCart:string
    cart:string
  
    

constructor(page:any){
    super(page)
    this.page=page

    //Selectors
    this.thinkingBook = 'img[title="Thinking in HTML"]'
    this.thinkingBookPriceLocators = 'ins .woocommerce-Price-amount'
      
      this.addToCart='[data-product_id="163"].add_to_cart_button'
      this.cart='[title="View your shopping cart"]'
    
}
//Methods
async isThikingBookExists(){
    await this.isElementVisible(this.thinkingBook)
}
async isThinkingBookPriceExists(){
    await this.isElementVisible(this.thinkingBookPriceLocators)
}
async clickOnAddToCart(){
    await this.clickOn(this.addToCart)
}

async clickOnCart(){
    await this.doubleClickOn(this.cart)
}
async setThinkingBookTitleBuffer(){
    await this.setElementTextAsBufferedValue(this.thinkingBook)
}

async setThinkingBookPriceBuffer(){
    await this.setElementTextAsBufferedValue(this.thinkingBookPriceLocators)
}
};
export default HomePage