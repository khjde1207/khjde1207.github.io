6.2.9 (2022 12 29)
- 페이지 이동 로직 수정. 
  * 마지막 페이지 에서 다음 페이지로 이동할경우 이전 페이지 로 이동하던 버그 수정. 

- 페이지가 처음이나 마지막 으로 갔을때 이전/다음 파일 을 열도록 기능을 추가 하였습니다. 
  * 이전 다음 파일의 기준은 내서재 에 있는 파일 정렬기준을 따르게 됩니다. 
  * 어플이 백그라운드 에서 작동시에는 동작하지만 종료된 상태에서는 다음 파일을 열 수 없습니다. 
  * 설정에서 사용 설정을 해주시기 바랍니다. 

- 텍스트 일괄 수정시 수정 되는 파일이 현재 보고 있는 파일인 경우 수정후 수정된 파일을 다시 열도록 수정 하였습니다. 

- 파일 이름 변경시 히스토리 이름이 변경 안되던 버그를 수정 하였습니다.
- 파일 이름 변경시 현재 열려있는 파일이면 열려있는 정보의 이름도 같이 변경 하도록 수정 하였습니다.
- 텍스트 일괄수정 -> 텍스트 입력 필드에 편집 완료 버튼을 추가 했습니다. 


---

6.2.9 (2022 12 29)
- Modified page movement logic.
   * Fixed a bug that moved to the previous page when moving from the last page to the next page.

- Added a function to open the previous/next file when the page is first or last.
   * Previous Next File standards follow the file sorting standards in My Library.
   * It works when the application is running in the background, but the following files cannot be opened when it is closed.
   * Please enable it in the settings.

- When editing text in bulk, if the file being edited is the file you are currently viewing, it has been modified to reopen the modified file after editing.

- Fixed a bug where the history name did not change when changing the file name.
- When changing the file name, if the file is currently open, the name of the open information is also modified.
- Batch edit text -> Added edit completion button to text input field.

---

6.2.9 (2022 12 29)
- ページ移動ロジックの修正。
   *最後のページから次のページに移動した場合、前のページに移動したバグを修正しました。

- ページが最初または最後に行ったときに前/次のファイルを開く機能を追加しました。
   *前の次のファイルの基準は、文書内のファイルソート基準に従います。
   *アプリがバックグラウンドで動作しているときは動作しますが、終了した状態では次のファイルを開くことができません。
   *設定で使用設定をしてください。

- テキスト一括修正時に修正されるファイルが現在見ているファイルの場合、修正後に修正されたファイルを再度開くように修正しました。

- ファイル名変更時に履歴名が変更できなかったバグを修正しました。
- ファイル名変更時に現在開いているファイルであれば、開いている情報の名前も同様に変更するように修正しました。
- テキスト一括修正 -> テキスト入力フィールドに編集完了ボタンを追加しました。