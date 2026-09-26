import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { KurasiService, BerkasKurasi, berkasTampil } from "../../../services/kurasi.service";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa tidak ditautkan ke Google Drive seperti edisi sebelumnya ───────
 *
 * Menu Curation situs ini menunjuk empat folder Drive yang ditulis di kode.
 * Cara itu bekerja tepat satu kali: begitu ada berkas ditambahkan, diganti,
 * atau ditarik, situsnya tidak ikut tahu — dan yang membetulkannya harus
 * orang yang bisa deploy. Edisi 2026 karena itu dibaca dari dasbor, tempat
 * berkasnya memang sudah hidup.
 *
 * Tautan Drive edisi 2022–2025 sengaja dibiarkan: berkasnya tidak pernah
 * masuk dasbor, jadi memindahkan tautannya berarti menghilangkannya.
 *
 * ── Kenapa memakai kerangka halaman situs ini ────────────────────────────
 *
 * `page-title-area` dan `uk-container` dipakai seluruh halaman lain di sini.
 * Menulis tata letak sendiri berarti satu halaman yang judulnya duduk di
 * tempat berbeda dari halaman di sebelahnya — dan yang menyadarinya nanti
 * harus membetulkan dua gaya, bukan satu.
 */
@Component({
    selector: "app-kurasi-tahun",
    templateUrl: "./kurasi-tahun.component.html",
    styleUrls: ["./kurasi-tahun.component.scss"],
})
export class KurasiTahunComponent implements OnInit {
    tahun = "";
    berkas: BerkasKurasi[] | null = null;
    galat = false;

    constructor(private rute: ActivatedRoute, private kurasi: KurasiService) {}

    ngOnInit(): void {
        /*
         * Berlangganan parameter, bukan membacanya sekali.
         *
         * Angular memakai ulang komponen yang sama saat berpindah antar rute
         * yang hanya berbeda parameternya — /kurasi/2026 → /kurasi/2025 tidak
         * membangun ulang apa pun. Membacanya sekali di ngOnInit berarti
         * halamannya tetap menampilkan edisi yang lama.
         */
        this.rute.paramMap.subscribe((p) => {
            this.tahun = p.get("tahun") || "";
            this.berkas = null;
            this.galat = false;
            this.kurasi
                .berkas(this.tahun)
                .then((d) => {
                    this.berkas = berkasTampil(d);
                })
                .catch(() => {
                    this.galat = true;
                });
        });
    }
}
