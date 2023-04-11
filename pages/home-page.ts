import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
  
  }

    //Открыть главную страницу
    async open() {
        await this.page.goto('http://10.240.18.15/#/login');
    }

}
