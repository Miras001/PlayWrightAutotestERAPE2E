import type { Page } from 'playwright';
import { user } from '../constants/userdata';
export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async authLogin(login: string, password: string) {
        await  this.page.locator('text=Логин/пароль').click();
        
        await  this.page.locator('[placeholder="Имя пользователя\\*"]').click();
        
        await  this.page.type('[placeholder="Имя пользователя\\*"]', login);
        
        await  this.page.locator('[placeholder="Пароль"]').click();
        
        await  this.page.type('[placeholder="Пароль"]',password);
        
        await this.page.locator('text=Войти').click()
  
        await this.page.locator('text=OK').click();
    }
         

    public async authLoginECP() {
       
    }

}

