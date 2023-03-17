6.9.1 (2022 03 17)
- 문장 자르는 기준을 직접 입력 할 수 있도록 기능을 추가 하였습니다.
- 파일 오픈시 간혹 내용이 안보이던 버그를 긴급 수정 하였습니다.

6.9.0 (2022 03 16)
- 문장 자르는 기준을 설정 할 수 있도록 기능을 추가 하였습니다. 
  * TTS 설정에서 문장 기준을 엔터, 콤마 등 으로 설정 할 수 있습니다. 
  
- 간혹 히스토리가 초기화 되는 현상이 발생하여 로직을 대대적으로 수정 해 보았습니다. 

- 성능개선을 위해 히스토리 조회 로직을 수정 하였습니다. 
- TTS 재생 로직을 최적화 하였습니다. 
- 비정상적으로 종료되는 현상을 완화 하였습니다. 

6.8.9 (2022 03 13)
- 메모리 사용량을 최적화 하였습니다. 
- 위치 이동 UI 를 조금 변경 하였습니다. 
- 내부적으로 문자 처리 방식을 변경하여 속도를 개선하였습니다. 
- 백업 복구 로직을 수정 하였습니다. 
- 어플 실행이후 2초 후에 백업을 시도 합니다. 
  * 원래 있었던 기능인데 언제부터 인지 해당 로직을 지운것 같습니다. 

web 버전 구글 로그인 을 3월 31까지 변경하라고메일이 여러차례 와서 수정하였습니다. 
web 버전은 아래와 같은 현상이 발생합니다. 

1. 접속시 우측 상단에 로그인 중 메세지가 표시됩니다.(로그인)
2. 매번 사이트 접속시 팝업창이 열리며 로그인 중이라고 표시 됩니다. (구글 드라이브 연동 권한 요청)

---
6.9.1 (2022 03 17)
- A function has been added so that you can directly enter the criterion for cutting sentences.
- Urgently fixed a bug where the content was sometimes not visible when opening a file.

6.9.0 (2022 03 16)
- A function has been added to set the criterion for cutting sentences.
   * In TTS settings, you can set the sentence standard to enter, comma, etc.
  
- Occasionally, the history was initialized, so the logic was extensively modified.

- The history search logic has been modified to improve performance.
- Optimized TTS playback logic.
- Abnormal termination has been alleviated.


6.8.9 (2022 03 13)
- Optimized memory usage.
- Changed the location movement UI a little.
- Improved speed by changing the text processing method internally.
- Modified the backup recovery logic.
- Try backing up 2 seconds after running the application.
   * It was originally a function, but it seems that the logic has been deleted since when.

I received several emails asking me to change the web version Google login by March 31st, so I modified it.
The web version has the following phenomenon.

1. When connecting, a message while logging in is displayed in the upper right corner. (Login)
2. Every time you access the site, a pop-up window will open and indicate that you are logging in. (Request permission to link Google Drive)



---
6.9.1 (2022 03 17)
- 文章トリミング基準を直接入力できるように機能を追加しました。
- ファイルオープン時、たまに内容が見えなかったバグを緊急修正しました。

6.9.0 (2022 03 16)
- 文章トリミング基準を設定できるように機能を追加しました。
   * TTS設定で文基準をエンター、コンマなどに設定できます。
  
- たまに履歴が初期化される現象が発生し、ロジックを大々的に修正してみました。

- パフォーマンス改善のためにヒストリー照会ロジックを修正しました。
- TTS再生ロジックを最適化しました。
- 異常終了する現象を緩和しました。


6.8.9 (2022 03 13)
- メモリ使用量を最適化しました。
- 位置移動UIを少し変更しました。
- 内部的に文字処理方式を変更して速度を改善しました。
- バックアップ回復ロジックを修正しました。
- アプリの実行後2秒後にバックアップを試みます。
   * 元々あった機能なのに、いつからなのか該当ロジックを消したようです。

webバージョンGoogleログインを3月31まで変更するようにメールが何度も来て修正しました。
web版は以下のような現象が発生します。

1. 接続時に右上にログイン中のメッセージが表示されます。 (ログイン)
2. 毎回サイトにアクセスするとポップアップウィンドウが開き、ログイン中と表示されます。 (Googleドライブ連携権限のリクエスト)
