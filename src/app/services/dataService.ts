/**
 * Created by Slvnm on 01/10/2018.
 */

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/index";

@Injectable()
export class DataService {

  private mapSelected : string;
  private mapSelected$ : BehaviorSubject<string>;

  public schools: any[];
  private schoolSelected: any;
  private schoolSelected$: BehaviorSubject<any>;

  constructor() {
    this.schools = [
      {
        id: 1,
        nom: 'Wis',
        siteWeb: 'http://www.wis-ecoles.com/campus/campus-de-lille/',
        logo: '../assets/img/logo.png',
        logo_min: '../assets/img/wis_Min.png',
        img: '../assets/img/wis-photo-1662x936.jpg',
        description: 'WIS en quelques mots,\n' +
          'Première formation aux métiers du web. Elle combine des enseignements qui reposent sur 3 approches :\n' +
          '\n' +
          'La communication, le marketing et WEB.\n' +
          '\n' +
          'Le tout encadré par l’approche méthodes et projets. Cette pluridisciplinarité nous permet de former\n' +
          'des professionnels capables d’assurer la conception, la réalisation et le management de projets web\n' +
          'complexes. C’est la maîtrise de cette combinaison qui a fait le succès des entreprises numériques,\n' +
          'starts-up et pure players en forte croissance partout dans le monde.\n' +
          '\n' +
          'Reparti sur 5 campus (Bordeaux, Lille, Lyon, Montpellier, Nantes).\n' +
          '\n' +
          'WIS est également membre du HEP Éducation. Une alliance volontaire de 35 écoles et centres de\n' +
          'formation autour de valeurs (Partage de valeurs, attitudes fortes, ouverture au monde, humanise,\n' +
          'accompagnement, solidarité, convivialité, innovation). Le but est de former et certifier des futurs\n' +
          'professionnels à haut niveau d’expertises dans les métiers informatiques.\n' +
          'HEP EDUCATION en chiffres c’est… 35 écoles et centres de formation, 24 000 personnes formées\n' +
          'par an dont 7000 apprentis, plus de 6000 personnes formées chaque année, 16 campus en France et\n' +
          '6 à l’international, plus de 100 universités partenaires en France et à l’étranger, 10 000 entreprises\n' +
          'partenaires et plus 94 000 diplômés dont 16 000 dans la fonction RH…',
        descriptionEntreprise: 'L’implication des entreprises constitue un atout majeur de la formation aux métiers du Web, nouant ainsi des relations privilégies avec le monde professionel.\n'+
          'Des rencontres sont organisées toute l’année entre étudiants et entreprises : conférences sur les technologies innovantes, retours d’expérience, mises en situation de projets, ateliers autour des métiers du numérique.\n' +
          'L’implication des professionnels permet aux étudiants d’être en prise directe avec la réalité des entreprises qui participent au pilotage des orientations pédagogiques de WIS.\n' +
          'La participation des intervenants extérieurs issus des entreprises est l’une des richesses de l’enseignement WIS.\n' +
          'Elle permet aux étudiants d’être en contact constant avec le monde industriel. Leur expérience et leur savoir-faire, mis en pratique au quotidien dans leur métier, assurent un enseignement parfaitement en phase avec la réalité.\n',
        pageFb: 'https://www.facebook.com/WIS-Campus-de-Lille-720203251358383/?__tn__=kC-R&eid=ARCMuaWGci0tdHM64VpHlNo-ptXXnvNfU388ahriMZbIkJb6lyaHgx_Zzxu9dDXk4kRXYqvWEweW3z7J&hc_ref=ARS2eiuyGzq_JVlJC4UTGq4JaWHs8gbCMfsoqIjIQNgKWsLhgaB9Tf3lK47KUzJFgLI&__xts__[0]=68.ARDysmEslnUvOvkYy_inj2PcGMRQM_DnVfoVRILHRv-BHwRkxRM8d9Jn58MUDTTyjiyUPBMlCpAnacJRpgXnkWAiqf4HS5mEWnriObRFrFMKMwwCNCgeDHQw26vjXRPNMgvLGXR27j6zZgqYlE81f3ivjibVdKX58L778wVqVA2n5rlAhXswJw'
      },
      {
        id: 2,
        nom: 'EPSI',
        siteWeb: 'http://www.epsi.fr/campus/campus-de-lille/',
        logo: '../assets/img/logo.svg',
        logo_min: '../assets/img/polygon.png',
        img: '../assets/img/epsi_slider_2.jpg',
        description: 'L’EPSI en quelques mots, \n' +
          'Première école d’informatique en France avoir été créée par des professionnels, première à avoir obtenu le titre niveau I RNCP (Bac+5 certifiés par l’État) et résolument engagée auprès des entreprises, l’EPSI accompagne le développement des compétences informatiques depuis plus de 55 ans.\n' +
          'Reparti sur 9 campus (Paris, Lille, Arras, Nantes, Lyon, Montpellier, Bordeaux, Best, Grenoble).\n' +
          'EPSI est également membre du HEP Éducation. Une alliance volontaire de 35 écoles et centres de formation autour de valeurs (Partage de valeurs, attitudes fortes, ouverture au monde, humanise, accompagnement, solidarité, convivialité, innovation). Le but est de former et certifier des futurs professionnels à haut niveau d’expertises dans les métiers informatiques. \n' +
          'HEP EDUCATION en chiffres c’est… 35 écoles et centres de formation, 24 000 personnes formées par an dont 7000 apprentis, plus de 6000 personnes formées chaque année, 16 campus en France et 6 à l’international, plus de 100 universités partenaires en France et à l’étranger, 10 000 entreprises partenaires et plus 94 000 diplômés dont 16 000 dans la fonction RH…',
        descriptionEntreprise: 'Les besoins en formation sont aujourd’hui multiples pour répondre au marché de l’emploi dans le numérique ou de l’informatique. La force de l’enseignement à l’EPSI est basée sur la modularité de son programme et de la diversité de ses parcours. Pour être totalement en phase avec les besoins des entreprises, ces derniers sont construits à partir de blocs de compétences qui amènent à des spécialisations métiers.\n' +
          'Présentation des blocs de compétences : \n' +
          '•\tDéveloppement de solutions applicatives. \n' +
          '•\tMéthodes & Projet.\n' +
          '•\tManagement & Conseil ERP.\n' +
          '•\tDéveloppement de solutions applicatives objet et web. \n' +
          '•\tGestion des données & Développement de la persistance de données. \n' +
          '•\tDéveloppement d’applications n-tiers. \n' +
          'Le passeport de compétences permet à tout salarier de gérer son évolution de carrière selon ses attentes et en phase avec les besoins croissants des entreprises.\n' +
          'L’EPSI propose des formations personnalisées aux besoins des entreprises et de leurs collaborateurs pour se former à de nouvelles technologies ou de nouveaux langages.\n' +
          'Toutes nos formations sont éligibles au CPF pour leur financement et peuvent compléter un dispositif VAE (Validation des Acquis de l’Expérience).\n' +
          'L’EPSI a pour vocation d’offrir un enseignement de qualité centré sur l’accompagnement des étudiants. En faisant bénéficier l’EPSI d’un versement de la Taxe d’Apprentissage, vous contribuerez à son développement. Votre participation nous permettra de continuer à œuvrer pour que nos étudiants deviennent de réels acteurs pour vos besoins de demain.\n' +
          '\n',
        pageFb: 'https://www.facebook.com/Campus.EPSI.Lille/'
      },
      {
        id: 3,
        nom: 'Ifag',
        siteWeb: 'http://www.ifag.fr/campus/campus-de-lille/',
        logo: '../assets/img/ifag_footer.png',
        logo_min: '',
        img: '../assets/img/img-edito.jpg',
        description: 'LIFAG en quelques mots, \n' +
          'École de management et de l’entreprenariat, qui forme depuis 50 ans les futures créateurs et repreneurs d’entreprises et ceux aspirant à occuper une fonction de direction.\n' +
          'L’IFAG à travers sa Pédagogie Active et Opérationnelle permet aux étudiants en recherche d’une pédagogie innovante et dynamique de révéler leurs compétences sur le terrain au travers de cas pratiques d’entreprises : études marketing, stage, start-up, création d’entreprise, business game, stage de vente, projet d’innovation.\n' +
          'Reparti sur 16 campus dont un en outre-mer (Agen, Auxerre, Bordeaux, Brest, Charleville-Mézières, Chalon sur Saône, Chartres, Laval, Lille, Lyon, Montluçon, Mont de Marsan, Nantes, Nîmes, Paris, Réunion, Sens).\n' +
          'IFAG est également membre du HEP Éducation. Une alliance volontaire de 35 écoles et centres de formation autour de valeurs (Partage de valeurs, attitudes fortes, ouverture au monde, humanise, accompagnement, solidarité, convivialité, innovation). Le but est de former et certifier des futurs professionnels à haut niveau d’expertises dans les métiers informatiques.\n' +
          'HEP EDUCATION en chiffres c’est… 35 écoles et centres de formation, 24 000 personnes formées par an dont 7000 apprentis, plus de 6000 personnes formées chaque année, 16 campus en France et 6 à l’international, plus de 100 universités partenaires en France et à l’étranger, 10 000 entreprises partenaires et plus 94 000 diplômés dont 16 000 dans la fonction RH…\n' + '\n',
       descriptionEntreprise: 'L’IFAG propose aux entreprises un ensemble de solutions pour intégrer aujourd’hui les compétences qui favoriseront son développement.\n' +
          'L’IFAG offre aux entreprises des opportunités pour recruter un stagiaire, un alternant ou un jeune diplômé.\n' +
          'Les entreprises peuvent intervenir de plusieurs manières en confiant des projets aux étudiants (ex : diagnostic stratégique de votre entreprise, création de plaquette, étude de marché, organisation d’événement, etc…).\n' +
          'Vous pourrez réaliser vos recrutements tout au long de l’année en déposant vos offres sur notre site web et venir au sein de nos campus lors des événements organisés par les écoles.\n' +
          'Les services relations entreprises de l’IFAG se tiennent à votre disposition pour vous guider dans la définition de vos besoins, vous aider à choisir le profil recherché et vous accompagner dans vos démarches administratives.\n' +
          'Votre entreprise peut contribuer activement au développement de notre réseau d’établissements grâce à un soutien humain et financier.\n' +
          'Ces moyens supplémentaires nous permettront d’asseoir nos activités et notre positionnement dans un environnement de plus en plus concurrentiel.\n' +
          'Vous avez également la capacité de soutenir l’IFAG grâce au versement de votre taxe d’apprentissage.\n' + '\n',
        pageFb: 'https://www.facebook.com/ifaglille/'
      }
    ];

    this.schoolSelected$ = new BehaviorSubject<any>(this.schoolSelected);
    this.mapSelected$ = new BehaviorSubject<string>(this.mapSelected);

    if (localStorage.getItem('schoolSelected') !== null) {
      let id = localStorage.getItem('schoolSelected');
      this.setSchoolSelected(id);
    }


  }

  setSchoolSelected(id) {
    let school = this.schools.findIndex(school => school.id == id);
    localStorage.setItem('schoolSelected', id);
    this.schoolSelected$.next(this.schools[school]);
  }

  getSchoolSelected() {
    return this.schoolSelected$.asObservable();
  }

  setMapSelected(mapSelector : string) {
    this.mapSelected$ .next(mapSelector);
  }

  getMapSelected(){
    return this.mapSelected$.asObservable();
  }


}
