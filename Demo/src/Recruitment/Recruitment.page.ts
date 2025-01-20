import {Page, PageContext} from "@testing/wdio-page-objects";

const select = {
    bntRecruitment :`a[href="/web/index.php/recruitment/viewRecruitmentModule"]`,
}

@PageContext({
    path: '/web/index.php/dashboard/index',
    wrapper: `[id="app"]`, //Padre  o nodo principal
})
export class RecruitmentPage extends Page {

    async bntRecruitment(){
        await (await $(select.bntRecruitment)).waitForDisplayed({timeout: 12000 });
        await (await $(select.bntRecruitment)).isExisting();
        await (await $(select.bntRecruitment)).click();
    }
}
