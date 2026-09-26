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
import { KurasiTahunComponent } from './components/pages/kurasi/kurasi-tahun.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DigitalAgencyTwoComponent,
        DigitalAgencyThreeComponent,
        FAQComponent,
        ImageSliderComponent,
        /*
          Halaman kurasi HARUS dideklarasikan di sini, tidak seperti halaman
          lain di `app-routing` yang tidak. Halaman-halaman itu HTML statis;
          di Ivy sebuah komponen tanpa NgModule tetap bisa dipasang router,
          cuma cakupan direktifnya kosong. Halaman ini memakai `*ngIf` dan
          `*ngFor`, dan keduanya datang dari `CommonModule` lewat modul ini —
          tanpa dideklarasikan, keduanya diam-diam tidak berlaku dan yang
          tampil cuma halaman kosong.
        */
        KurasiTahunComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CommonModule, SwiperModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}