export const MasteriesLists: MasteriesLists[] = [
    {
      path: '../../../assets/img/main-page/guerre.png',
      alt: 'War'
    },
    {
      path: '../../../assets/img/main-page/tempete.png',
      alt: 'Tempest'
    },
    {
      path: '../../../assets/img/main-page/chasse.png',
      alt: 'Hunt'
    },
    {
      path: '../../../assets/img/main-page/nature.png',
      alt: 'Natural'
    },
    {
      path: '../../../assets/img/main-page/defense.png',
      alt: 'Defense'
    }
  ]

export const MainPageLists: PageLists[] = [
    {
      backgroundClass: 'background-first-image',
      title: [true, 'welcome to the', 'ancient grece'],
      orientationTitleClass: 'title-main-page-left',
      description: [false],
      orientationDescClass: [],
      divider: true
    },
    {
      backgroundClass: 'background-second-image',
      title: [true, 'discover the', 'pantheon secret'],
      orientationTitleClass: 'title-main-page-right',
      description: [true,'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.'],
      orientationDescClass: ['description-main-page-right','ms-auto'],
      divider: true
    },
    {
      backgroundClass: 'background-third-image',
      title: [true, 'customize', 'your avatar'],
      orientationTitleClass: 'title-main-page-left',
      description: [true,'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.'],
      orientationDescClass: ['description-main-page-left','me-auto'],
      additionnalImageBackground: [true, '../../../assets/img/main-page/avatar_background.png'],
      additionnalElements: true,
      divider: true
    },
    {
      backgroundClass: 'background-fourth-image',
      title: [false],
      orientationTitleClass: false,
      description: [false],
      orientationDescClass: [],
      divider: false
    }
  ];

  export interface MasteriesLists {
    path: string;
    alt: string;
  }

  export interface PageLists {
    backgroundClass: string;
    title: (string|boolean)[];
    orientationTitleClass: (string|boolean);
    description: (string|boolean)[];
    orientationDescClass: string[];
    additionnalImageBackground?: (string|boolean)[];
    additionnalElements?: boolean;
    divider: boolean;
  }