import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    username :`input[name="username"]`,
    password : `input[type="password"]`,
    bntLogin :`button.oxd-button[type="submit"]`,
}

@PageContext({
    path: '/web/index.php/auth/login', 
    wrapper: `[id="app"]`, //Padre  o nodo principal
})
export class LoginOrangehrmPage extends Page {

    async Login() {

        await (await $(select.username)).waitForDisplayed({timeout: 9000 });
        await (await $(select.username)).isExisting();
        await (await $(select.username)).addValue('Admin');

        await (await $(select.password)).waitForDisplayed({timeout: 9000 });
        await (await $(select.password)).isExisting();
        await (await $(select.password)).addValue('admin123');
    }
    async bntLogin(){
        await (await $(select.bntLogin)).waitForDisplayed({timeout: 9000 });
        await (await $(select.bntLogin)).isExisting();
        await (await $(select.bntLogin)).click();
    }
}
