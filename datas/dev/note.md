5.9.2 (2022 11 01)
1. 텍스트 일괄 수정 부분에 힌트 문구 추가. 
2. epub 변환시 순서 오류 수정.
3. 백업 기능이 자동 으로 작동 되도록 수정 하였습니다. 
  - 자동백업은 wifi만 사용할지 여부를 선택 할 수 있습니다. 
  - 자동 백업 주기를 설정 할 수 있습니다.
  작동 방식 :
  - 백업은 이제 모델명 기준으로 파일이 생성 됩니다.
4. tts 재생중 스크롤 이후 외부음성 으로 인해 일시정지시 위치가 스크롤 했던 곳으로 가는 버그 수정.
5. 뷰어 사이즈 계산 로직 수정. 
  - 가끔 사이즈계산 오류로 화면 사이즈가 0 으로 나와 빈 화면이 나오는 현상이 있었습니다. 
  - 패치 이후에도 빈화면이 나올 경우 제보 바랍니다.
6. 자잘한 버그 나 오타 수정. 
  - 기능 추가 하면서 발견되는 자잘한 버그를 수정 하였습니다.
7. 더블탭 기능 사용 여부를 판단하여 터치 이벤트 딜레이 시간 최소화.
8. 북마크 메모기능 을 추가 하였습니다. 
9. epub 변환 로직 수정. 


---

5.9.2 (2022 11 01)
1. Added hint text to text batch editing.
2. Fix order error when converting epub.
3. The backup function has been modified to work automatically.
   - You can choose whether to use only wifi for automatic backup.
   - You can set the automatic backup cycle.
   How it works:
   - Backup files are now created based on the model name.
4. Fixed a bug where the position scrolled to where it was scrolled when paused due to an external voice after scrolling during tts playback.
5. Fixed viewer size calculation logic.
   - Occasionally, due to a size calculation error, the screen size was displayed as 0 and a blank screen appeared.
   - If a blank screen appears after the patch, please report it.
6. Fixed minor bugs and typos.
   - Fixed minor bugs found while adding features.
7. Minimize touch event delay time by judging whether to use the double tap function.
---

5.9.2 (2022 11 01)
1. テキストのバッチ修正部分にヒントフレーズを追加します。
2. epub変換時の順序エラーの修正。
3. バックアップ機能が自動的に動作するように修正しました。
   - 自動バックアップはwifiのみを使用するかどうかを選択できます。
   - 自動バックアップサイクルを設定できます。
   仕組み:
   - バックアップはモデル名でファイルが作成されます。
4. tts再生中スクロール後、外部音声による一時停止時に位置がスクロールしたところに行くバグ修正。
5. ビューアサイズの計算ロジックの修正。
   - 時々サイズ計算エラーで画面サイズが0で出て空画面が出る現象がありました。
   - パッチ後も空画面が出る場合は情報提供してください。
6. 細かいバグや誤字修正。
   - 機能追加しながら発見される細かいバグを修正しました。
7.ダブルタップ機能を使用するかどうかを判断することで、タッチイベントの遅延時間を最小限に抑えます。