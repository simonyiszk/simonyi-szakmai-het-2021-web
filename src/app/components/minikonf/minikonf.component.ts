import { Component } from '@angular/core';
import { TimelineCardProps } from '../timeline-card/timeline-card.component';

@Component({
	selector: 'app-minikonf',
	templateUrl: './minikonf.component.html',
	styleUrls: ['./minikonf.component.scss'],
})
export class MinikonfComponent {
	constructor() {}

	items: TimelineCardProps[] = [
		{
			date: 'Kedd, 17:00',
			title: 'Megnyitó',
		},
		{
			date: 'Kedd, 17:15 - 17:55',
			title: 'Egy tech cég szerverek nélkül',
			description:
				'Az egyre több területet lefedő serverless modell alapja az AWS Lambda, az első népszerű "Function as a Service" szolgáltatás. Előadásomban megmutatom, hogy a Shapr3D-nél miért döntöttünk a modell használata mellett, hogyan írjuk a backend szolgáltatásainkat ebben a szellemben, miként üzemeltetjük őket, illetve, hogy hogyan vertelek át az előadás címével.',
			image: 'assets/barnabás_gema.png',
			presenter: 'Gema Barnabás - Shapr3D',
		},
		{
			date: 'Kedd, 18:00 - 18:50',
			title: 'DevOps a gyakorlatban: Adatfeldolgozás Microsoft Azure-ben',
			description:
				'A Bosch bemutatja legújabb adatgyűjtési platformját! Avagy hogyan sikerült egységesítenünk a változó projektigényeket, és egy olyan közös, nyílt forráskódú megoldást nyújtani a Bosch csapatainak, ami a legtöbb igényt kielégíti - mindezt Microsoft Azure alapokon, a felhőben.',
			image: 'assets/halmos_gyula.png',
			presenter: 'Halmos Gyula - Bosch',
		},
		{
			date: 'Kedd, 19:00-21:15',
			title: 'Kerekasztal beszélgetés - Autóipar',
			description:
				'Mikor lesz megfizethető az elektromos autózás támogatások nélkül is? Mi okozza az önvezetés legnagyobb nehézségét; a környezet helyes felismerése, vagy az esetleges hiba után bekövetkezett jogi felelősség megállapítása? Ilyen és ezekhez hasonló kérdésekre keressük a válaszokat a kedd esti kerekasztal beszélgetésen, ahol saját kérdéseiteket is feltehetitek majd!',
			image: 'assets/default.png',
			presenters: [
				'Dr Szalay Zsolt - A BME Automated Drive Laboratory vezetője',
				'Dr. Aradi Szilárd - Autonóm rendszerek Nemzeti Laboratórium vezető kutatója',
				'Gajdán Miklós - Az “Év autója”-zsűritag, a Totalcar újságírója',
				'Sturcz Antal - A Totalcar újságírója',
			],
		},
		{
			date: 'Kedd, 21:15',
			title: 'Nyereményjáték sorsolás',
		},
		{
			date: 'Szerda, 18:00',
			title: 'Megnyitó',
		},
		{
			date: 'Szerda, 18:15 - 19:05',
			title: 'Hogyan vigyünk nemzetközi sikerre egy saját digitális terméket?',
			description:
				'Hogyan indul el egy kicsi csapat egy új webes termék fejlesztésével? Hogyan lehet nemzetközi közönségnek tervezni és eljutni hozzájuk? Előadásomban a uxfol.io történetéről mesélek nektek, a színfalak mögötti részletekről, a kezdetektől egészen a megvalósításig. Mindemellett a kezdeti nehézségekről és a mérnöki szemlélet fontosságáról is szót ejtünk az este folyamán.',
			image: 'assets/pasztor_david.png',
			presenter: 'Pásztor Dávid, Vass Bence - UX studio',
		},
		{
			date: 'Szerda, 19:15 - 20:05',
			title:
				'Sikeres és érdekes intercom projektek, avagy mit használnak a hazai broadcasterek?',
			description: 'hamarosan',
			image: 'assets/cserepes_andras.png',
			presenter: 'Cserpes András - Broadmax',
		},
		{
			date: 'Szerda, 20:10-22:00',
			title: 'Sörkóstoló',
			description:
				'A minikonferencia lezárásaként a Nove Services biztosította sörkóstolóval várunk minden kedves érdeklődőt. Természetesen nem csak a kóstolásé a főszerep: tudj meg mindent a sörfőzés folyamatáról, az ízvilágok létrehozásáról is!',
		},
		{
			date: 'Szerda, 22:00',
			title: 'Nyereményjáték sorsolás',
		},
	];
}
