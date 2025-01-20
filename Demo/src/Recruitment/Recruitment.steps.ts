import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { loginOrangehrmPage } from "../Login/LoginOrange.page";
import { globalPage } from "../Login/PosicionGlobal.page";
import { RecruitmentPage } from "./Recruitment.page";

export class RecruitmentSteps {

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
    get RecruitmentPage(){
        return pageProvider.wait(RecruitmentPage);
    }
    async varDatamanager(){
        const user = await this.world.users.get();
        return user;
    }

    @Given(/^que estoy en la pagina principal del aplicativo despues de loguearme$/)
    async Reclutamiento() {
        await pageProvider.go(loginOrangehrmPage);
        await ((await this.loginOrangehrmPage)).Login();
        await ((await this.loginOrangehrmPage)).bntLogin();
        await pageProvider.go(globalPage);
        await ((await this.globalPage)).validPosicionGlobal();
    }
    
    @When(/^hago clic en el boton "Recruitment"$/)
    async botonRecruitment() {
        await ((await this.RecruitmentPage)).bntRecruitment(); 
    }
    
    @Then(/^tengo habilitadas las opciones para ingresar datos del candidato$/)
    async inicioCandidates() {
        await pageProvider.go(RecruitmentPage); 
    }
}
