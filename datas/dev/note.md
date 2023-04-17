7.1.1 (2022 04 17)

```
- 파일을 상위폴더로 이동 시킬 수 없던 버그 수정.
- 설정 메뉴 투명도 조절
- 두페이지 보기 에서 끝까지 도달 했을 경우 우측 페이지에 이전 내용이 보이던 버그 수정.
- 한페이지 / 두페이지 보기 전환이 제대로 안되던 버그 수정.
- 화면 방향 고정 안되는 버그 수정.
```

---

7.0.9 (2022 04 15)

```
- 언어 선택 옵션을 추가 하였습니다.
```

---

7.0.6 (2022 04 14)

```
- 내서재에서 상위 폴더를 지울 수 있던 문제 긴급 수정
- 전체화면 이후 내서재나 설정으로 이동시 하단 메뉴가 사라져서 뷰어로 복귀 할수 없던 버그 수정.
```

---

7.0.4 (2022 04 13)

```
- 디렉터리 이동시 이동된 파일이 남아 있는 버그 수정 하였습니다.
- 편집시 에러나던 버그 수정 하였습니다.
- 특수기능 사용시 알림창에 진행상황 표시하는 기능을 추가 하였습니다.
```

---

7.0.2 (2022 04 12)

```
- 필터 사용여부 체크 안되는 버그 긴급 수정.
- 볼륨조절 안되는 버그 긴급 수정
```

---

7.0.1 (2022 04 12)

업데이트 내용 :

- 데이터베이스 를 변경 하였습니다.

```
      * 변경 사항으로 인해 첫실행시 기존 데이터 베이스에서 새로운 데이터베이스 이동하는 로직이 실행 됩니다.
      * 이부분에서 사용자에 따라 실행에 오래 걸릴 수 있습니다.
      * 최대한 모든데이터를 이관하지만 간혹 안되는 경우가 있습니다.
      * 데이터 복구에 실패할 경우 드라이브 복구를 통해 복구 하시기 바랍니다.
```

- 전체 로직을 다시 작성 하였습니다.

```
      * 최근 너무 많은 기능이 추가 되어 서로 영향받다 보니 제대로 동작 하지 않는 부분이 존재 하였습니다.
      * 거의 모든 로직을 재작성 하고 디테일 하게 하나하나 체크 하였습니다.
      * 실수로 누락된 부분도 있을 수 있습니다. 혹여나 동작 안하는 기능이 있다면 제보 부탁드립니다.
```

- 전체적으로 속도 를 향상 시켰습니다.

- 두가지 테마를 추가 하였습니다.

- 파일 분할 로직을 수정 하였습니다.

```
      * 파일 분할시 용량단위로 자르도록 수정 하여 용량이 큰 파일도 자를수 있도록 수정 하였습니다.
```

- 전체화면시 상하단 접히는 로직을 수정하여 조금더 부드럽게 보이도록 하였습니다.

- 편집 기능을 수정 하였습니다.

```
      * 저장 속도 개선 / 여러 버그를 수정하였습니다.
      * 저장시 백업파일이 생성되도록 하였습니다.
```

- TTS 추출 기능을 수정 하였습니다.

```
      * 정확히 추출되는 파일 갯수를 표시 하도록 하였습니다.
      * 로직을 최적화 하였습니다.
```

- 정규식 작성에 도움이 되는 단축버튼 기능을 추가 하였습니다.

- epub 페이지 소모, 출석 체크 페이지 충전량을 변경 하였습니다.

- 색상 설정에 필터 기능을 추가 하였습니다.

- 히스토리 읽은 권수를 현재 조회된 기간을 기준으로 보여지도록 수정 하였습니다.

---

7.1.1 (2022 04 17)

```
- Fixed a bug where files could not be moved to the upper folder.
- Adjust the transparency of the setting menu
- Fixed a bug where the previous content was displayed on the right page when reaching the end in the two-page view.
- Fixed a bug where switching between one-page / two-page view did not work properly.
-Fixed a bug where the screen orientation could not be fixed.
```

---

7.0.9 (15 Apr 2022)

```
- Added language selection option.
```

---

7.0.6 (14 Apr 2022)

```
- Urgent fix for deleting parent folders in My Library
- Fixed a bug that could not return to the viewer because the bottom menu disappeared when moving to My Library or Settings after full screen.
```

---

7.0.4 (13 Apr 2022)

```
- Fixed a bug where moved files remain when moving directories.
- Fixed a bug that caused an error during editing.
- Added a function to display the progress in the notification window when using special functions.
```

7.0.2 (2022 04 12)

```
- Urgent fix for a bug that can't check whether a filter is used or not.
- Urgent fix for volume control bug
```

7.0.1 (2022 04 12)

Update says:

- Changed the database.

```
       * Due to the changes, the logic of moving from the old database to the new database is executed at the first execution.
       * Depending on the user, this part may take a long time to run.
       * We transfer all data as much as possible, but there are cases where it is not possible.
       * If data recovery fails, please recover through drive recovery.
```

- Rewrote the entire logic.

```
       * Recently, too many features have been added, so there are parts that do not work properly because they are influenced by each other.
       * Almost all logic was rewritten and checked one by one in detail.
       * Some parts may be accidentally omitted. If there is a function that does not work, please report it.
```

- Improved overall speed.

- Added two themes.

- Modified the file splitting logic.

```
       * When dividing a file, it has been modified to cut by capacity unit so that even a large file can be cut.
```

- Modified the top and bottom folding logic in full screen to make it look a little smoother.

- The editing function has been modified.

```
       * Improved save speed / Fixed several bugs.
       * When saving, a backup file is created.
```

- Fixed the TTS extraction function.

```
       * The number of correctly extracted files is displayed.
       * Optimized the logic.
```

- A shortcut button function has been added to help you write regular expressions.

- Changed epub page consumption and attendance check page charging amount.

- A filter function has been added to the color settings.

- The number of books read in the history has been modified to be displayed based on the currently viewed period.

---

7.1.1 (2022 04 17)

```
- ファイルを親フォルダに移動できなかったバグ修正。
- 設定メニューの透明度調整
- 2ページ表示で最後まで到達した場合、右ページに以前の内容が見られたバグ修正。
- 1ページ/2ページの表示切り替えが正しくできなかったバグ修正。
- 画面方向に固定されていないバグ修正。
```

---

7.0.9 (2022 04 15)

```
- 言語選択オプションを追加しました。
```

---

7.0.6 (2022 04 14)

```
- 内書で上位フォルダを消去できる問題緊急修正
- 全体画面以降、内書財や設定に移動すると下段メニューが消えてビューアに復帰できなかったバグ修正。
```

---

7.0.4 (2022 04 13)

```
- ディレクトリ移動時に移動されたファイルが残っているバグを修正しました。
- 編集時にエラーになっていたバグを修正しました。
- 特殊機能使用時の通知ウィンドウに進行状況表示する機能を追加しました。
```

7.0.2 (2022 04 12)

```
- フィルタを使用するかどうかチェックしないバグ緊急修正。
- 音量調節できないバグ緊急修正
```

7.0.1 (2022 04 12)

アップデート内容:

- データベースを変更しました。

```
       *変更により、最初の実行時に既存のデータベースから新しいデータベースを移動するロジックが実行されます。
       *この部分では、ユーザーによっては実行に時間がかかる場合があります。
       * できるだけすべてのデータをエスカレートしますが、たまにならない場合があります。
       *データの回復に失敗した場合は、ドライブの回復を介して回復してください。
```

- ロジック全体を書き直しました。

```
       *最近、あまりにも多くの機能が追加され、互いに影響を受けてみると、正しく動作しない部分が存在しました。
       * ほぼすべてのロジックを再作成してディテールに一つ一つチェックしました。
       * 誤って欠落している部分もあります。 もし動作しない機能がある場合は情報提供をお願いします。
```

- 全体的にスピードを向上させました。

- 2 つのテーマを追加しました。

- ファイル分割ロジックを修正しました。

```
       ・ファイル分割時に容量単位で切り取るように修正し、容量の大きいファイルも切り取れるように修正しました。
```

- 全体画面の場合、上下に折るロジックを修正して、少し柔らかく見えるようにしました。

- 編集機能を修正しました。

```
       *保存速度改善/複数のバグを修正しました。
       *保存時にバックアップファイルが生成されるようにしました。
```

- TTS 抽出機能を修正しました。

```
       * 正確に抽出されるファイル数を表示するようにしました。
       *ロジックを最適化しました。
```

- 正規表現の作成に役立つ短縮ボタン機能を追加しました。

- epub ページ消費、出席チェックページの充電量を変更しました。

- カラー設定にフィルタ機能を追加しました。

- 履歴 読み取った巻数を現在照会されている期間を基準に見せるように修正しました。
