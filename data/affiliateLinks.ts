export interface AffiliateLink {
  id: string;
  title: string;
  imageUrl: string;
  imageLinkUrl: string;
  linkUrl: string;
  imageTrackingTag: string;
  trackingTag: string;
  description: string;
  tags: string[];
  isRecommended?: boolean;
}

export interface AffiliateCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  links: AffiliateLink[];
}

export const affiliateLinks: AffiliateCategory[] = [
  {
    id: 'moving-estimates',
    title: 'おすすめ引越し見積もりサイト',
    emoji: '🚛',
    description: '多くの方が利用している引越し業者の見積もりサイトです。こちらで希望条件にあった引越し業者を選びましょう。',
    links: [
      {
        id: 'moving-1',
        title: 'ＬＩＦＵＬＬ引越し',
        imageUrl: 'https://www28.a8.net/svt/bgt?aid=250309411348&wid=003&eno=01&mid=s00000008688003007000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5R6WUA+1V1C+HWI5T',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5R6WUA+1V1C+HV7V6',
        imageTrackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+5R6WUA+1V1C+HWI5T',
        trackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+5R6WUA+1V1C+HV7V6',
        description: 'SUUMOの引越しサービスは、複数の引越し業者から一括で見積もりを取ることができます。大手から地域密着型の業者まで幅広く対応しており、料金比較が簡単にできます。',
        tags: ['一括見積もり', '大手対応', '料金比較'],
        isRecommended: true
      },
      {
        id: 'moving-2',
        title: '引越し侍',
        imageUrl: 'https://www20.a8.net/svt/bgt?aid=250309411349&wid=003&eno=01&mid=s00000004657003059000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5RSCG2+ZXM+I7NE9',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5RSCG2+ZXM+HY06A',
        imageTrackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+5RSCG2+ZXM+I7NE9',
        trackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+5RSCG2+ZXM+HY06A',
        description: 'ホームメイトの引越しサービスは、単身からファミリーまで幅広く対応。独自の割引サービスもあり、お得に引越しができます。',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'moving-3',
        title: 'いろんなお困り事を一括見積もり！【一括見積比較くらしのコンシェルジュ】',
        imageUrl: 'https://www27.a8.net/svt/bgt?aid=250309411436&wid=003&eno=01&mid=s00000025423002010000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+77L22Q+5G5Y+BYT9D',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+77L22Q+5G5Y+BX3J6',
        imageTrackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+77L22Q+5G5Y+BYT9D',
        trackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+77L22Q+5G5Y+BX3J6',
        description: 'ホームメイトの引越しサービスは、単身からファミリーまで幅広く対応。独自の割引サービスもあり、お得に引越しができます。',
        tags: ['一括見積もり', '料金比較']
      }
    ]
  },
  {
    id: 'used-items',
    title: '不用品買取、回収サービス一覧',
    emoji: '📦',
    description: '引越し前に不用品を整理したい方におすすめのサービスです。買取から回収まで幅広く対応しています。',
    links: [
      {
        id: 'used-1',
        title: '出張買取ならお任せください！【福ちゃん】',
        imageUrl: 'https://www22.a8.net/svt/bgt?aid=250309411676&wid=003&eno=01&mid=s00000014709016023000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B6H39E+35HU+2NEA9D',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B6H39E+35HU+2N9KIA',
        imageTrackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+B6H39E+35HU+2NEA9D',
        trackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+B6H39E+35HU+2N9KIA',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'used-2',
        title: '洋服の高価買取専門【バイセル】',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411672&wid=003&eno=01&mid=s00000012923016009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B43CUA+2RPQ+2NBA8H',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B43CUA+2RPQ+2NDN42',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+B43CUA+2RPQ+2NBA8H',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+B43CUA+2RPQ+2NDN42',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'used-3',
        title: '引越しの高価買取専門【バイセル】',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411357&wid=003&eno=01&mid=s00000012923014009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5WJTAA+2RPQ+2BEM4X',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5WJTAA+2RPQ+2BFH02',
        imageTrackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+5WJTAA+2RPQ+2BEM4X',
        trackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+5WJTAA+2RPQ+2BFH02',
        description: '',
        tags: ['一括見積もり', '料金比較']
      }
    ]
  },
  {
    id: 'internet',
    title: 'インターネット回線サービス一覧',
    emoji: '📶',
    description: '面倒なインターネット回線の契約や、お見積もりはこちらがおすすめです。',
    links: [
      {
        id: 'internet-1',
        title: '工事不要！スマホのパケットが使い放題【SoftBank Air】',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411548&wid=003&eno=01&mid=s00000016370002007000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+929LTU+3IB8+BY641',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+929LTU+3IB8+BWVTE',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+929LTU+3IB8+BY641',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+929LTU+3IB8+BWVTE',
        description: 'ソフトバンクのスマホとセットで利用すると、スマホ代が毎月最大1,000円割引になるおトクなインターネット回線です。',
        tags: ['光回線', 'スマホセット割', '高速通信']
      },
      {
        id: 'internet-2',
        title: 'ファミリーで得する高速インターネット【ファミリーギガ】',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411545&wid=003&eno=01&mid=s00000023819001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+90HB0I+53SE+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+90HB0I+53SE+5YRHE',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+90HB0I+53SE+5ZMCH',
        trackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+90HB0I+53SE+5YRHE',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-3',
        title: 'フレッツ光より安いソフトバンク光！【高額キャッシュバック】【SoftBank 光】',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411485&wid=003&eno=01&mid=s00000016370001009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+80RAPU+3IB8+609HT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+80RAPU+3IB8+5YRHE',
        imageTrackingTag: 'https://www17.a8.net/0.gif?a8mat=450ZZ7+80RAPU+3IB8+609HT',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+80RAPU+3IB8+5YRHE',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-4',
        title: '【ドコモ光】工事費無料！当サイト限定！最大100,000円の高額キャッシュバック！',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411478&wid=003&eno=01&mid=s00000017718004006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7WL9HE+3SPO+NUMHT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7WL9HE+3SPO+NTRMQ',
        imageTrackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+7WL9HE+3SPO+NUMHT',
        trackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+7WL9HE+3SPO+NTRMQ',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-5',
        title: '【auひかり】初期工事費無料！豪華キャンペーン！知らない人はモッタイナイ！',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411483&wid=003&eno=01&mid=s00000019044001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7ZKFIA+42Y0+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7ZKFIA+42Y0+60OXE',
        imageTrackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+7ZKFIA+42Y0+5ZMCH',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+7ZKFIA+42Y0+60OXE',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-6',
        title: '【メガエッグ光】最大現金50,000円大還元キャンペーン実施中！',
        imageUrl: 'https://www29.a8.net/svt/bgt?aid=250309411480&wid=003&eno=01&mid=s00000019044006006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7XS4OY+42Y0+ZRALD',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7XS4OY+42Y0+ZQFQA',
        imageTrackingTag: 'https://www15.a8.net/0.gif?a8mat=450ZZ7+7XS4OY+42Y0+ZRALD',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+7XS4OY+42Y0+ZQFQA',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-7',
        title: '契約縛り無し、完全定額、大容量のSTAR Wi-Fi（お試しプランあり）',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411479&wid=003&eno=01&mid=s00000020065001009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7X6P36+4ATM+609HT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7X6P36+4ATM+5YRHE',
        imageTrackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+7X6P36+4ATM+609HT',
        trackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+7X6P36+4ATM+5YRHE',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-8',
        title: '複雑な条件なし！契約期間しばり無し光回線＋【おてがる光】',
        imageUrl: 'https://www29.a8.net/svt/bgt?aid=250309411482&wid=003&eno=01&mid=s00000022354001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7YYZWI+4SHG+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7YYZWI+4SHG+5YJRM',
        imageTrackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+7YYZWI+4SHG+5ZMCH',
        trackingTag: 'https://www17.a8.net/0.gif?a8mat=450ZZ7+7YYZWI+4SHG+5YJRM',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-9',
        title: '当サイト限定！最大40,000円還元キャンペーン！【BIGLOBE光】',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411407&wid=003&eno=01&mid=s00000017718046009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6QBHJ6+3SPO+7LXBPT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6QBHJ6+3SPO+7LVTPE',
        imageTrackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+6QBHJ6+3SPO+7LXBPT',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+6QBHJ6+3SPO+7LVTPE',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-10',
        title: '【ビジモ光】おトクに開始！新規お申込み最大30,000円キャッシュバック実施中！',
        imageUrl: 'https://www28.a8.net/svt/bgt?aid=250309411412&wid=003&eno=01&mid=s00000020187009003000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6TANK2+4BRI+1HLNLD',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6TANK2+4BRI+1HL85U',
        imageTrackingTag: 'https://www15.a8.net/0.gif?a8mat=450ZZ7+6TANK2+4BRI+1HLNLD',
        trackingTag: 'https://www17.a8.net/0.gif?a8mat=450ZZ7+6TANK2+4BRI+1HL85U',
        description: '',
        tags: ['一括見積もり', '料金比較']
      },
      {
        id: 'internet-11',
        title: '機器代金0円！工事不要のホームルーターレンタル【おきらくホームWi-Fi】',
        imageUrl: 'https://www23.a8.net/svt/bgt?aid=250309411356&wid=003&eno=01&mid=s00000014546025005000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5VYDOI+348K+44VFTD',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5VYDOI+348K+44UKYA',
        imageTrackingTag: 'https://www15.a8.net/0.gif?a8mat=450ZZ7+5VYDOI+348K+44VFTD',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+5VYDOI+348K+44UKYA',
        description: '',
        tags: ['一括見積もり', '料金比較']
      }
    ]
  },
  {
    id: 'cleaning',
    title: 'ハウスクリーニング',
    emoji: '🧹',
    description: '引越し前後の面倒な掃除をお手伝いするサービス一覧です。',
    links: [
      {
        id: 'cleaning-1',
        title: '引越しハウスクリーニング専門店【ミガクる】',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411360&wid=003&eno=01&mid=s00000020635003006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5YC43M+4F7Y+HWAG1',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5YC43M+4F7Y+HV7V6',
        imageTrackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+5YC43M+4F7Y+HWAG1',
        trackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+5YC43M+4F7Y+HV7V6',
        description: '創業50年以上の実績を持つハウスクリーニングのプロフェッショナル。キッチン、浴室、トイレなど場所別のプランが充実しています。',
        tags: ['老舗', 'プロ仕様', '場所別プラン']
      }
    ]
  },
  {
    id: 'others',
    title: 'その他',
    emoji: '✨',
    description: '他にもこんなサービスがあったらいいなと思う方におすすめの痒い所に手が届くサービス一覧です。',
    links: [
      {
        id: 'other-1',
        title: '北欧デザイナーズ家具【KuHoN（クホン）】',
        imageUrl: 'https://www29.a8.net/svt/bgt?aid=250309411411&wid=003&eno=01&mid=s00000025629001003000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6SP7YA+5HR6+5YZ75',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6SP7YA+5HR6+5YJRM',
        imageTrackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+6SP7YA+5HR6+5YZ75',
        trackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+6SP7YA+5HR6+5YJRM',
        description: '引越し時の荷物を単品から配送できるサービス。大型家具や家電も安心して運べます。',
        tags: ['単品配送', '全国対応', '安心サービス']
      },
      {
        id: 'other-2',
        title: 'トランクルームなら掲載物件数No.1の【ハローストレージ】！',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411358&wid=003&eno=01&mid=s00000007033001059000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5X58W2+1I9M+6AZAP',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5X58W2+1I9M+60H7M',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+5X58W2+1I9M+6AZAP',
        trackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+5X58W2+1I9M+60H7M',
        description: '',
        tags: ['一括見積もり', '料金比較']
      }
    ]
  }
];
