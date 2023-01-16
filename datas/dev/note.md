6.4.9 (2022 01 14)
- 편집 이후 엔터나 좌표값들이 전체적으로 문제가 발생하여 해당 부분을 수정 하였습니다.
- 출석 체크 기능을 추가 하였습니다. 
  * 출석 체크시 500 페이지를 획득 합니다. 
- 히스토리가 수백, 수천 단위가 넘어갈 경우 복구에 실패하던 버그 수정. 
- 메모에 여러줄을 추가 할 수 있도록 수정 하였습니다. 
- 백업/복구시 무한 로딩 현상을 해결하기 위해 일부 로직을 수정 하였습니다. 
- 동기화시 여러 문제로 실패할 경우 팝업으로 실패한 원인을 띄우도록 하였습니다. 
- 내서재 스크롤시 상단 기능 버튼이 고정 되도록 수정 하였습니다. 
- TTS 설정 하단에 [TTS 재생시 최종 수정된 문장 표시] 기능을 추가 하였습니다. 
 * 이기능을 사용하면TTS 재생중 실제 필터된 결과물을 확인 할 수 있습니다. 
 * TTS 내용이 이상할 경우 이 기능을 활성화 해서 확인 할 수 있습니다. 

- [TTS 문장 검사기] 기능을 추가 하였습니다.
  * 이기능은 언어 설정이 한국어 일경우에만 옵션이 보이게 됩니다. 
  * 이기능은 개발자 주관적인 판단으로만 제작 된 기능 입니다. 
  * 검사시 50 페이지를 소모 합니다. 
  * 검사 조건은 아래와 같습니다. 

1. 문장 끝이 [순간.] [때.] [뿐.] [니까.] 와 같은 문구가 얼마나 자주 등장 하는가?

2. 문장 끝이 [다.] 로 끝나지 않는 경우가 얼마나 많은가?
  * 따옴표 같은 특수 살왕 제외 

3. 문장끝에 ?! , !? 와같이 한글에선 사용되지 않는 특수문자 집합이 얼마나 많은가? 

4. 감정 묘사를 특수 문자로 사용하는 횟수가 얼마나 되는가?(느낌표나 물음표가 여러개인 경우)
  예 : [맞아! -> 맞아!!!!!!!!], [진짜? -> 진짜??????] 

5. [...고(며) ...하다.] [면서 ... 면서 ... ] [동시에.... ]  했다. 같이 어휘를 얼마나 자주 쓰는 가.
  * 이런 문장을 너무 남발 하는 경우 문장이 상당히 어색해 지는 것 같습니다. 

위 패턴 출현 횟수 / 가중치에 따른 종합 점수가 같이 출력 됩니다. 

종합 점수 / [순간.] [그때.] [뿐.] [니까.]  출현 횟수를 메모에 자동으로 기입 할 수 있습니다. 
---

6.4.9  (2022 01 14)
- After editing, there was a problem with the enter or coordinate values as a whole, so the corresponding part was corrected.
- Added attendance check function.
   * Acquire 500 pages when checking attendance.
- Fixed a bug where recovery failed when the history exceeds hundreds or thousands of units.
- Modified to add multiple lines to a memo.
- Modified the logic to solve the infinite loading phenomenon during backup/recovery.
- When synchronization fails due to various problems, the cause of the failure is displayed in a pop-up.
- Fixed the top function button to be fixed when scrolling through my library.
- Added [Display the last modified sentence when playing TTS] at the bottom of the TTS setting.
  * By using this function, you can check the actual filtered result during TTS playback.
  * If the TTS content is strange, you can check it by activating this function.

---

6.4.9  (2022 01 14)
- 編集後、エンターや座標値が全体的に問題が発生し、その部分を修正しました。
- 出席チェック機能を追加しました。
   *出席チェック時に500ページを獲得します。
- 履歴が数百、数千単位を超えた場合、回復に失敗したバグ修正。
- メモに複数行を追加できるように修正しました。
- バックアップ/回復時の無限ローディング現象を解決するためにロジック修正を修正しました。
- 同期時に複数の問題で失敗した場合、ポップアップで失敗した原因を浮かべるようにしました。
- 耐書材スクロール時に上部機能ボタンが固定されるように修正しました。
- TTS設定の下部に[TTS再生時に最終修正された文章表示]機能を追加しました。
  *この機能を使用すると、TTSの再生中に実際にフィルタ処理された結果を確認できます。
  * TTSの内容がおかしい場合は、この機能を有効にして確認できます。