import { Component } from '@angular/core';
import { TimelineCardProps } from '../timeline-card/timeline-card.component';

@Component({
	selector: 'app-szakmaiest',
	templateUrl: './szakmaiest.component.html',
	styleUrls: ['./szakmaiest.component.scss'],
})
export class SzakmaiestComponent {
	constructor() {}

	items: TimelineCardProps[] = [
		{
			date: 'Hétfő, 18:00',
			title: 'Megnyitó',
		},
		{
			date: 'Hétfő, 18:15 - 18:50',
			title: 'MorseAVR',
			description:
				'Morzéznál valódi billentyűn, de nincs rádiód? Használd a számtalan PC-s Morse alkalmazást ezzel az egyszerű trükkel! A Big Enter mintájára.',
			image: 'assets/default.png',
			presenter: 'Csókás Bence - H5KFU',
		},
		{
			date: 'Hétfő, 18:55 - 19:30',
			title: 'PéK: Webfejlesztés hosszútávon',
			description:
				'Az előadáson a Schönherz Kollégium egyik leghosszabb ideje üzemelő  webes alkalmazásának, a PéK-nek, a fejlesztésébe nyerhetnek betekintés a résztvevők. Átbeszéljük, hogy milyen kihívásokkal kell szembenéznie egy csapatnak, ha több mint 20 éven keresztül szeretne egy szoftveres szolgáltatást biztosítani a kollégium lakóinak - szoftveres háttér, technikai problémák, vagy HR? Minden aspektusról szót ejtünk!',
			image: 'assets/default.png',
			presenter: 'Sepsi László - Kir-Dev',
		},
		{
			date: 'Hétfő, 19:35 - 20:10',
			title: '3D Design',
			description:
				'A 3D világa körülvesz minket. Filmek, videojátékok, és még sok minden más, amiről talán nem is gondolnánk. A workshop által betekintést nyerhettek ebbe a világba, munkafolyamatokba, akár egy-egy karakter születésébe is. Ha érdekel a 3D, és szeretnéd megérteni a hátterét, tarts velünk!',
			image: 'assets/default.png',
			presenter: 'Bódog Juli, Sáfár Dániel - schdesign',
		},
		{
			date: 'Hétfő, 20:25 - 21:00',
			title: 'Smart Home',
			description:
				'Az előadás során a smart home trendek és technológiák világába invitállak benneteket. Szó lesz arról, hogy hogyan kell megtervezni és kivitelezni egy lakás felokosítását, akár saját készítésű IoT eszközökkel. A technológiák, hálózati megoldások és eszközök bemutatásán túl gyakorlati példákkal is megismerkedhettek.',
			image: 'assets/default.png',
			presenter: 'Simkó Máté - LEGO',
		},
		{
			date: 'Hétfő, 21:05 - 21:40',
			title:
				'"Aki tudja, csinálja, aki nem tudja, tanítja" - a médiaoktatásról',
			description:
				'A média világa olykor sötét és hátborzongató hellyé alakulhat, ezért fontos, hogy a fiatalok minél korábban tudatos médiafogyasztóvá váljanak. Ehhez szükséges, hogy körültekintő és informatív médiaismeret órákon vehessenek részt, ahol nincsen tabu, sem rossz válasz. A tanári szakma felelősséggel jár, a mondással ellentétben pedig nem árt, ha tudjuk is, hogy miről beszélünk.',
			image: 'assets/default.png',
			presenter: 'Molnár B. Dóra - BSS',
		},
		{
			date: 'Hétfő, 21:40',
			title: 'Nyereményjáték sorsolás',
		},
	];
}
