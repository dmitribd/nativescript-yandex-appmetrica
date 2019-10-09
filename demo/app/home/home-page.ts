/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

import * as appMetrica from "nativescript-yandex-metrica";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    appMetrica.initialize({apiKey: 'bace0bc7-ec56-432f-85a9-da4144a9847b'});
}
