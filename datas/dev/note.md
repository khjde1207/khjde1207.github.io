6.7.4 (2022 02 25)
- 다른 이름으로 저장시 현재 열려있는 창이 닫히도록 수정 하였습니다. 
- 내서재 파일 추가시 다른 화면 으로 이동하면 로딩 표시가 사라지던 버그를 수정 하였습니다. 
- TTS 재생시 실제 읽는 위치가 다르게 표시 되던 버그 수정. 
- epub 변환 로직을 새로 작성 하였습니다.


6.7.3 (2022 02 23)
- 간혹 파일내용이 깨지는 현상을 방지 하기 위해 수동으로 charset 을 설정 할 수 있도록 기능을 추가 하였습니다. 
- 뷰어 에서 간헐적으로 글자수를 잘못계산 하는 버그를 수정 하였습니다.
- 뷰어 화면에서 일괄 수정시 내서재에 백업 파일이 자동 생성되도록 수정 하였습니다.(파일명.backup) 실수로 일괄 수정 했을경우 백업 파일을 통해 복구 할 수 있습니다. 
- 배경 이미지 다운로더 속도를 개선 하였습니다. 
- 뷰어 그림자 부분을 일부 수정 하였습니다. 
- 전체 광고 제거시 ocr, 텍스트 합치기, 편집 등 일부 화면에서 배너광고가 계속 표시되던 버그를 수정 하였습니다. 
- TTS 파일로 변환시 합치는 로직을 제거 하였습니다. 
  * 대신 압축 기능을 추가 하였습니다. 
  * 압축은 여러 파일 선택후 우측 상단 압축 아이콘을 눌러 주시면 압축 할 수 있습니다. 
  * 한번에 너무 많은 양을 압축 할 경우 어플이 종료 될 수 있습니다.

---
6.7.4 (25 Feb 2022)
- Modified to close the currently open window when saving as a different name.
- Fixed a bug where the loading indicator disappeared when moving to another screen when adding a library file.
- Fixed a bug where the actual reading position was displayed differently when playing TTS.
- Rewritten epub conversion logic.


6.7.3 (23 Feb 2022)
- Added a function to manually set the charset to prevent the file contents from being corrupted sometimes.
- Fixed a bug that incorrectly counts the number of characters intermittently in the viewer.
- When editing batches on the viewer screen, a backup file is automatically created in my library.
- Improved background image downloader speed.
- Some of the viewer shadows have been modified.
- Fixed a bug where banner ads continued to be displayed on some screens such as ocr, text merging, and editing when all ads were removed.
- Removed merge logic when converting to TTS file.
   * Added compression instead.
   * Compression can be done by selecting multiple files and pressing the compression icon on the top right.
   * If you compress too much at once, the application may be terminated.
---

6.7.4 (2022 02 25)
- 別名で保存時に現在開いているウィンドウが閉じるように修正しました。
- 書き込んだファイル追加時に別の画面に移動すると、ロード表示が消えていたバグを修正しました。
- TTS再生時に実際に読み取る位置が異なって表示されていたバグ修正。
- epub変換ロジックを新しく作成しました。


6.7.3 (2022 02 23)
- 時々ファイル内容が壊れる現象を防ぐために手動でcharsetを設定できるように機能を追加しました。
- ビューアで間欠的に文字数を誤って計算するバグを修正しました。
- ビューア画面で一括修正時に内在材にバックアップファイルが自動生成されるように修正しました。
- 背景画像ダウンローダ速度を改善しました。
- ビューアの影部分を一部修正しました。
- 広告全体の削除時にocr、テキストの合致、編集など一部の画面でバナー広告が表示され続けていたバグを修正しました。
- TTSファイルに変換する際に合致するロジックを削除しました。
   *代わりに圧縮機能を追加しました。
   *圧縮は複数ファイル選択後、右上の圧縮アイコンを押していただければ圧縮できます。
   ※一度に圧縮量が多すぎるとアプリが終了することがあります。