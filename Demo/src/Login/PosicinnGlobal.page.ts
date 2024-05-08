import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    header:`header[class="oxd-topbar"]`,
    layout:`[class="oxd-layout-context"]`,
    footer:`[class="oxd-layout-footer"]`,
}

@PageContext({
    path: '/web/index.php/dashboard/index', 
    wrapper: `[id="app"]`, //Padre  o nodo principal
})
export class globalPage extends Page {

    async validPosicionGlobal() {
        await (await $(select.header)).waitForDisplayed({timeout: 120000 });
        await (await $(select.header)).isExisting();

        await (await $(select.layout)).waitForDisplayed({timeout: 120000 });
        await (await $(select.layout)).isExisting();
        
        await (await $(select.footer)).waitForDisplayed({timeout: 120000 });
        await (await $(select.footer)).isExisting();
    }
}