5.8.5 (2022 10 18)
1. 뷰어 부분 로직 새로 작성. 
  - 새로 작성 함으로써 성능개선을 하였습니다. 

2. 스크롤 속도 기능을 제거 하였습니다. 
  - 뷰어 성능이 업데이트 됨에 따라 속도를 따로 조정하지 않더라도 빠르게 스크롤 할수 있게 되었습니다. 

3. tts 재생중에 뷰어를 스크롤 하면 TTS 위치로 이동할 지, 현재 위치에서 TTS 를 재생 할 지 선택 할수 있도록 기능을 추가 하였습니다. 
  - 구현을 위해 좌표 계산을 두개로 나눠놓았습니다. TTS 재생시에는 TTS 좌표를 디비에 우선 저장하도록 하였습니다. 
  - 이기능은 생소한 기능입니다. 해당 기능에 대해 추가적인 아이디어나 버그가 있으면 카톡이나 텔레그램 단톡방에 오셔서 알려주시기 바랍니다. 
  - 버튼의 투명도는 재생 버튼 투명도와 같은 투명도를 사용합니다. 
  - TTS 정지시 무조건 TTS 재생 위치로 이동 합니다. 

4. 내서재 이미지 크기가 디바이스에 따라 가변적으로 설정 되도록 수정. 

5. OCR 키워드 보정 기능을 설정부분으로 이동 시켰습니다. 
  
6. 튜토리얼 화면 에서 TTS 사용체크시 일부 디바이스를 위해 백그라운드 작동 활성화 창을 띄우도록 수정 하였습니다. 

8. 책갈피 로직 수정.
  - 뷰어 로직 수정 하면서 터치 좌표 계산을 새로제작 하였습니다. 기능은 기존과 같습니다. 

---

5.8.5 (2022 10 18)
1. New viewer part logic.
2. Removed scroll speed function.
3. A function has been added so that if you scroll the viewer while playing tts, you can select whether to move to the TTS position or play TTS from the current position.
4. My library image size is modified to be set variably depending on the device.
5. The OCR keyword correction function has been moved to the setting section.
6. When checking the use of TTS on the tutorial screen, the background operation activation window is displayed for some devices.

---

5.8.5 (2022 10 18)
1. Viewer部分ロジックの新規作成。
2. スクロール速度機能を削除しました。
3. tts再生中にビューアをスクロールすると、TTS位置に移動するか、現在位置でTTSを再生するかを選択できるように機能を追加しました。
4. 書き込んだ画像サイズがデバイスに応じて可変に設定されるように修正。
5. OCRキーワード補正機能を設定部分に移動しました。
6. チュートリアル画面でTTS使用チェック時に一部のデバイスに対してバックグラウンド動作を有効にするウィンドウを表示するように修正しました。