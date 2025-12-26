"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

// 一覧
app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});






// --- 楽曲管理システム用データ ---
// spec.md のデータ構造に基づく初期データ
let songs = [
  { id: 1, title: "FAKE LAND", artist: "FAKE TYPE", lyrics: `Dangerous 素行不良の喧嘩ラップ　びんびんの目ん玉に焼き付ける
Theme park of FT 着ぐるみの中身はブラックホール要注意
ドレミファソラシすらよく知らない　言ってみればステゴロな輩が織り成す
教養が不足気味　発起人は THHK, D to da I (Pow)
まだまだまだ推移　Bad sounds freaks, Please click it
Retro & Future 見頃だぜヒューマンズ　カートゥーンの軍艦で暴れ回るブッチャー
Smells good 鼻の奥まで抉る　サイケトレビアン
他所の星のエイリアンも遊び来る　耽溺製造器 Digi dan dan
Neo oldies あながち間違いじゃないから晒しちゃいなさい
俺たちまだ見失っちゃねえ Open the box

只今上昇中 UP! 中高生こぞって TAP!
お子ちゃまお口にチャック　鳴かねば待たず掃射

魔のパンドラ　開けばようこそ我々のターン
Rat a tat... Ciao さぁ御覧　狂気　快楽
罪と罰　渦巻くゲーム

小賢しい恭しい礼装マン　涅槃までかっ飛ばす Bassball bat
ON&ON 骨の Rail coaster 青いシグナル And you don't stop
発車オーライ　人生そのものがアトラクション
電飾も踊り出す　夜通しの娯楽場
象徴は狂乱のシルクハット　激情のワイン　溢れ出す着想
恣意的に偏らす喜怒哀楽　感情ファイナンス
無利息の喜びを貸し付ける　返済は歓声と笑顔のみで Win-Win な間柄
バイタルを拝借　メンタルを介錯　今ならパンドラの鍵もらえちゃう!?
開錠すれば最後　妬み嫉み悲しみに愛憎　全て忘れちゃう　空のお人形
反面教師の理想　奴隷根性　半強制　同調圧力　心配ないからおいで

愉快で痛快で邪悪　散りばめてた Dark
興奮と幸福ザクザク　虜にする巧者

魔のパンドラ　開けばようこそ我々のターン
Rat a tat... Ciao さぁ御覧　狂気　快楽
罪と罰　渦巻くゲーム

大胆不敵な手口で一気に根こそぎ一本釣り
揺れ動く罠　忍び寄る君の耳元ピンポイント
興味と恐怖がどっこいどっこいなら　いざ尋常に
掴んだら離さない　"FAKE" タトゥー刻んでやる心臓に

魔のパンドラ　開けばようこそ我々のターン
Rat a tat... Ciao さぁ御覧　狂気　快楽
罪と罰　渦巻くゲーム
`, url: "https://www.youtube.com/watch?v=maHs9Ogzojo" },
  { id: 2, title: "BUTCHER VANITY", artist: "Vane Lily", lyrics: `They say my hunger's a problem
They tell me to curb my appetite
They say I can't keep myself
From trying a bite of every plate in sight

They worship patience, a virtue
Oh, they tell me gluttony’s a sin
But my desire, it’s bottomless
I wanna slit your throat and eat ‘till I get sick

The slaughter's on
I’d love to see you come undone
Unsatisfied
Until I’ve got you flayed alive

So grab a plate, have a taste
这口味让我陶醉 (The flavor's intoxicating)
I’m still preying on a butcher’s vein

To truss you up in pretty patterns
Oh, to dress your flesh up with the works
Perfectly portioned by a dagger
Serving the finest leftover dessert

Why would I desecrate a carcass?
Why let the offal go to waste?
It’s love that guides my cleaver with such tenderness
A perfect strike to fix the horror on your face!

The slaughter’s mine
Oh, blood and viscera divine
Preserved and primed
Each muscle divvied up to dine

And in the high, 我存在 (There I am)
Tasting 血淋淋的爱 (A dripping, bloody love)
I’ll devour all of you in time

Oh, your heart
Aortic work of art
My love, my knife
To carve it out, your life

So grab a plate, have a taste
这口味让我陶醉 (The flavor's intoxicating)
I’m still preying on a butcher’s vein

To snap the sinew, I want
To get within you, I want
To not forgive you
Rigor mortis, mold and mildew
But dear, you should be grateful
That I won’t waste a good meal
That all my love’s precision
Carves a cut to simply die for

[douyin “huh?” sound effect]

TO SNAP THE SINEW, I WANT
TO GET WITHIN YOU, I WANT
TO SCAR THE TISSUE
BUTTERFLY AND RECTIFY YOU
I NEED TO BE YOUR AFTERLIFE
EUCHARIST, I DEIFY
GOD, OH, FUCK THE FORK AND KNIFE
I’LL RIP IN HANDS AND TEETH AND TAKE A BITE

The slaughter's on
I’d love to see you come undone
Unsatisfied
Until I've got you flayed alive

So grab a plate, have a taste
这口味让我陶醉 (The flavor's intoxicating)
I’m still preying on a butcher’s vein

And now the slaughter’s mine
My darling, get under the knife
Your broken pride
A cut so perfect in its prime

All that I see, 63°,
为让我心醉的你 (For the you I hunger for)
I'll be waiting, so impatiently

(Oh, your heart
Aortic work of art
My love, my knife
To carve it out, your life)

So grab a plate, have a taste
这口味让我陶醉 (The flavor's intoxicating)
I’m still preying on a butcher’s vein

Still praying, hopeless and in vain.`, url: "https://www.youtube.com/watch?v=vjBFftpQxxM&list=RDvjBFftpQxxM&start_radio=1" }, 
  { id: 3, title: "Overdose", artist: "なとり", lyrics: `本当は分かっていた
いけないことだったって、分かっていたのに
この手をすり抜ける全部が愛に見えたの
確かめていた言葉が形になって、揺れるだけ

弾いて、描いて　きっと、それだけ
つまらないな、正解の読み合わせ
あとちょっとで分かりかけていたのに
飲んで、吐いて　全部忘れちゃえ
水をまとった本心と鏡合わせ
見つめ、会えたら

Overdose 君とふたり やるせない日々
解像度の悪い夢を見たい
Overdose 君とふたり 甘いハッタリ
Don’t stop it music,darling

本当に分かっている？
いけないことだったって、分かっている？
多分、時間だけが過ぎていく問答で満ちていく
言い訳する間もなく、裸になってしまうだけ

きっと、溜まっていくんだ　ずっと
終わってしまえばいいと、ふっと
傷んで腐っていく、あの甘い果実のように 僕ら、壊れていく
だから踊って、眠って　全部忘れちゃえ
嘘を被ったあなたと隣り合わせ
見つめ、会えたら

Overdose 君とふたり
分かりたいのに
変に間の悪い嘘が嫌い
Overdose 君とふたり
分かりたいのに
Two step from (hell) with me,darling

Overdose 君とふたり
やるせない日々
解像度の悪い夢を見たい
Overdose 君とふたり
甘いハッタリ
Don’t stop it music,darling

Overdose 君とふたり
分からない
けど、変に間の悪い嘘でもいいから
どう、君とふたり 甘いハッタリ
Don’t stop it music,darling

Don’t stop it music,darling`, url: "https://www.youtube.com/watch?v=H08YWE4CIFQ" },
  { id: 4, title: "悪童押韻帖", artist: "TOPHAMHAT-KYO", lyrics: `JP イレギュラー上がり　今　遮二無二無理くり
引っ切り無しキリないシンギュラリティに追われ
チンピラなビギナーは佇み淘汰済み (ガラ歯切れ悪い
BAD!)
殺風景なハリボテに欠伸　雁首狙い斬る Wait a
minute
猛獣ぶんな雑魚風情がもう十分だ (一刀両断)
血の雨の乳呑み子 (Amigo!)
喧々囂々　ばら撒かれて枯れて陽の目を浴びぬまま腐食
荒れる王道に転がり込め　踏み締めろアングラの出
デッパツ一発 (Brah!)
発車オーライ　真っ逆さま　天地揺らぐイカサマ
(Trick flow)
素面のC調　一丁前に随に　日の丸悪童押韻帖 (決行)
目上に吐くために蓄えた暴言のバーゲンセール
未だ活気のある渇きと好機見逃さない　切れ者ぶっ
ちゃう
I’m a butcher, Boom shakalaka (Boom boom bap)
セキュリティ切り　殺気洩れ防人　好きに生き酒盛り
隙だらけで逆らえば掬われる足　ふわりすってんころりん がら空き
ステゴロ　食べ頃失う　驕る者　踊る者 (Yum yum)
吠えろベロ出しっぱで (Bow wow)
Optimize ボロ儲けのマーケット　狼狽えるこの世は
アンチイモータル (Gong!)
忍ばす兵器　未だ刃こぼれ知らずで伸びしろ天狗鼻
おこぼればかりじゃ満たされない　自らリスキーな道選び I gotta go

悪童押韻帖

Feel like a shogun
I build up my castle, osaka
Wait
Moving the pictures like Mappa
Wait
They wanna step to daimyo of dialect
They ain’t a rung on my ladder
Wait
Ain’t got no skin in the game
I got skin on my name like i’m shaka
Pull em apart like a cracker
And watch all the joking fall out of the
wrappers
Wait

Send em in to orbit i be piloting my spaceship
Weightless
Moving like the gravity i’m pulling at the
bases
They can’t even handle me in person
So they bashing on my greatness
Basic
Locking all my enemies in different kinds of
cages
Look how they painted
Red for the threats
And the green for the brainless
I make em choke like they speaking in gaelic
Guess i’m sadist

I be hitting every syllable so simple like it’s
baby talk
The way i’m rapping making people wanna praise
the lord
So wright, cannot face the court
Gonna cut em all short like the game awards


Ain’t nobody telling me the limit, i be making
more
Cus i’m only other person that i cater for
Getting hotter so i open windows
Like i’m doflamingo keep on breaking laws


Do it raw like ramsey
Mans like a german phone i’m “handy”
Leave their todgers bit like harry
Ain’t gon regret my moves, no plan b

They don’t understand me
Everybody caught up in a bubble like they sandy
Moving like i’m willy wonka, no candy
Brother gonna switch up on them, we tag team

悪童押韻帖


Gotta get a little bit of courage from the onset
Easy come and easy go when pressure isn’t on
yet
Never gonna measure up, a rebel with a cause
Wet dog, turned tail and ran to where I heard
applause
No claws no teeth no reckless ego
And somehow still standing with all my heroes
Nothing but the past left now to fear
Though every now and then, saw me take it back
to zero

Kami rockin’ up to the shrine to witness
The curious ascent of the ignorant gift-less
Rap is all ya know me for but I don’t really
fit this
Only type of game I played that I completed
hitless
Fitting, I guess
I’m not winning unless I got a mask on
That’s on me
But I’m in distress
I think yes, the best days are over
Demon burning at the stake
I don’t really know her

Now I gotta slow it down

Shinobi taking lives, getting money
They wanna twist words
While they’re looking at me funny
But the last thing you heard before taking off
running
Spirit of the Tiger in hot pursuit
Wanting getting wanting
Rocky with the grit
But my wit stay sharper
Studying the blade but they say
“Study harder”
Guess I gotta be a martyr
But the enemy is smarter

Scrolls in the mind like I’m channeling Musashi
Think I’m gonna choke and run away again?
Watch me
Summoned by the gods, and I got ‘em like they
got me
Came a little way from being nothing but your
copy

Steel in my soul, a katana unsheathed
A brand that brings enemies long as I breathe
Wild West style with the spirit of the far east
Never gonna go home, think I found my inner
peace`, url: "https://www.youtube.com/watch?v=OuHA22DMA0Q" },
  { id: 5, title: "マーナガルム", artist: "缶缶", lyrics: `泡沫ながら我ら今は暴徒

煮えたぎる Vibes すっからかんになる
I mad at stupid joke
今世紀最大級　喰らいな Mo fxxker 振れ尻尾
もうこりごり　この期に及んで濡れ手で粟 What ever
Oh my "F" word

甘言並べ立てて近付いて来る　寝首掻く影
Rat a tat...
にやついた輩で溢れかえる
喰って喰われて　南無阿弥陀仏浚う

Ah okay 果敢かつ勧善懲悪すらお遊びのアッパーカット
銀河アンドロメダどよめいた　真っ赤っかな舌
Do what you gotta do (Wawawa)
蝶のように舞いカウンター穿つ
バラード歌うようにその実は Staccato, Arp ばり暴れる言葉
波乱万丈に張り合う　盤上に針を落とす

能動であれ... 不和雷同の業
(GAYA)

無頼の牙 Thousand
喰らえ　百鬼夜行に八面六臂に及ぶ技
パラノイア散々　拉げた雨が虚ろに落ちるざぶざぶ (Foo)
Drop it 未だ蔓延る　甘い汁に擦り寄る Fxxkers
Head お花畑　水月鏡花さ　羽虫毟る羽 (Uh)
Drop it 上等こいで呆気なく飼い慣らされる Fxxkers
野暮な縛り噛み引き千切るわ (Blah) Do our thing, Get down

Ah yeah 魑魅魍魎　日に日に狂暴
一切ありゃせん加減
Rat a tat...
傅いたふりしてくるり寝返る
売って売られて性悪説に至る (Uh ha)

信用など儚く脆い Fragile ガラスのカラーバー (Yeah)
期待など端からすることなかれ哀れ
真っ新な (Ayeee) 純心など無かった　穢れ放題の後学んだ (Yeah)
騙し合いさながら　カニバリズム　共喰いの同胞

澆薄くたばれ...　我楽多心
(GAYA)

無頼の牙 Thousand
喰らえ　百鬼夜行に八面六臂に及ぶ技
パラノイア散々　拉げた雨が虚ろに落ちるざぶざぶ (Foo)
Drop it 未だ蔓延る　甘い汁に擦り寄る Fxxkers
Head お花畑　水月鏡花さ　羽虫毟る羽 (Uh)
Drop it 上等こいで呆気なく飼い慣らされる Fxxkers
野暮な縛り噛み引き千切るわ (Blah) Do our thing, Get down

泡沫ながら我ら未だ暴徒

Okay 重ねた悪行に残残残虐に自由的反反反逆思想
頭 PUNK PUNK PUNK 地球の裏まで Bow wow wolf

だって未だ乾いて日常に飽いて脳髄が揺らいでいる (Ola)
薄っぺらな背景　色褪せ切り裂いて新世界望んでいる (Ola)
堂々巡りの妄想 I don't wanna 恐慌　御せない餓狼の本能
牙研いでグゥグゥな腹　満たすべく今日も

Awoo Awoo ぎらついたままで
Awoo Awoo 暴れ回る Upside down
(Prrrr Ahh) 悉く (Ayeee) 喰らいつく喉元
眼前から背面まで血みどろ踊ろう
あれよあれよと成れの果てまで (Wow)　安寧のパレードとは無縁の世界で (Eeee)
怒りの刃抜いて　いないいないばあ
着火絶望のマッチ棒　吼える月の犬畜生`, url: "https://www.youtube.com/watch?v=0sp0A3wWw9Y" },
];

// --- 楽曲管理システム用ルーティング ---

// 1. 一覧表示 (Read)
app.get("/song", (req, res) => {
  res.render('song_list', { data: songs });
});

// 2. 詳細表示
app.get("/song/detail/:index", (req, res) => {
  const index = req.params.index;
  // if文削除：配列のデータをそのまま渡す
  res.render('song_detail', { index: index, data: songs[index] });
});

// 3. 追加機能 (Create)
// フォーム表示 (HTMLへリダイレクト)
app.get("/song/create", (req, res) => {
  res.render('song_create');
});

// 確認画面
app.post("/song/create/confirm", (req, res) => {
  const newSong = {
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics,
    url: req.body.url
  };
  res.render('song_create_confirm', { data: newSong });
});

// 登録実行
app.post("/song/create/execute", (req, res) => {
  // ID自動採番（計算のみで分岐なし）
  const maxId = songs.reduce((max, song) => (song.id > max ? song.id : max), 0);
  const newSong = {
    id: maxId + 1,
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics,
    url: req.body.url
  };
  songs.push(newSong);
  res.redirect('/song');
});

// 4. 編集機能 (Update)
// フォーム表示
app.get("/song/edit/:index", (req, res) => {
  const index = req.params.index;
  // if文削除：配列のデータをそのまま渡す
  res.render('song_edit', { index: index, data: songs[index] });
});

// 確認画面
app.post("/song/update/confirm/:index", (req, res) => {
  const index = req.params.index;
  const updateData = {
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics,
    url: req.body.url
  };
  res.render('song_edit_confirm', { index: index, data: updateData });
});

// 更新実行
app.post("/song/update/execute/:index", (req, res) => {
  const index = req.params.index;
  // if文削除：そのまま代入
  songs[index].title = req.body.title;
  songs[index].artist = req.body.artist;
  songs[index].lyrics = req.body.lyrics;
  songs[index].url = req.body.url;
  
  res.redirect('/song');
});

// 5. 削除機能 (Delete)
// 確認画面
app.get("/song/delete/confirm/:index", (req, res) => {
  const index = req.params.index;
  // if文削除：配列のデータをそのまま渡す
  res.render('song_delete_confirm', { index: index, data: songs[index] });
});

// 削除実行
app.post("/song/delete/:index", (req, res) => {
  const index = req.params.index;
  // 配列から削除するだけ
  songs.splice(index, 1);
  res.redirect('/song');
});




let recipes = [
  { id: 1, name: "肉じゃが(3人前)", genre: "和食", ingredients: `
・牛切り落としor牛バラ 100-150g
・玉ねぎ 1/2
・にんじん 1/2
・じゃがいも 2個
・糸蒟蒻 一袋
・ヤマサ減塩醤油 大さじ2と1/2
・砂糖 大さじ2
・みりん 大さじ2
`, url: "https://cookpad.com/jp/recipes/25289743?ref=search&search_term=%E8%82%89%E3%81%98%E3%82%83%E3%81%8C" },
  { id: 2, name: "オムライス(2人前)", genre: "洋食", ingredients: `
・ご飯 450g
・バター 40g
・ケチャップ 3.5g
・ウィンナー 3本
・塩コショウ 6振り
・卵 3個
・マヨネーズ 大さじ2
・バター 10g
    `, url: "https://cookpad.com/jp/recipes/25295456?ref=search&search_term=%E3%82%AA%E3%83%A0%E3%83%A9%E3%82%A4%E3%82%B9" },
  { id: 3, name: "ビーフシチュー(2人前)", genre: "洋食", ingredients: `
・牛すね肉 400g
・玉ねぎ 1個
・ホールトマト 390g
・生クリーム 200cc
・ケチャップ 大さじ2
・中濃ソース 大さじ2
・油 大さじ1
・にんにく 小さじ1
・ローリエ 1枚
・塩 少々
・こしょう 少々
    `, url: "https://cookpad.com/jp/recipes/25289040?ref=search&search_term=%E3%83%93%E3%83%BC%E3%83%95%E3%82%B7%E3%83%81%E3%83%A5%E3%83%BC" },
];

// 1. 一覧表示
app.get("/recipe", (req, res) => {
  res.render('recipe_list', { data: recipes });
});

// 2. 詳細表示
app.get("/recipe/detail/:index", (req, res) => {
  const index = req.params.index;
  res.render('recipe_detail', { index: index, data: recipes[index] });
});

// 3. 追加機能 (Create)
// 入力フォーム (HTMLへリダイレクト)
app.get("/recipe/create", (req, res) => {
  res.render('recipe_create');
});

// 追加確認
app.post("/recipe/create/confirm", (req, res) => {
  const newRecipe = {
    name: req.body.name,
    genre: req.body.genre,
    ingredients: req.body.ingredients,
    url: req.body.url
  };
  res.render('recipe_create_confirm', { data: newRecipe });
});

// 追加実行
app.post("/recipe/create/execute", (req, res) => {
  const maxId = recipes.reduce((max, item) => (item.id > max ? item.id : max), 0);
  const newRecipe = {
    id: maxId + 1,
    name: req.body.name,
    genre: req.body.genre,
    ingredients: req.body.ingredients,
    url: req.body.url
  };
  recipes.push(newRecipe);
  res.redirect('/recipe');
});

// 4. 編集機能 (Update)
// 編集フォーム
app.get("/recipe/edit/:index", (req, res) => {
  const index = req.params.index;
  res.render('recipe_edit', { index: index, data: recipes[index] });
});

// 編集確認
app.post("/recipe/update/confirm/:index", (req, res) => {
  const index = req.params.index;
  const updateData = {
    name: req.body.name,
    genre: req.body.genre,
    ingredients: req.body.ingredients,
    url: req.body.url
  };
  res.render('recipe_edit_confirm', { index: index, data: updateData });
});

// 更新実行
app.post("/recipe/update/execute/:index", (req, res) => {
  const index = req.params.index;
  
  recipes[index].name = req.body.name;
  recipes[index].genre = req.body.genre;
  recipes[index].ingredients = req.body.ingredients;
  recipes[index].url = req.body.url;

  res.redirect('/recipe');
});

// 5. 削除機能 (Delete)
// 削除確認
app.get("/recipe/delete/confirm/:index", (req, res) => {
  const index = req.params.index;
  res.render('recipe_delete_confirm', { index: index, data: recipes[index] });
});

// 削除実行
app.post("/recipe/delete/:index", (req, res) => {
  const index = req.params.index;
  recipes.splice(index, 1);
  res.redirect('/recipe');
});






let universities = [
  { 
    id: 1, 
    name: "東京大学", 
    prefecture: "東京都", 
    faculty: `
・法学部
・医学部
・工学部
・文学部
・理学部
・農学部
・経済学部
・教養学部
・教育学部
・薬学部
    `, 
    url: "https://www.u-tokyo.ac.jp/ja/index.html" 
  },
  { 
    id: 2, 
    name: "京都大学", 
    prefecture: "京都府", 
    faculty: `
・総合人間学部
・文学部
・教育学部
・法学部
・経済学部
・理学部
・医学部
・薬学部
・工学部
・農学部
    `, 
    url: "https://www.kyoto-u.ac.jp/ja" 
  },
  { 
    id: 3, 
    name: "早稲田大学", 
    prefecture: "東京都", 
    faculty: `
・政治経済学部
・法学部
・文化構想学部
・文学部
・教育学部
・商学部
・基幹理工学部
・創造理工学部
・先進理工学部
・社会科学部
・人間科学部
・スポーツ科学部
・国際教養学部
`, 
    url: "https://www.waseda.jp/top/" 
  },
    { 
    id: 4, 
    name: "千葉工業大学", 
    prefecture: "千葉県", 
    faculty: `
・工学部
・創造工学部
・先進工学部
・情報変革科学部
・未来変革科学部
`, 
    url: "https://chibatech.jp" 
  },
];

// 1. 一覧表示
app.get("/university", (req, res) => {
  res.render('university_list', { data: universities });
});

// 2. 詳細表示
app.get("/university/detail/:index", (req, res) => {
  const index = req.params.index;
  res.render('university_detail', { index: index, data: universities[index] });
});

// 3. 追加機能 (Create)
// 入力フォーム
app.get("/university/create", (req, res) => {
  res.render('university_create');
});

// 追加確認
app.post("/university/create/confirm", (req, res) => {
  const newUni = {
    name: req.body.name,
    prefecture: req.body.prefecture,
    faculty: req.body.faculty,
    url: req.body.url
  };
  res.render('university_create_confirm', { data: newUni });
});

// 追加実行
app.post("/university/create/execute", (req, res) => {
  const maxId = universities.reduce((max, item) => (item.id > max ? item.id : max), 0);
  const newUni = {
    id: maxId + 1,
    name: req.body.name,
    prefecture: req.body.prefecture,
    faculty: req.body.faculty,
    url: req.body.url
  };
  universities.push(newUni);
  res.redirect('/university');
});

// 4. 編集機能 (Update)
// 編集フォーム
app.get("/university/edit/:index", (req, res) => {
  const index = req.params.index;
  res.render('university_edit', { index: index, data: universities[index] });
});

// 編集確認
app.post("/university/update/confirm/:index", (req, res) => {
  const index = req.params.index;
  const updateData = {
    name: req.body.name,
    prefecture: req.body.prefecture,
    faculty: req.body.faculty,
    url: req.body.url
  };
  res.render('university_edit_confirm', { index: index, data: updateData });
});

// 更新実行
app.post("/university/update/execute/:index", (req, res) => {
  const index = req.params.index;
  
  universities[index].name = req.body.name;
  universities[index].prefecture = req.body.prefecture;
  universities[index].faculty = req.body.faculty;
  universities[index].url = req.body.url;

  res.redirect('/university');
});

// 5. 削除機能 (Delete)
// 削除確認
app.get("/university/delete/confirm/:index", (req, res) => {
  const index = req.params.index;
  res.render('university_delete_confirm', { index: index, data: universities[index] });
});

// 削除実行
app.post("/university/delete/:index", (req, res) => {
  const index = req.params.index;
  universities.splice(index, 1);
  res.redirect('/university');
});



















app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
