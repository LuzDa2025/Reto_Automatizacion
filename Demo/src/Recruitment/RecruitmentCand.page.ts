import {Page, PageContext} from "@testing/wdio-page-objects";

const select = {
    //JobTitle :`div[class="oxd-select-text oxd-select-text--active"]`,
    //Vacancy :`div[class="oxd-select-text oxd-select-text--focus"]`,
    CandidateName :`input[placeholder="Type for hints..."]`,
    bntAdd :`button[class="oxd-button oxd-button--medium oxd-button--secondary"]`,
}

@PageContext({
    path: '/web/index.php/recruitment/viewCandidates',
    wrapper: `[id="app"]`, //Padre  o nodo principal
})
export class RecruitmentCandPage extends Page {

    //async clickFinancialAnalyst(){
        //await (await $(select.JobTitle)).waitForDisplayed({timeout: 12000 });
        //await (await $(select.JobTitle)).isExisting();
        //await (await $(select.JobTitle)).click();
    //}
    //async selectFinancialAnalyst(){
        //await (await $(select.JobTitle)).waitForDisplayed({timeout: 20000 });
        //await (await $(select.JobTitle)).isExisting();
        //await (await $(select.JobTitle)).addValue('Financial Analyst');
    //}
    //async clickJuniorAccount(){
        //await (await $(select.Vacancy)).waitForDisplayed({timeout: 12000 });
        //await (await $(select.Vacancy)).isExisting();
        //await (await $(select.Vacancy)).click();
    //}
    //async selectJuniorAccount(){
        //await (await $(select.Vacancy)).waitForDisplayed({timeout: 20000 });
        //await (await $(select.Vacancy)).isExisting();
        //await (await $(select.Vacancy)).addValue('Junior Account Assistant');
    //}
    //async clickJuniorAccount(){
        //await (await $(select.Vacancy)).waitForDisplayed({timeout: 12000 });
        //await (await $(select.Vacancy)).isExisting();
        //await (await $(select.Vacancy)).click();
    //}
    async CandidateName(){
        await (await $(select.CandidateName)).waitForDisplayed({timeout: 20000 });
        await (await $(select.CandidateName)).isExisting();
        await (await $(select.CandidateName)).click();
    }
    async selectCandidateName(){
        await (await $(select.CandidateName)).waitForDisplayed({timeout: 20000 });
        await (await $(select.CandidateName)).isExisting();
        await (await $(select.CandidateName)).addValue('Joshua  Malfoy');
    }
    async bntAdd(){
        await (await $(select.bntAdd)).waitForDisplayed({timeout: 12000 });
        await (await $(select.bntAdd)).isExisting();
        await (await $(select.bntAdd)).click();
    }
}
