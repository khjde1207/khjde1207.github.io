5.8.7 (2022 10 20)

1. 풀스크린 시 스크롤 위치 조정.
2. TTS 재생중에 스크롤시 출력되는 버튼 크기를 조절 하였습니다. 
  - 이제 이 버튼을 TTS 스크롤 버튼 이라고 하겠습니다.  
3. TTS 스크롤 버튼에 애니매이션을 추가 하였습니다.
4. TTS 설정에 -> 스크롤 버튼에 아이콘만 표시 기능을 추가 했습니다. 
  - 기본적으로 글자 설명이 같이 표시 됩니다. 
5. TTS 스크롤 버튼순서를 변경하였습니다. 
6. 히스토리 클릭시 해당 파일을 열거나 해당 위치로 이동 하는 기능을 추가 했습니다. 
7. 히스토리 목록에서 파일을 바로 열거나 위치를 열 수 있도록 기능을 추가 하였습니다. 
8. 위치 이동 시 % 입력 으로 위치 이동 안되던 버그 수정. 
9. 파일 열기 전에 뷰어 스크롤 위치 초기화 
10. TTS 재생시 가끔 무한 루프에 빠지던 버그 수정. 

10. 단일 이미지 파일도 OCR 처리되도록 수정. 
  - 이기능은 OCR 키워드 보정, 쪽수제거, 개행정리 등 OCR  기능 을 디테일하게 테스트 하려고 만든 페이지 입니다. 
  - 우선 간단하게 저장 기능 만 제작 하였습니다.
    추후 기능 정리 하면서 개선 해보도록 하겠습니다. 
---

1. Adjust the scroll position in full screen.
2. Adjusted the size of the button that is output when scrolling during TTS playback.
  - We will now refer to this button as the TTS scroll button.
3. Added animation to the TTS scroll button.
4. Added a function to display only icons on the scroll button -> TTS settings.
  - By default, text descriptions are displayed together.
5. The order of the TTS scroll buttons has been changed.
6. Added a function to open the file or move to the location when you click the history.
7. A function has been added so that you can directly open a file or open a location in the history list.
8. Fixed a bug where the position could not be moved with % input when moving the position.
9. Reset viewer scroll position before opening file
10. Fixed a bug that sometimes fell into an infinite loop when playing TTS.

10. Modified so that single image files are also OCR processed.
  - This function is a page created to test the OCR function in detail, such as OCR keyword correction, page number removal, and new line arrangement.
  - First of all, only the save function was created.
    We will try to improve it by organizing the functions later.

---

1. フルスクリーン時のスクロール位置の調整。
2. TTS再生中にスクロール時に出力されるボタンのサイズを調整しました。
  - 今、このボタンをTTSスクロールボタンといいます。
3. TTSスクロールボタンにアニメーションを追加しました。
4. TTS設定に->スクロールボタンにアイコンのみ表示機能を追加しました。
  - デフォルトでは、文字の説明が一緒に表示されます。
5. TTSスクロールボタンの順番を変更しました。
6. 履歴をクリックしたときにそのファイルを開くか、その場所に移動する機能を追加しました。
7. 履歴リストからファイルをすぐに開いたり、場所を開いたりする機能を追加しました。
8. 位置移動時に % 入力に位置移動しなかったバグ修正。
9. ファイルを開く前にビューアのスクロール位置を初期化する
10. TTS再生時に時々無限ループに陥るバグ修正。

10. 単一の画像ファイルもOCR処理するように修正。
  - この機能は、OCRキーワード補正、ページ削除、改行整理などOCR機能をディテールにテストしようとしたページです。
  - まず簡単に保存機能のみ製作しました。
    今後機能整理しながら改善してみましょう。