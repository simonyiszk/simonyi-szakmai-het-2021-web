import { Component, OnInit } from '@angular/core';
import { TimelineCardProps } from '../timeline-card/timeline-card.component';

@Component({
	selector: 'app-minikonf',
	templateUrl: './minikonf.component.html',
	styleUrls: ['./minikonf.component.scss'],
})
export class MinikonfComponent implements OnInit {
	constructor() {}

	items: TimelineCardProps[] = [
		{
			date: '12:20-12:50',
			title: 'Kiberfenyegetések a világjárvány alatt',
			description:
				'A COVID-19 járvány miatt munkavállalók tömegei kénytelenek otthonról dolgozni, és teljesen megváltoztatni a napi munkavégzési szokásaikat. Ez az éles váltás elengedhetetlen technológiákká tette az e-mail kommunikációt, a telefon- és videokonferenciát és a távoli hozzáférést, ugyanakkor nagyobb támadási felületet biztosít a kiberbűnözők számára. Az ESET szakértőinek elmúlt éves tapasztalatai azt mutatják, hogy a hackerek megpróbálják maximálisan kihasználni ezeket a lehetőségeket, de mint minden éremnek, ennek is két oldala van. Hamar kárba vész a hackeléssel megszerzett valuta és nemesfém, ha az ukrán rendőrség - a már jól bevált módszerével - "kopogtat" az ajtónkon.',
			image: 'assets/cat.png',
			presenter: 'SZINCSÁK TAMÁS - IT TANÁCSADÓ, SICONTACT',
		},
		{
			date: '12:20-12:50',
			title: 'Kiberfenyegetések a világjárvány alatt',
			description:
				'A COVID-19 járvány miatt munkavállalók tömegei kénytelenek otthonról dolgozni, és teljesen megváltoztatni a napi munkavégzési szokásaikat. Ez az éles váltás elengedhetetlen technológiákká tette az e-mail kommunikációt, a telefon- és videokonferenciát és a távoli hozzáférést, ugyanakkor nagyobb támadási felületet biztosít a kiberbűnözők számára. Az ESET szakértőinek elmúlt éves tapasztalatai azt mutatják, hogy a hackerek megpróbálják maximálisan kihasználni ezeket a lehetőségeket, de mint minden éremnek, ennek is két oldala van. Hamar kárba vész a hackeléssel megszerzett valuta és nemesfém, ha az ukrán rendőrség - a már jól bevált módszerével - "kopogtat" az ajtónkon.',
			image: 'assets/cat.png',
			presenter: 'SZINCSÁK TAMÁS - IT TANÁCSADÓ, SICONTACT',
		},
		{
			date: '12:20-12:50',
			title: 'Kiberfenyegetések a világjárvány alatt',
			description:
				'A COVID-19 járvány miatt munkavállalók tömegei kénytelenek otthonról dolgozni, és teljesen megváltoztatni a napi munkavégzési szokásaikat. Ez az éles váltás elengedhetetlen technológiákká tette az e-mail kommunikációt, a telefon- és videokonferenciát és a távoli hozzáférést, ugyanakkor nagyobb támadási felületet biztosít a kiberbűnözők számára. Az ESET szakértőinek elmúlt éves tapasztalatai azt mutatják, hogy a hackerek megpróbálják maximálisan kihasználni ezeket a lehetőségeket, de mint minden éremnek, ennek is két oldala van. Hamar kárba vész a hackeléssel megszerzett valuta és nemesfém, ha az ukrán rendőrség - a már jól bevált módszerével - "kopogtat" az ajtónkon.',
			image: 'assets/cat.png',
			presenter: 'SZINCSÁK TAMÁS - IT TANÁCSADÓ, SICONTACT',
		},
	];
	ngOnInit(): void {}
}
