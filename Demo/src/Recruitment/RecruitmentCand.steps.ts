import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { loginOrangehrmPage } from "../Login/LoginOrange.page";
import { globalPage } from "../Login/PosicionGlobal.page";
import { RecruitmentPage } from "../Recruitment/Recruitment.page";
import { RecruitmentCandPage } from "./RecruitmentCand.page";

export class RecruitmentCandSteps {

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
    get RecruitmentCandPage(){
        return pageProvider.wait(RecruitmentCandPage);
    }
    async varDatamanager(){
        const user = await this.world.users.get();
        return user;
    }

    @Given(/^que estoy en la opcion "Candidates"$/)
    async Candidato() {
        await pageProvider.go(loginOrangehrmPage);
        await ((await this.loginOrangehrmPage)).Login();
        await ((await this.loginOrangehrmPage)).bntLogin();
        await pageProvider.go(RecruitmentPage);
        await ((await this.RecruitmentPage)).bntRecruitment();
    }
    
    @When(/^requiero seleccionar el titulo profesional$/)
    async listaJobTitle() {
        await ((await this.RecruitmentCandPage)).clickFinancialAnalyst();
            }
    
    @Then(/^selecciono de la lista la opcion "Financial Analyst"$/)
    async selectJobTitle() {
        await ((await this.RecruitmentCandPage)).selectFinancialAnalyst();
    }

    @When(/^requiero seleccionar la vacante$/)
    async listaVacancy() {
        await ((await this.RecruitmentCandPage)).clickJuniorAccount();
            }
    
    @Then(/^selecciono de la lista la opcion "Junior Account Assistant"$/)
    async selectVacancy() {
        await ((await this.RecruitmentCandPage)).selectJuniorAccount();
    }
}
