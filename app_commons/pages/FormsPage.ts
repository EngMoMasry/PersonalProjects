import { Page,expect } from "playwright/test";
import Utils from "../Utils/Utils";

class FormsPage extends Utils{
billingForm:any




constructor(page:any){
    super(page)
    this.page=page
    this.billingForm='.woocommerce-billing-fields'
}

async verifyBillingFormExists(){
    await this.isElementVisible(this.billingForm)
}
};
export default FormsPage