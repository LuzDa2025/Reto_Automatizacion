import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { LoginOrangehrmPage } from "./LoginOrange.page";
import { globalPage } from "./PosicinnGlobal.page";

export class LoginOrangeSteps {

    world: World;

    constructor(world){
        this.world = world;
    }

    get LoginOrangehrmPage() {
        return pageProvider.wait(LoginOrangehrmPage);
    }
    get globalPage() {
        return pageProvider.wait(globalPage);
    }
    async varDatamanager(){
        const user = await this.world.users.get();
        return user;
    }

    @Given(/^que estoy en la página de inicio de sesión$/)
    async sesion() {
        await pageProvider.go(LoginOrangehrmPage); //
    }
    @When(/^ingreso mi nombre de usuario y mi contraseña$/)
    async credenciales() {
        await ((await this.LoginOrangehrmPage)).Login();  
    }
    @When(/^hago clic en el botón "Login"$/)
    async botonLogin() {
        await ((await this.LoginOrangehrmPage)).bntLogin();
    }
    @Then(/^debería ser redirigido a la página principal$/)
    async posiciónGlobal() {
        await ((await this.globalPage)).validPosicionGlobal();
    }

}
