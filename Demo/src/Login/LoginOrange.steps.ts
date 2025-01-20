import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { loginOrangehrmPage } from "./LoginOrange.page";
import { globalPage } from "./PosicionGlobal.page";

export class loginOrangeSteps {

    world: World;

    constructor(world){
        this.world = world;
    }

    get loginOrangehrmPage() {
        return pageProvider.wait(loginOrangehrmPage);
    }
    get globalPage() {
        return pageProvider.wait(globalPage);
    }
    async varDatamanager(){
        const user = await this.world.users.get();
        return user;
    }

    @Given(/^que estoy en la pagina de inicio de sesion$/)
    async sesion() {
        await pageProvider.go(loginOrangehrmPage);
    }
    @When(/^ingreso nombre de usuario y contraseña$/)
    async credenciales() {
        await ((await this.loginOrangehrmPage)).Login();  
    }
    @When(/^hago clic en el boton "Login"$/)
    async botonLogin() {
        await ((await this.loginOrangehrmPage)).bntLogin();
    }
    @Then(/^soy redirigida a la pagina principal del aplicativo$/)
    async posicionGlobal() {
        await ((await this.globalPage)).validPosicionGlobal();
    }

}
