import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { HomePage } from '../../pages/home-page';
import { LoginPage } from '../../pages/login-page';

test.beforeEach(async ({ page }) => {
  
});

test('User auth with login', async ({ page }) => {

    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).authLogin(user.login, user.password)
    await expect(page).toHaveURL('http://10.240.18.15/#/main/journals/adm-cases');
    
});


test('User auth with ECP', async ({ page }) => {

   
});

