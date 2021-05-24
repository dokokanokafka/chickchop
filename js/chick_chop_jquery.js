    $(function(){
		// 入力をリアルタイムにハングルに反映
        $(document).on('input', '#sample', function() {
			// テキスト欄に入力した日本語をリアルタイム反映
            $('.replace').text($('#sample').val());
			
			// 反映した日本語を即時ハングルに置き換え（複数の要素）
            $('.replace').each(function(){

			// 入力した日本語を取得
			var txt = $(this).html();

			// 取得した日本語をハングルにしてhtmlに置き換え
			$(this).html(

            txt.replace(/ー/g, "")
		
            .replace(/うう/g, "우")
            .replace(/くう/g, "쿠")
            .replace(/すう/g, "수")
            .replace(/つう/g, "쓰")
            .replace(/ぬう/g, "누")

            .replace(/ふう/g, "후")
            .replace(/むう/g, "무")
            .replace(/ゆう/g, "유")
            .replace(/るう/g, "루")
            .replace(/きゅう/g, "큐")

            .replace(/しゅう/g, "슈")
			.replace(/しゅん/g, "슌")
			.replace(/しょん/g, "션")

            .replace(/ちゅう/g, "추")
            .replace(/にゅう/g, "뉴")
            .replace(/ひゅう/g, "휴")
            .replace(/みゅう/g, "뮤")

            .replace(/りゅう/g, "류")
            .replace(/ぎゅう/g, "규")
            .replace(/じゅう/g, "주")
            .replace(/びゅう/g, "뷰")
            .replace(/ぴゅう/g, "퓨")

            // .replace(/おう/g, "오")
            // .replace(/こう/g, "코")
            // .replace(/そう/g, "소")
            // .replace(/とう/g, "토")
            // .replace(/のう/g, "노")

            // .replace(/ほう/g, "호")
            // .replace(/もう/g, "모")
            // .replace(/よう/g, "요")
            // .replace(/ろう/g, "로")
            // .replace(/きょう/g, "쿄")

            .replace(/しょう/g, "쇼")
            .replace(/ちょう/g, "초")
            .replace(/にょう/g, "뇨")
            .replace(/ひょう/g, "효")
            .replace(/みょう/g, "묘")

            .replace(/りょう/g, "료")
            .replace(/ぎょう/g, "교")
            .replace(/じょう/g, "조")
            .replace(/びょう/g, "뵤")
            .replace(/ぴょう/g, "표")

            .replace(/きゃ/g, "캬")
            .replace(/きゅ/g, "큐")
            .replace(/きょ/g, "쿄")
            .replace(/しゃ/g, "샤")
            .replace(/しゅ/g, "슈")
            .replace(/しょ/g, "쇼")
            .replace(/ちゃ/g, "차")
            .replace(/ちゅ/g, "추")
            .replace(/ちょ/g, "초")
            .replace(/にゃ/g, "냐")
            .replace(/にゅ/g, "뉴")
            .replace(/にょ/g, "뇨")
            .replace(/ひゃ/g, "햐")
            .replace(/ひゅ/g, "휴")
            .replace(/ひょ/g, "효")
            .replace(/みゃ/g, "먀")
            .replace(/みゅ/g, "뮤")
            .replace(/みょ/g, "묘")
            .replace(/りゃ/g, "랴")
            .replace(/りゅ/g, "류")
            .replace(/りょ/g, "료")

            .replace(/ぎゃ/g, "갸")
            .replace(/ぎゅ/g, "규")
            .replace(/ぎょ/g, "교")
            .replace(/じゃ/g, "자")
            .replace(/じゅ/g, "주")
            .replace(/じょ/g, "조")
            .replace(/びゃ/g, "뱌")
            .replace(/びゅ/g, "뷰")
            .replace(/びょ/g, "뵤")
            .replace(/ぴゃ/g, "퍄")
            .replace(/ぴゅ/g, "퓨")
            .replace(/ぴょ/g, "표")

            .replace(/あん/g, "안")
            .replace(/いん/g, "인")
            .replace(/うん/g, "운")
            .replace(/えん/g, "엔")
            .replace(/おん/g, "온")

            .replace(/かん/g, "칸")
            .replace(/きん/g, "킨")
            .replace(/くん/g, "쿤")
            .replace(/けん/g, "켄")
            .replace(/こん/g, "콘")

            .replace(/さん/g, "산")
            .replace(/しん/g, "신")
            .replace(/すん/g, "순")
            .replace(/せん/g, "센")
            .replace(/そん/g, "손")

            .replace(/たん/g, "탄")
            .replace(/ちん/g, "친")
            .replace(/つん/g, "쓴")
            .replace(/てん/g, "텐")
            .replace(/とん/g, "톤")

            .replace(/なん/g, "난")
            .replace(/にん/g, "닌")
            .replace(/ぬん/g, "눈")
            .replace(/ねん/g, "넨")
            .replace(/のん/g, "논")

            .replace(/はん/g, "한")
            .replace(/ひん/g, "힌")
            .replace(/ふん/g, "훈")
            .replace(/へん/g, "헨")
            .replace(/ほん/g, "혼")

            .replace(/まん/g, "만")
            .replace(/みん/g, "민")
            .replace(/むん/g, "문")
            .replace(/めん/g, "멘")
            .replace(/もん/g, "몬")

            .replace(/やん/g, "얀")
            .replace(/ゆん/g, "윤")
            .replace(/よん/g, "욘")

            .replace(/らん/g, "란")
            .replace(/りん/g, "린")
            .replace(/るん/g, "룬")
            .replace(/れん/g, "렌")
            .replace(/ろん/g, "론")

            .replace(/わん/g, "완")
            .replace(/をん/g, "온")
            .replace(/ゐん/g, "윈")
            .replace(/ゑん/g, "웬")

            .replace(/がん/g, "간")
            .replace(/ぎん/g, "긴")
            .replace(/ぐん/g, "군")
            .replace(/げん/g, "겐")
            .replace(/ごん/g, "곤")

            .replace(/ざん/g, "잔")
            .replace(/じん/g, "진")
            .replace(/ずん/g, "준")
            .replace(/ぜん/g, "젠")
            .replace(/ぞん/g, "존")

            .replace(/だん/g, "단")
            .replace(/ぢん/g, "진")
            .replace(/づん/g, "준")
            .replace(/でん/g, "덴")
            .replace(/どん/g, "돈")

            .replace(/ばん/g, "반")
            .replace(/びん/g, "빈")
            .replace(/ぶん/g, "분")
            .replace(/べん/g, "벤")
            .replace(/ぼん/g, "본")

            .replace(/ぱん/g, "판")
            .replace(/ぴん/g, "핀")
            .replace(/ぷん/g, "푼")
            .replace(/ぺん/g, "펜")
            .replace(/ぽん/g, "폰")

            .replace(/あっ/g, "앗")
            .replace(/いっ/g, "잇")
            .replace(/うっ/g, "웃")
            .replace(/えっ/g, "엣")
            .replace(/おっ/g, "옷")

            .replace(/かっ/g, "캇")
            .replace(/きっ/g, "킷")
            .replace(/くっ/g, "쿳")
            .replace(/けっ/g, "켓")
            .replace(/こっ/g, "콧")

            .replace(/さっ/g, "삿")
            .replace(/しっ/g, "싯")
            .replace(/すっ/g, "숫")
            .replace(/せっ/g, "셋")
            .replace(/そっ/g, "솟")

            .replace(/たっ/g, "탓")
            .replace(/ちっ/g, "칫")
            .replace(/つっ/g, "씃")
            .replace(/てっ/g, "텟")
            .replace(/とっ/g, "톳")

            .replace(/なっ/g, "낫")
            .replace(/にっ/g, "닛")
            .replace(/ぬっ/g, "눗")
            .replace(/ねっ/g, "넷")
            .replace(/のっ/g, "놋")

            .replace(/はっ/g, "핫")
            .replace(/ひっ/g, "힛")
            .replace(/ふっ/g, "훗")
            .replace(/へっ/g, "헷")
            .replace(/ほっ/g, "홋")

            .replace(/まっ/g, "맛")
            .replace(/みっ/g, "밋")
            .replace(/むっ/g, "뭇")
            .replace(/めっ/g, "멧")
            .replace(/もっ/g, "못")

            .replace(/やっ/g, "얏")
            .replace(/ゆっ/g, "윳")
            .replace(/よっ/g, "욧")

            .replace(/らっ/g, "랏")
            .replace(/りっ/g, "릿")
            .replace(/るっ/g, "룻")
            .replace(/れっ/g, "렛")
            .replace(/ろっ/g, "롯")

            .replace(/わっ/g, "왓")
            .replace(/をっ/g, "옷")
            .replace(/ゐっ/g, "윗")
            .replace(/ゑっ/g, "웻")

            .replace(/がっ/g, "갓")
            .replace(/ぎっ/g, "깃")
            .replace(/ぐっ/g, "굿")
            .replace(/げっ/g, "겟")
            .replace(/ごっ/g, "곳")

            .replace(/ざっ/g, "잣")
            .replace(/じっ/g, "짓")
            .replace(/ずっ/g, "줏")
            .replace(/ぜっ/g, "젯")
            .replace(/ぞっ/g, "좃")

            .replace(/だっ/g, "닷")
            .replace(/ぢっ/g, "짓")
            .replace(/づっ/g, "줏")
            .replace(/でっ/g, "뎃")
            .replace(/どっ/g, "돗")

            .replace(/ばっ/g, "밧")
            .replace(/びっ/g, "빗")
            .replace(/ぶっ/g, "붓")
            .replace(/べっ/g, "벳")
            .replace(/ぼっ/g, "봇")

            .replace(/ぱっ/g, "팟")
            .replace(/ぴっ/g, "핏")
            .replace(/ぷっ/g, "풋")
            .replace(/ぺっ/g, "펫")
            .replace(/ぽっ/g, "폿")

            .replace(/あ/g,'아')
            .replace(/い/g,'이')
            .replace(/う/g,'우')
            .replace(/え/g,'에')
            .replace(/お/g,'오')
            .replace(/か/g, "카")
            .replace(/き/g, "키")
            .replace(/く/g, "쿠")
            .replace(/け/g, "케")
            .replace(/こ/g, "코")
            .replace(/さ/g, "사")
            .replace(/し/g, "시")
            .replace(/す/g, "수")
            .replace(/せ/g, "세")
            .replace(/そ/g, "소")
            .replace(/た/g, "타")
            .replace(/ち/g, "치")
            .replace(/つ/g, "쓰")
            .replace(/て/g, "테")
            .replace(/と/g, "토")
            .replace(/な/g, "나")
            .replace(/に/g, "니")
            .replace(/ぬ/g, "누")
            .replace(/ね/g, "네")
            .replace(/の/g, "노")
            .replace(/は/g, "하")
            .replace(/ひ/g, "히")
            .replace(/ふ/g, "후")
            .replace(/へ/g, "헤")
            .replace(/ほ/g, "호")
            .replace(/ま/g, "마")
            .replace(/み/g, "미")
            .replace(/む/g, "무")
            .replace(/め/g, "메")
            .replace(/も/g, "모")
            .replace(/や/g, "야")
            .replace(/ゆ/g, "유")
            .replace(/よ/g, "요")
            .replace(/ら/g, "라")
            .replace(/り/g, "리")
            .replace(/る/g, "루")
            .replace(/れ/g, "레")
            .replace(/ろ/g, "로")
            .replace(/わ/g, "와")
            .replace(/を/g, "오")
            .replace(/ん/, "")
            .replace(/ゐ/g, "위")
            .replace(/ゑ/g, "웨")

			.replace(/が/g, "가")
			.replace(/ぎ/g, "기")
			.replace(/ぐ/g, "구")
			.replace(/げ/g, "게")
			.replace(/ご/g, "고")

			.replace(/ざ/g, "자")
			.replace(/じ/g, "지")
			.replace(/ず/g, "즈")
			.replace(/ぜ/g, "제")
			.replace(/ぞ/g, "조")

			.replace(/だ/g, "다")
			.replace(/ぢ/g, "지")
			.replace(/づ/g, "주")
			.replace(/で/g, "데")
			.replace(/ど/g, "도")

			.replace(/ば/g, "바")
			.replace(/び/g, "비")
			.replace(/ぶ/g, "부")
			.replace(/べ/g, "베")
			.replace(/ぼ/g, "보")

			.replace(/ぱ/g, "파")
			.replace(/ぴ/g, "피")
			.replace(/ぷ/g, "푸")
			.replace(/ぺ/g, "페")
			.replace(/ぽ/g, "포")
                );
            });
        });

		// コピー機能
        $('#js-copybtn').on('click', function(){

			// 何も入力されてないとアラート出す
			if($('#output').html() === '　' || $('#output').html() === ''){
				alert('何も入力されていません。入力してください！');
				return false;
			}
			// ハングルに変換されてないとアラート出す
			if(!$('#output').html().match(/^[가-힣]+$/)){
				alert('ハングルに変換されていない文字があります！ひらがなを入力してください！');
				return false;
			}

            // コピーする文章の取得
            let text = $('#output').text();
            // テキストエリアの作成
            let $textarea = $('<textarea></textarea>');
            // テキストエリアに文章を挿入
            $textarea.text(text);
            //テキストエリアを挿入
            $(this).append($textarea);
            //テキストエリアを選択
            $textarea.select();
            // コピー
            document.execCommand('copy');
            // テキストエリアの削除
            $textarea.remove();

            $('#js-copyalert').css(
				'color', 'black'
				);
				setTimeout(function(){
				$("#js-copyalert").css('color', 'transparent');
				},1500);
        });

    });   