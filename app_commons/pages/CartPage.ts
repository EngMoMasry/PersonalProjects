import { Page,expect } from "playwright/test";
import Utils from "../Utils/Utils";

class CartPage extends Utils{
productTableSelector:any
thinkingBookTitle:any
thinkingBookPrice:any
proceedToCheckOutBtn:any




constructor(page:any){
    super(page)
    this.page=page
    this.productTableSelector='.shop_table'
    this.thinkingBookTitle='Thinking in HTML'
    this.thinkingBookPrice='400'
    this.proceedToCheckOutBtn='.checkout-button'
}
async verifyThinkingBookTitleExists(){
    await this.verifyValueExistsInTable(this.productTableSelector,this.thinkingBookTitle)
}
async verifyThinkingBookPriceExists(){
    await this.verifyValueExistsInTable(this.productTableSelector,this.thinkingBookPrice)
}
async clickOnProceedToCheckOut(){
    await this.clickOn(this.proceedToCheckOutBtn)
}

};
export default CartPage