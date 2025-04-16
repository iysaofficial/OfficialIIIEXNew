import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from"../app/app-routing.module";
import { AppComponent } from "../app/app.component";
import { HeaderComponent } from "../app/components/layout/header/header.component";
import { FooterComponent } from "../app/components/layout/footer/footer.component";
import { DigitalAgencyTwoComponent } from "../app/components/pages/digital-agency-two/digital-agency-two.component";
import { DigitalAgencyThreeComponent } from "../app/components/pages/digital-agency-three/digital-agency-three.component";
import { FAQComponent } from "../app/components/pages/faq/faq";
import { SwiperModule } from 'swiper/angular';
import { ImageSliderComponent } from './components/layout/image-slider/image-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DigitalAgencyTwoComponent,
        DigitalAgencyThreeComponent,
        FAQComponent,
        ImageSliderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CommonModule, SwiperModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}