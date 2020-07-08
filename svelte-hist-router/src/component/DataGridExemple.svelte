<script>
import DataGrid from './DataGrid.svelte';

let columns = [
    {id: "seq", name: "Seq"},
    {id: "name", name: "이름"},
    {id: "email", name: "메일"},
    {id: "create", name: "생성일"},
    {id: "company", name: "회사"},
    {id: "use", name: "사용여부"},
    {id: "phone", name: "핸드폰"}, 
]
let data = [
	{
		"seq": 1,
		"name": "Nayda Dotson",
		"email": "Ut.tincidunt@ridiculusmus.org",
		"create": "PDT",
		"company": "Id Blandit Industries",
		"use": "N",
		"phone": "1-392-776-1256"
	},
	{
		"seq": 2,
		"name": "Juliet Hartman",
		"email": "Pellentesque@maurisid.co.uk",
		"create": "PDT",
		"company": "Massa Company",
		"use": "N",
		"phone": "323-9470"
	},
	{
		"seq": 3,
		"name": "Amber Riggs",
		"email": "Mauris.non@ultricies.co.uk",
		"create": "PDT",
		"company": "Aliquet Inc.",
		"use": "Y",
		"phone": "506-6262"
	},
	{
		"seq": 4,
		"name": "Guinevere Russo",
		"email": "suscipit.nonummy@PraesentluctusCurabitur.com",
		"create": "PDT",
		"company": "Ac Nulla In Incorporated",
		"use": "N",
		"phone": "1-622-261-3741"
	},
	{
		"seq": 5,
		"name": "Amber Mosley",
		"email": "arcu@Nam.net",
		"create": "PDT",
		"company": "Mauris Morbi PC",
		"use": "N",
		"phone": "1-321-709-2039"
	},
	{
		"seq": 6,
		"name": "Quintessa Benton",
		"email": "eu@metus.co.uk",
		"create": "PDT",
		"company": "Orci In Corp.",
		"use": "Y",
		"phone": "1-586-173-8769"
	},
	{
		"seq": 7,
		"name": "Alea Bright",
		"email": "lectus.Cum.sociis@mattis.net",
		"create": "PST",
		"company": "Aenean Sed Pede Associates",
		"use": "N",
		"phone": "930-8916"
	},
	{
		"seq": 8,
		"name": "Sopoline Price",
		"email": "Ut.nec@ametdapibus.edu",
		"create": "PDT",
		"company": "Nec Tempus Scelerisque PC",
		"use": "Y",
		"phone": "570-7740"
	},
	{
		"seq": 9,
		"name": "Amaya Cook",
		"email": "egestas.lacinia.Sed@eleifendnunc.co.uk",
		"create": "PST",
		"company": "Sem LLP",
		"use": "N",
		"phone": "378-4561"
	},
	{
		"seq": 10,
		"name": "Kimberly Cabrera",
		"email": "ipsum@nullaat.ca",
		"create": "PDT",
		"company": "Dignissim LLC",
		"use": "N",
		"phone": "891-7449"
	},
	{
		"seq": 11,
		"name": "Anika Rosa",
		"email": "lorem.semper@placeratCrasdictum.co.uk",
		"create": "PDT",
		"company": "Sem Mollis Foundation",
		"use": "N",
		"phone": "1-104-743-1881"
	},
	{
		"seq": 12,
		"name": "Wyoming Harris",
		"email": "elementum.at.egestas@auctor.ca",
		"create": "PST",
		"company": "Feugiat Associates",
		"use": "Y",
		"phone": "890-9634"
	},
	{
		"seq": 13,
		"name": "Maite Humphrey",
		"email": "vulputate.velit.eu@Namporttitorscelerisque.net",
		"create": "PDT",
		"company": "Consequat Enim Diam Corp.",
		"use": "Y",
		"phone": "451-0846"
	},
	{
		"seq": 14,
		"name": "Gillian Walls",
		"email": "diam.dictum.sapien@diamProin.org",
		"create": "PST",
		"company": "Sem Molestie Sodales Institute",
		"use": "Y",
		"phone": "1-717-140-3509"
	},
	{
		"seq": 15,
		"name": "Nevada Martinez",
		"email": "pede@risusIn.ca",
		"create": "PST",
		"company": "Orci Ltd",
		"use": "N",
		"phone": "887-3343"
	},
	{
		"seq": 16,
		"name": "Cathleen Gilbert",
		"email": "diam@cursusInteger.ca",
		"create": "PST",
		"company": "Et Corp.",
		"use": "N",
		"phone": "269-5005"
	},
	{
		"seq": 17,
		"name": "Farrah Lewis",
		"email": "In@hymenaeos.edu",
		"create": "PST",
		"company": "Malesuada Integer Institute",
		"use": "Y",
		"phone": "420-8430"
	},
	{
		"seq": 18,
		"name": "Alexis Schwartz",
		"email": "Sed@infaucibus.co.uk",
		"create": "PST",
		"company": "Pretium Corporation",
		"use": "N",
		"phone": "1-330-135-8082"
	},
	{
		"seq": 19,
		"name": "Calista Daniel",
		"email": "eu@rutrum.co.uk",
		"create": "PDT",
		"company": "Risus Duis A Industries",
		"use": "Y",
		"phone": "122-9096"
	},
	{
		"seq": 20,
		"name": "Riley Calderon",
		"email": "congue.turpis@nonsapien.ca",
		"create": "PDT",
		"company": "Aliquam Company",
		"use": "Y",
		"phone": "1-838-162-0184"
	},
	{
		"seq": 21,
		"name": "Leigh Logan",
		"email": "molestie.sodales@nec.co.uk",
		"create": "PDT",
		"company": "Mauris Quis Institute",
		"use": "Y",
		"phone": "1-546-522-7545"
	},
	{
		"seq": 22,
		"name": "Olympia Savage",
		"email": "tellus.faucibus@dapibusidblandit.co.uk",
		"create": "PDT",
		"company": "Iaculis Industries",
		"use": "N",
		"phone": "463-1856"
	},
	{
		"seq": 23,
		"name": "Maggy Baxter",
		"email": "augue@sollicitudin.ca",
		"create": "PDT",
		"company": "Consectetuer Rhoncus PC",
		"use": "N",
		"phone": "1-995-593-2124"
	},
	{
		"seq": 24,
		"name": "Hedy Sweet",
		"email": "molestie.tellus.Aenean@arcuSedeu.net",
		"create": "PDT",
		"company": "Bibendum Fermentum Metus Corporation",
		"use": "N",
		"phone": "103-4432"
	},
	{
		"seq": 25,
		"name": "Anastasia Contreras",
		"email": "nec.cursus@ametmassaQuisque.com",
		"create": "PDT",
		"company": "Malesuada Malesuada Integer LLP",
		"use": "Y",
		"phone": "564-1486"
	},
	{
		"seq": 26,
		"name": "Rana Phelps",
		"email": "facilisis.non.bibendum@Aliquamultrices.net",
		"create": "PDT",
		"company": "Dui Nec PC",
		"use": "Y",
		"phone": "968-0834"
	},
	{
		"seq": 27,
		"name": "Anika Burks",
		"email": "In.ornare.sagittis@Aliquamgravida.com",
		"create": "PDT",
		"company": "Amet Faucibus Corp.",
		"use": "Y",
		"phone": "230-3601"
	},
	{
		"seq": 28,
		"name": "Blair Case",
		"email": "sed@lacusMauris.edu",
		"create": "PST",
		"company": "Augue Eu Tellus Consulting",
		"use": "N",
		"phone": "762-4947"
	},
	{
		"seq": 29,
		"name": "Britanney Lewis",
		"email": "non.dapibus@ipsumdolorsit.co.uk",
		"create": "PST",
		"company": "Felis Nulla Foundation",
		"use": "N",
		"phone": "269-4792"
	},
	{
		"seq": 30,
		"name": "Dana Dunlap",
		"email": "iaculis.nec.eleifend@Nunc.com",
		"create": "PDT",
		"company": "Nam Limited",
		"use": "N",
		"phone": "1-329-887-6364"
	},
	{
		"seq": 31,
		"name": "Brenna Norman",
		"email": "erat@Suspendisse.ca",
		"create": "PDT",
		"company": "Dictum Cursus Ltd",
		"use": "N",
		"phone": "1-879-285-4391"
	},
	{
		"seq": 32,
		"name": "Ainsley Atkinson",
		"email": "aliquet.molestie.tellus@liberoduinec.ca",
		"create": "PST",
		"company": "Suspendisse Aliquet Molestie Associates",
		"use": "Y",
		"phone": "1-672-572-0514"
	},
	{
		"seq": 33,
		"name": "Bree Burgess",
		"email": "dolor@nonfeugiat.net",
		"create": "PDT",
		"company": "Tellus Justo Sit LLP",
		"use": "N",
		"phone": "466-4481"
	},
	{
		"seq": 34,
		"name": "Venus Hancock",
		"email": "consectetuer.ipsum@eratneque.edu",
		"create": "PDT",
		"company": "Aenean Egestas Hendrerit Corporation",
		"use": "N",
		"phone": "763-8811"
	},
	{
		"seq": 35,
		"name": "Kameko Ashley",
		"email": "fermentum@Phasellusataugue.co.uk",
		"create": "PDT",
		"company": "Arcu Vestibulum Associates",
		"use": "Y",
		"phone": "451-7715"
	},
	{
		"seq": 36,
		"name": "Lynn Mcintyre",
		"email": "magna.a@luctusCurabitur.net",
		"create": "PDT",
		"company": "Facilisis Consulting",
		"use": "N",
		"phone": "165-6532"
	},
	{
		"seq": 37,
		"name": "Morgan Farrell",
		"email": "sodales.elit@nostra.com",
		"create": "PST",
		"company": "Mauris Non Dui Institute",
		"use": "N",
		"phone": "325-8747"
	},
	{
		"seq": 38,
		"name": "Vivian Mcgowan",
		"email": "per.conubia.nostra@non.net",
		"create": "PDT",
		"company": "Nulla Institute",
		"use": "N",
		"phone": "855-7507"
	},
	{
		"seq": 39,
		"name": "Laura Stout",
		"email": "leo.Cras.vehicula@dolorsitamet.com",
		"create": "PST",
		"company": "Ullamcorper Duis Cursus Associates",
		"use": "Y",
		"phone": "869-8587"
	},
	{
		"seq": 40,
		"name": "Carolyn Frazier",
		"email": "aliquet@nuncid.net",
		"create": "PDT",
		"company": "Nisi A Odio LLP",
		"use": "Y",
		"phone": "418-3199"
	},
	{
		"seq": 41,
		"name": "Ursa Humphrey",
		"email": "non.massa.non@egestas.net",
		"create": "PDT",
		"company": "Tellus Justo Sit Foundation",
		"use": "Y",
		"phone": "1-434-462-5985"
	},
	{
		"seq": 42,
		"name": "Erin Gilbert",
		"email": "Nullam@sedorci.co.uk",
		"create": "PDT",
		"company": "Nunc Pulvinar Arcu Inc.",
		"use": "N",
		"phone": "227-2766"
	},
	{
		"seq": 43,
		"name": "Rebecca Boyer",
		"email": "vitae.odio.sagittis@penatibuset.ca",
		"create": "PDT",
		"company": "Justo Praesent LLP",
		"use": "N",
		"phone": "896-5968"
	},
	{
		"seq": 44,
		"name": "Kylie Combs",
		"email": "dui@ac.org",
		"create": "PST",
		"company": "Felis Nulla LLC",
		"use": "Y",
		"phone": "332-1004"
	},
	{
		"seq": 45,
		"name": "Jacqueline Le",
		"email": "pellentesque.tellus@Duis.edu",
		"create": "PDT",
		"company": "Quis Pede Praesent Consulting",
		"use": "Y",
		"phone": "293-0745"
	},
	{
		"seq": 46,
		"name": "Carly Pickett",
		"email": "tellus.Nunc.lectus@Cum.edu",
		"create": "PST",
		"company": "Adipiscing LLC",
		"use": "Y",
		"phone": "979-2884"
	},
	{
		"seq": 47,
		"name": "Jasmine Graves",
		"email": "eget@sedest.co.uk",
		"create": "PST",
		"company": "Orci Consectetuer Corp.",
		"use": "Y",
		"phone": "1-701-311-1648"
	},
	{
		"seq": 48,
		"name": "Amaya Barry",
		"email": "justo@atnisiCum.com",
		"create": "PST",
		"company": "Urna Corp.",
		"use": "N",
		"phone": "1-208-191-4626"
	},
	{
		"seq": 49,
		"name": "Dawn Manning",
		"email": "dictum.Proin@nec.org",
		"create": "PDT",
		"company": "Faucibus Morbi Incorporated",
		"use": "Y",
		"phone": "915-1769"
	},
	{
		"seq": 50,
		"name": "Camilla Bowen",
		"email": "vitae.sodales.nisi@sitametornare.co.uk",
		"create": "PDT",
		"company": "Sodales LLP",
		"use": "N",
		"phone": "785-7938"
	},
	{
		"seq": 51,
		"name": "Erica Clark",
		"email": "tellus.Aenean@molestiepharetranibh.edu",
		"create": "PST",
		"company": "Sed Turpis Nec Associates",
		"use": "Y",
		"phone": "1-891-907-9768"
	},
	{
		"seq": 52,
		"name": "Rhiannon Mason",
		"email": "auctor.odio@egestas.net",
		"create": "PDT",
		"company": "Interdum Sed Auctor LLP",
		"use": "Y",
		"phone": "1-569-757-7332"
	},
	{
		"seq": 53,
		"name": "Orli Pacheco",
		"email": "facilisis@aliquameu.com",
		"create": "PDT",
		"company": "Quis Diam Luctus Institute",
		"use": "N",
		"phone": "1-366-554-5718"
	},
	{
		"seq": 54,
		"name": "Hadley Browning",
		"email": "urna.et.arcu@liberoDonecconsectetuer.co.uk",
		"create": "PST",
		"company": "Nec Quam Corporation",
		"use": "Y",
		"phone": "1-209-801-4609"
	},
	{
		"seq": 55,
		"name": "Noelle Barker",
		"email": "amet.metus.Aliquam@dictum.net",
		"create": "PDT",
		"company": "Eu Inc.",
		"use": "N",
		"phone": "1-977-838-0251"
	},
	{
		"seq": 56,
		"name": "Mona Humphrey",
		"email": "in.faucibus@lorem.edu",
		"create": "PDT",
		"company": "Nec Cursus A Institute",
		"use": "N",
		"phone": "1-686-896-1312"
	},
	{
		"seq": 57,
		"name": "Quemby Odonnell",
		"email": "vitae.dolor@ligula.com",
		"create": "PDT",
		"company": "Donec Sollicitudin Adipiscing Associates",
		"use": "Y",
		"phone": "334-8955"
	},
	{
		"seq": 58,
		"name": "Dahlia Lyons",
		"email": "elit.Etiam@nequeIn.co.uk",
		"create": "PST",
		"company": "Velit Justo Company",
		"use": "Y",
		"phone": "345-5849"
	},
	{
		"seq": 59,
		"name": "Idona Baldwin",
		"email": "iaculis.lacus@Nuncut.net",
		"create": "PST",
		"company": "Varius Ultrices PC",
		"use": "Y",
		"phone": "1-973-303-6778"
	},
	{
		"seq": 60,
		"name": "Colleen Lloyd",
		"email": "est.Mauris@semegestasblandit.ca",
		"create": "PDT",
		"company": "Elementum Sem Vitae Institute",
		"use": "Y",
		"phone": "443-1554"
	},
	{
		"seq": 61,
		"name": "Savannah Neal",
		"email": "risus@consectetuereuismodest.edu",
		"create": "PDT",
		"company": "Aenean Eget Corporation",
		"use": "N",
		"phone": "542-2042"
	},
	{
		"seq": 62,
		"name": "Martena Whitaker",
		"email": "mi.lacinia@tellus.edu",
		"create": "PDT",
		"company": "Imperdiet Nec Consulting",
		"use": "N",
		"phone": "712-9119"
	},
	{
		"seq": 63,
		"name": "Charde Burke",
		"email": "pulvinar.arcu@Aeneanmassa.net",
		"create": "PDT",
		"company": "Fermentum Fermentum Arcu Corp.",
		"use": "Y",
		"phone": "1-937-336-4710"
	},
	{
		"seq": 64,
		"name": "Carissa Meyer",
		"email": "Maecenas.mi@tellus.edu",
		"create": "PDT",
		"company": "Ligula Donec Luctus Corp.",
		"use": "Y",
		"phone": "1-409-819-5070"
	},
	{
		"seq": 65,
		"name": "Signe Mcconnell",
		"email": "odio.Phasellus.at@apurusDuis.org",
		"create": "PST",
		"company": "Sed Dui Corporation",
		"use": "N",
		"phone": "461-0560"
	},
	{
		"seq": 66,
		"name": "Iona Hutchinson",
		"email": "parturient@egestashendrerit.edu",
		"create": "PDT",
		"company": "Lorem Vitae Odio Associates",
		"use": "Y",
		"phone": "228-0174"
	},
	{
		"seq": 67,
		"name": "Fiona Holder",
		"email": "libero@Mauris.ca",
		"create": "PST",
		"company": "Blandit LLP",
		"use": "Y",
		"phone": "145-7662"
	},
	{
		"seq": 68,
		"name": "Wilma Maddox",
		"email": "fringilla@liberolacus.ca",
		"create": "PST",
		"company": "Aliquam Incorporated",
		"use": "N",
		"phone": "1-944-470-3875"
	},
	{
		"seq": 69,
		"name": "Shea Walsh",
		"email": "semper@NullafacilisiSed.co.uk",
		"create": "PST",
		"company": "Tortor Dictum Company",
		"use": "N",
		"phone": "1-689-773-9893"
	},
	{
		"seq": 70,
		"name": "Amethyst Humphrey",
		"email": "ridiculus.mus.Proin@etultrices.com",
		"create": "PST",
		"company": "Nec Ante Blandit Corporation",
		"use": "Y",
		"phone": "1-887-131-2813"
	},
	{
		"seq": 71,
		"name": "Demetria Bailey",
		"email": "nibh.lacinia.orci@lorem.ca",
		"create": "PDT",
		"company": "Quam Consulting",
		"use": "N",
		"phone": "1-485-734-0298"
	},
	{
		"seq": 72,
		"name": "Phyllis Davidson",
		"email": "mollis.lectus.pede@justofaucibus.edu",
		"create": "PDT",
		"company": "Vel Vulputate Limited",
		"use": "N",
		"phone": "1-330-422-0059"
	},
	{
		"seq": 73,
		"name": "Jolie Sherman",
		"email": "Vestibulum@ultriciesligulaNullam.edu",
		"create": "PDT",
		"company": "Odio Etiam Ligula Incorporated",
		"use": "Y",
		"phone": "1-876-556-6775"
	},
	{
		"seq": 74,
		"name": "Whitney Berg",
		"email": "augue@hendrerit.com",
		"create": "PST",
		"company": "Elit Fermentum Incorporated",
		"use": "Y",
		"phone": "421-1620"
	},
	{
		"seq": 75,
		"name": "Hedda Whitfield",
		"email": "hendrerit.a.arcu@Nuncuterat.edu",
		"create": "PDT",
		"company": "Tristique Neque Company",
		"use": "N",
		"phone": "493-7452"
	},
	{
		"seq": 76,
		"name": "Heidi Pace",
		"email": "cursus@semmolestie.org",
		"create": "PDT",
		"company": "Urna Et Corp.",
		"use": "Y",
		"phone": "1-446-244-4103"
	},
	{
		"seq": 77,
		"name": "Vanna Buckley",
		"email": "Nulla.aliquet@pedeNunc.org",
		"create": "PDT",
		"company": "Metus Urna Convallis LLC",
		"use": "N",
		"phone": "384-4708"
	},
	{
		"seq": 78,
		"name": "Aurelia Cooley",
		"email": "consectetuer.adipiscing@nondui.co.uk",
		"create": "PST",
		"company": "Sapien Imperdiet LLP",
		"use": "Y",
		"phone": "1-520-442-2024"
	},
	{
		"seq": 79,
		"name": "Rhona Carlson",
		"email": "sociis@et.ca",
		"create": "PST",
		"company": "Scelerisque Scelerisque Dui Associates",
		"use": "Y",
		"phone": "1-992-234-0557"
	},
	{
		"seq": 80,
		"name": "Anika Fuentes",
		"email": "sit@Integervitae.com",
		"create": "PDT",
		"company": "Sed Institute",
		"use": "Y",
		"phone": "623-0907"
	},
	{
		"seq": 81,
		"name": "Lillith Hodges",
		"email": "Proin.vel.nisl@urnaVivamus.org",
		"create": "PST",
		"company": "Purus Company",
		"use": "N",
		"phone": "1-376-174-6581"
	},
	{
		"seq": 82,
		"name": "Isabelle Hinton",
		"email": "nunc.interdum.feugiat@Craseget.net",
		"create": "PDT",
		"company": "Quisque Fringilla Limited",
		"use": "Y",
		"phone": "1-472-795-4327"
	},
	{
		"seq": 83,
		"name": "Ulla Campbell",
		"email": "libero@dapibus.co.uk",
		"create": "PDT",
		"company": "Placerat Augue Sed LLP",
		"use": "Y",
		"phone": "1-314-252-6237"
	},
	{
		"seq": 84,
		"name": "Quintessa Mcdowell",
		"email": "et@ipsumdolor.org",
		"create": "PDT",
		"company": "Eu Corporation",
		"use": "Y",
		"phone": "1-930-746-1891"
	},
	{
		"seq": 85,
		"name": "Iris Rowland",
		"email": "consectetuer.rhoncus.Nullam@doloregestas.edu",
		"create": "PST",
		"company": "Tempus Scelerisque Corporation",
		"use": "N",
		"phone": "1-512-133-2356"
	},
	{
		"seq": 86,
		"name": "Iola Bright",
		"email": "pede.nec@Maecenas.net",
		"create": "PDT",
		"company": "Egestas Blandit Limited",
		"use": "N",
		"phone": "1-421-235-8621"
	},
	{
		"seq": 87,
		"name": "Bethany Mcfarland",
		"email": "in@Donecatarcu.org",
		"create": "PDT",
		"company": "Lectus Sit PC",
		"use": "Y",
		"phone": "815-9922"
	},
	{
		"seq": 88,
		"name": "Kendall Clark",
		"email": "ante@necmollis.com",
		"create": "PDT",
		"company": "Sit Amet Consectetuer Inc.",
		"use": "N",
		"phone": "1-550-725-5969"
	},
	{
		"seq": 89,
		"name": "Autumn Robertson",
		"email": "odio.a.purus@egetlaoreet.com",
		"create": "PST",
		"company": "Diam Company",
		"use": "Y",
		"phone": "1-743-853-3451"
	},
	{
		"seq": 90,
		"name": "Maris Romero",
		"email": "diam.dictum.sapien@aliquam.ca",
		"create": "PDT",
		"company": "Lorem Limited",
		"use": "N",
		"phone": "433-8154"
	},
	{
		"seq": 91,
		"name": "Mechelle Bradshaw",
		"email": "dignissim.lacus.Aliquam@ettristique.edu",
		"create": "PDT",
		"company": "Lacus Corp.",
		"use": "N",
		"phone": "1-867-630-1372"
	},
	{
		"seq": 92,
		"name": "Kristen Snow",
		"email": "nibh@elitNullafacilisi.co.uk",
		"create": "PST",
		"company": "Elit Dictum Ltd",
		"use": "Y",
		"phone": "1-961-321-3502"
	},
	{
		"seq": 93,
		"name": "Pandora Benson",
		"email": "hendrerit@Maecenasiaculisaliquet.net",
		"create": "PST",
		"company": "Neque Nullam Associates",
		"use": "Y",
		"phone": "438-3988"
	},
	{
		"seq": 94,
		"name": "Hollee Serrano",
		"email": "morbi@sollicitudin.org",
		"create": "PDT",
		"company": "Ultrices Company",
		"use": "N",
		"phone": "265-8500"
	},
	{
		"seq": 95,
		"name": "Dai Delgado",
		"email": "lobortis@ut.com",
		"create": "PDT",
		"company": "Pede Associates",
		"use": "Y",
		"phone": "1-614-783-6860"
	},
	{
		"seq": 96,
		"name": "Ignacia Farley",
		"email": "Fusce.fermentum.fermentum@a.org",
		"create": "PDT",
		"company": "Scelerisque Scelerisque Dui Limited",
		"use": "N",
		"phone": "1-198-995-7410"
	},
	{
		"seq": 97,
		"name": "Phoebe Murphy",
		"email": "Vivamus.euismod@vestibulumMauris.edu",
		"create": "PST",
		"company": "Arcu Curabitur Institute",
		"use": "N",
		"phone": "1-661-502-7805"
	},
	{
		"seq": 98,
		"name": "Joy Hyde",
		"email": "eget@eros.edu",
		"create": "PDT",
		"company": "Nec Corp.",
		"use": "N",
		"phone": "385-6497"
	},
	{
		"seq": 99,
		"name": "Aurora Farmer",
		"email": "quis.diam.Pellentesque@eu.com",
		"create": "PDT",
		"company": "Odio Tristique Industries",
		"use": "N",
		"phone": "978-6664"
	},
	{
		"seq": 100,
		"name": "Hermione Moreno",
		"email": "Nulla.semper@erateget.co.uk",
		"create": "PDT",
		"company": "Vitae Velit Egestas Limited",
		"use": "Y",
		"phone": "1-107-591-9225"
	}
];
</script>

<DataGrid data={data} columns={columns} />