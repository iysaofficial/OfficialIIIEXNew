import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DigitalAgencyTwoComponent } from "./components/pages/digital-agency-two/digital-agency-two.component";
import { DigitalAgencyThreeComponent } from "./components/pages/digital-agency-three/digital-agency-three.component";
import { NewsComponent } from "./components/pages/news/news.component";
import { News1Component } from "./components/pages/news/news.component";
import { News2Component } from "./components/pages/news/news.component";
import { News3Component } from "./components/pages/news/news.component";
import { News4Component } from "./components/pages/news/news.component";
import { News5Component } from "./components/pages/news/news.component";
import { News6Component } from "./components/pages/news/news.component";
import { News7Component } from "./components/pages/news/news.component";
import { News8Component } from "./components/pages/news/news.component";
import { News9Component } from "./components/pages/news/news.component";
import { FAQComponent } from "./components/pages/faq/faq";
import { Lowtahun} from "./components/pages/low/lowtahun";
import { Kategori24} from "./components/pages/low/2024/2024";
import { Jenjangofl24 } from "./components/pages/low/2024/2024";
import { Jenjangonl24 } from "./components/pages/low/2024/2024";

const routes: Routes = [
    { path: "", component: DigitalAgencyTwoComponent },
    { path: "id", component: DigitalAgencyThreeComponent },
    { path: "listnews", component: NewsComponent },
    { path: "news1", component: News1Component },
    { path: "news2", component: News2Component },
    { path: "news3", component: News3Component },
    { path: "news4", component: News4Component },
    { path: "news5", component: News5Component },
    { path: "news6", component: News6Component },
    { path: "news7", component: News7Component },
    { path: "news8", component: News8Component },
    { path: "news9", component: News9Component },
    { path: "FAQ", component: FAQComponent },
    { path: "lowtahun", component: Lowtahun },
    { path: "kategori24", component: Kategori24 },
    { path: "jenjangofl24", component: Jenjangofl24 },
    { path: "jenjangonl24", component: Jenjangonl24 },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
