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
        description: 'LIFULL引越し見積もりは、全国130社以上の引越し業者から無料で一括で見積もりを取ることができます。アート・サカイ・アリさんなどの大手から地域密着型の業者まで幅広く対応しており、自由に選ぶことができます。さらに利用者には抽選で最大10万円キャッシュバックがもらえるキャンペーンを実施中！それ以外にも特典が充実しているのでぜひチェックしてみてください。',
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
        description: '290社以上の中から最大10社まで無料一括見積もりが可能です。CMでも一度は見たことがあるのではないでしょうか。利用者の95.2%がまた利用したいと回答していて、学生の引っ越し、レディースやシニア向けプランなどライフスタイルに合わせた見積もりも可能です。また引越し見積もりの費用のシュミレーションも可能なのでぜひチェックしてみてください。',
        tags: ['一括見積もり', '大手対応', '料金比較']
      },
      {
        id: 'moving-3',
        title: '引越し一括見積もりから完了まで、ワンストップでサポート【引越しラクっとNAVI 】',
        imageUrl: 'https://www29.a8.net/svt/bgt?aid=250309411351&wid=003&eno=01&mid=s00000015642001023000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5SZ7NM+3CP0+639IP',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5SZ7NM+3CP0+5YJRM',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+5SZ7NM+3CP0+639IP',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+5SZ7NM+3CP0+5YJRM',
        description: '引越し経験者の方は、引越しの見積もりと聞くと、「引越し業者からの営業電話が多くかかって来て面倒。。」というイメージを持たれる方も多いはずです。しかし、この引越しラクっとNAVIは、引越し業者と話すことなく見積もりを取ることが可能なサービスとなっています。引越しの電話にうんざりした方、うまく相見積もりが出来なかった方におすすめのサービスです。専門のサポートセンターが荷物の状況をしっかりとヒアリングした上で、引越し業者からの見積もりを提案してくれます。',
        tags: ['一括見積もり', '大手対応', '料金比較'],
        isRecommended: true
      }
    ]
  },
  {
    id: 'moving-lifeline',
    title: 'おすすめ電気・ガス見積もりサイト',
    emoji: '💡',
    description: '引越しのタイミングでマストになってくるのが、電気やガスの契約です。最近は、電気やガスの最適なプランを提供してくれるサービスも増えているようです。こちらでは、多くの方が利用している電気・ガス見積もりサイトをまとめました。こちらで希望条件にあった見積もりを選びましょう。',
    links: [
      {
        id: 'lifeline-1',
        title: '国内最大級の電力・ガス比較サイト【エネチェンジ】',
        imageUrl: 'https://www26.a8.net/svt/bgt?aid=250309411409&wid=003&eno=01&mid=s00000020286001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6RICQQ+4CJ0+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6RICQQ+4CJ0+60H7M',
        imageTrackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+6RICQQ+4CJ0+5ZMCH',
        trackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+6RICQQ+4CJ0+60H7M',
        description: '引越しのタイミングで契約することの多い電気やガス会社ですが、できるのであればお得に契約したいですよね。エネチェンジでは、web上での手続きのみで簡単にお得に電気やガスの契約が可能です。心配事があっても専門のコールセンターがサポートしてくれるので、安心して契約や電力の切り替えが可能です。光熱費を節約したい方、ポイントを貯めたい方、引越しを考えている方は一度チェックしてみることをオススメします。',
        tags: ['一括見積もり', '上場企業', '料金比較', 'キャッシュバック', 'アマギフ贈呈'],
        isRecommended: true
      },
      {
        id: 'lifeline-2',
        title: '電気料金の比較、切り替えなら　かんたんでんきサポート',
        imageUrl: 'https://www27.a8.net/svt/bgt?aid=250309411476&wid=003&eno=01&mid=s00000026250001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7VEE9U+5MJO+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7VEE9U+5MJO+5YJRM',
        imageTrackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+7VEE9U+5MJO+5ZMCH',
        trackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+7VEE9U+5MJO+5YJRM',
        description: 'かんたんでんきサポートは、あなたにあったでん電力会社、料金プランを見つけることができます。工事や切り替え費用は無料で行え20社以上の電力会社の紹介をしてくれるサービスです。ひとり暮らし、ファミリーなどご家庭の状況に合わせた最適な電力会社、料金プランを見つけたい方は、こちらから見積もりをとってみてください。',
        tags: ['一括見積もり', '大手対応', '料金比較']
      },
      {
        id: 'lifeline-3',
        title: '全世帯対象！毎月の電気代をおトクに！【リミックスでんき】',
        imageUrl: 'https://www22.a8.net/svt/bgt?aid=250309411677&wid=003&eno=01&mid=s00000021322002011000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B72IV6+4KIS+BZ0Z5',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+B72IV6+4KIS+BWVTE',
        imageTrackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+B72IV6+4KIS+BZ0Z5',
        trackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+B72IV6+4KIS+BWVTE',
        description: 'リミックス電気は少し変わったイメージを持つサービスです。基本料金は0円で、使用した分だけ電気料金を払うサービスです。30分ごとに料金が変動するプランで、料金単価が安い時間帯で利用することで電気代を安く済ませることができます。電気料金を節約したい方、環境に配慮した電気の使い方をしたい方は一度検討してみはいかがでしょうか。',
        tags: ['一括見積もり', '契約期間の縛りなし', '使った分だけ']
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
        title: 'いろんなお困り事を一括見積もり！【一括見積比較くらしのコンシェルジュ】',
        imageUrl: 'https://www27.a8.net/svt/bgt?aid=250309411436&wid=003&eno=01&mid=s00000025423002010000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+77L22Q+5G5Y+BYT9D',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+77L22Q+5G5Y+BX3J6',
        imageTrackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+77L22Q+5G5Y+BYT9D',
        trackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+77L22Q+5G5Y+BX3J6',
        description: '一括見積比較くらしのコンシェルジュは、不用品回収やハウスクリーニングだけではなく家具家電リサイクルなど幅広い用途の業者の見積もりを一括で受けられます。会員登録不要で、最大3社同時に見積もりが可能です。',
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
        description: 'バイセルは、日本全国、手数料一切かからず完全無料で出張査定を受けることができます。外に出ずに査定を受けることができるので、引越しの際の不用品を簡単に買い取ってもらえるかも知れません。引越しの際、不要になったブランド品を一度査定してみましょう。',
        tags: ['無料査定', 'キャンセル料無料', 'ブランド品', 'ブランド洋服', '不用品']
      },
      {
        id: 'used-3',
        title: '引越しの高価買取専門【バイセル】',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411357&wid=003&eno=01&mid=s00000012923014009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5WJTAA+2RPQ+2BEM4X',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5WJTAA+2RPQ+2BFH02',
        imageTrackingTag: 'https://www10.a8.net/0.gif?a8mat=450ZZ7+5WJTAA+2RPQ+2BEM4X',
        trackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+5WJTAA+2RPQ+2BFH02',
        description: 'バイセルは、幅広いジャンルの買取実績があります。不要になった家電や食器、ゲームや楽器など引越しの際の整理整頓に役立ちます。CMも放映中で、メディアでも話題になっています。',
        tags: ['無料査定', 'キャンセル料無料', '家電', '食器', '不用品']
      }
    ]
  },
  {
    id: 'internet',
    title: 'インターネット回線サービス一覧',
    emoji: '📶',
    description: '面倒なインターネット回線の契約や、お見積もりはこちらがおすすめです。店頭などで契約するよりもこちらのサイトからお申し込みを行うとキャッシュバックを行うサービスを提供している会社も多いです。現在使用しているスマホの回線と同じ回線を契約するとお得になるプランもあるので、まずは、自分のスマホと同じ回線のサービスからぜひチェックしてみてください。',
    links: [
      {
        id: 'internet-1',
        title: '工事不要！スマホのパケットが使い放題【SoftBank Air】',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411548&wid=003&eno=01&mid=s00000016370002007000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+929LTU+3IB8+BY641',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+929LTU+3IB8+BWVTE',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+929LTU+3IB8+BY641',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+929LTU+3IB8+BWVTE',
        description: '面倒な工事が不要で、スマホやPCも使い放題のインターネットならSoftBank Airです。ソフトバンクのスマホを使用中の方は、SoftBank Airとスマホをセットで使用するとお得に利用できるプランもあります。さらにこちらからお申し込みを行うと最大90,000円のキャッシュバックをゲットできるチャンスがあります！',
        tags: ['最大2.1Gbps', 'スマホセット割', '高速通信', '工事不要', 'キャッシュバック', 'ソフトバンク']
      },
      {
        id: 'internet-2',
        title: 'ファミリーで得する高速インターネット【ファミリーギガ】',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411545&wid=003&eno=01&mid=s00000023819001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+90HB0I+53SE+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+90HB0I+53SE+5YRHE',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+90HB0I+53SE+5ZMCH',
        trackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+90HB0I+53SE+5YRHE',
        description: '戸建に強いファミリーギガならテレワーク、オンライン授業、最新オンラインゲームもサクサク快適にインターネットを利用できます。さらに他社回線からの乗り換えの場合、最大50,000円のキャッシュバックを行なっています。ソフトバンクのスマホを使用中の方は、月額基本料金から、最大1,100円(税込)割引のプランもあります。',
        tags: ['最大2Gbps','スマホセット割', '高速通信', '開始日無料', 'キャッシュバック', 'ソフトバンク']
      },
      {
        id: 'internet-3',
        title: 'フレッツ光より安いソフトバンク光！【高額キャッシュバック】【SoftBank 光】',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411485&wid=003&eno=01&mid=s00000016370001009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+80RAPU+3IB8+609HT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+80RAPU+3IB8+5YRHE',
        imageTrackingTag: 'https://www17.a8.net/0.gif?a8mat=450ZZ7+80RAPU+3IB8+609HT',
        trackingTag: 'https://www12.a8.net/0.gif?a8mat=450ZZ7+80RAPU+3IB8+5YRHE',
        description: '高速通信を安く使用したいならこちら。今ならキャッシュバックや割引など様々なキャンペーンを実施中です。ネット工事って完了するまで時間がかかるもの。。ネットが開通するまでAirターミナルまたは、ポケットWi-Fiのレンタルが可能なので、引越し先で急いでネット環境が必要な方はかなりおすすめです。',
        tags: ['最大1Gbps', 'スマホセット割', '高速通信', 'キャッシュバック', '割引']
      },
      {
        id: 'internet-4',
        title: '【ドコモ光】工事費無料！当サイト限定！最大100,000円の高額キャッシュバック！',
        imageUrl: 'https://www25.a8.net/svt/bgt?aid=250309411478&wid=003&eno=01&mid=s00000017718004006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7WL9HE+3SPO+NUMHT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7WL9HE+3SPO+NTRMQ',
        imageTrackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+7WL9HE+3SPO+NUMHT',
        trackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+7WL9HE+3SPO+NTRMQ',
        description: 'ドコモ回線をご利用中の方は、こちらがおすすめです。こちらもキャッシュバックやdポイントの還元など充実した内容になっています。キャッシュバックはこちらからの申込み限定なのでご注意ください。ネットが開通するまでポケットWi-Fiのレンタルが可能なので、引越し先で急いでネット環境が必要な方はかなりおすすめです。',
        tags: ['最大1Gbps', 'キャッシュバック', 'dポイント還元', '工事費無料', 'スマホセット割']
      },
      {
        id: 'internet-5',
        title: '【auひかり】初期工事費無料！豪華キャンペーン！知らない人はモッタイナイ！',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411483&wid=003&eno=01&mid=s00000019044001006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7ZKFIA+42Y0+5ZMCH',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7ZKFIA+42Y0+60OXE',
        imageTrackingTag: 'https://www13.a8.net/0.gif?a8mat=450ZZ7+7ZKFIA+42Y0+5ZMCH',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+7ZKFIA+42Y0+60OXE',
        description: 'au回線をご利用中の方は、こちらがおすすめです。キャッシュバックはこちらからのweb申込み限定で行われています。高速通信をお得に契約したい方はこちらをチェックしてみてください。',
        tags: ['世界最速', '最大10Gbps', 'キャッシュバック', 'スマホセット割']
      },
      {
        id: 'internet-6',
        title: '【メガエッグ光】最大現金50,000円大還元キャンペーン実施中！',
        imageUrl: 'https://www29.a8.net/svt/bgt?aid=250309411480&wid=003&eno=01&mid=s00000019044006006000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7XS4OY+42Y0+ZRALD',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7XS4OY+42Y0+ZQFQA',
        imageTrackingTag: 'https://www15.a8.net/0.gif?a8mat=450ZZ7+7XS4OY+42Y0+ZRALD',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+7XS4OY+42Y0+ZQFQA',
        description: 'au回線をご利用中の方はこちらがおすすめです。こちらのwebサイトからのお申し込みで最大50,000円の還元キャンペーン実施中です。メガエッグは、他社には無い充実したオプションも用意されています。光電話やU-NEXTをお得に利用できるオプションなど多数揃っています。通信も最大1Gbpsで、サクサク利用できます。',
        tags: ['最大1Gbps', 'キャッシュバック', 'スマホセット割', 'au', 'U-NEXT', '光電話', '光テレビ']
      },
      {
        id: 'internet-7',
        title: '契約縛り無し、完全定額、大容量のSTAR Wi-Fi（お試しプランあり）',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411479&wid=003&eno=01&mid=s00000020065001009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7X6P36+4ATM+609HT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+7X6P36+4ATM+5YRHE',
        imageTrackingTag: 'https://www14.a8.net/0.gif?a8mat=450ZZ7+7X6P36+4ATM+609HT',
        trackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+7X6P36+4ATM+5YRHE',
        description: 'STAR Wi-Fiは完全定額、契約期間の縛りがないいつでも解約可能なサービスです。ニーズに合わせたプランを提供しており、お試しプランも用意されています。工事やプロバイダ契約が不要なので、繋がるまでの手間が少なくお手軽に利用が可能です。',
        tags: ['工事不要', '大容量', '無制限あり']
      },
      {
        id: 'internet-8',
        title: '当サイト限定！最大40,000円還元キャンペーン！【BIGLOBE光】',
        imageUrl: 'https://www24.a8.net/svt/bgt?aid=250309411407&wid=003&eno=01&mid=s00000017718046009000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6QBHJ6+3SPO+7LXBPT',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+6QBHJ6+3SPO+7LVTPE',
        imageTrackingTag: 'https://www18.a8.net/0.gif?a8mat=450ZZ7+6QBHJ6+3SPO+7LXBPT',
        trackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+6QBHJ6+3SPO+7LVTPE',
        description: 'BIGLOBE光は、高速最大1Gbpsで、フレッツ光回線を低価格で提供しているサービスなので、高速、安心、格安の三拍子揃ったサービスです。こちらのwebサイトからのお申し込みで最大40,000円の特典をゲットできるチャンスもあります。引越しの方はもちろん、在宅ワークが多くなりご家庭のネット環境の見直しをしたいと考えている方にもオススメです。auスマホを持っている方は、さらなる割引で最大2,200円の割引が適用される場合もあるので、ぜひチェックしてみてください。',
        tags: ['最大1Gbps','キャッシュバック', '料金比較', 'au', 'auひかり']
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
        description: 'ミガクるは、引越し専門のハウスクリーニングサービスです。創業から3万件以上の実績を持つサービスなので、安心してハウスクリーニングをお任せすることができます。さらに安心の定額プランで、土日祝日でも料金の変動がないので忙しいなか引越しを進める方にとってとても助かるサービスです。',
        tags: ['老舗', 'プロ仕様', '場所別プラン', '定額プラン', 'クレカ決済OK']
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
        description: '引越しのタイミングで家具の買い替えしたいですよね。さらに初めての引越しの時は、家具の購入は必須になってくると思います。ニトリやIKEAで定番の家具を購入するのもいいですが、北欧デザイナーズ家具でおしゃれにお部屋を整えるのもオススメです。毎日使い続ける家具だからこそ拘りたいもの。あまり馴染みのない家具屋さんかと思いますが、商品のおしゃれさ洗練された品揃えは間違いありません。ぜひ一度チェックしてみてください。',
        tags: ['全国対応', '送料無料', '北欧デザイン', 'おしゃれ']
      },
      {
        id: 'other-2',
        title: 'トランクルームなら掲載物件数No.1の【ハローストレージ】！',
        imageUrl: 'https://www21.a8.net/svt/bgt?aid=250309411358&wid=003&eno=01&mid=s00000007033001059000&mc=1',
        imageLinkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5X58W2+1I9M+6AZAP',
        linkUrl: 'https://px.a8.net/svt/ejp?a8mat=450ZZ7+5X58W2+1I9M+60H7M',
        imageTrackingTag: 'https://www16.a8.net/0.gif?a8mat=450ZZ7+5X58W2+1I9M+6AZAP',
        trackingTag: 'https://www19.a8.net/0.gif?a8mat=450ZZ7+5X58W2+1I9M+60H7M',
        description: '引越し先の収納が思ったより少なかったり、駐車場が狭かったりする際、トランクルームのご利用を検討してみてはどうでしょうか。ハローストレージは掲載物件数が最多で全国約10万室以上展開しているトランクルームサービスなので、あなたの引越し先の近くにもあるかもしれません。大切な家具やバイク、置き場に困っているものを収納するスペースでハローストレージをチェックしてみてください。',
        tags: ['安心', 'セキュリティ対応', '掲載物件数No.1', '大容量']
      }
    ]
  }
];
