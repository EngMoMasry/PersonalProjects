import { Page,expect } from "playwright/test";
import Utils from "../Utils/Utils";

class defaultPageClass extends Utils{





constructor(page:any){
    super(page)
    this.page=page
    
}
};
export default defaultPageClass