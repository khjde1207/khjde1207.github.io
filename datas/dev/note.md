5.8.3 (2022 10 12)
1. 재생  정지, 일시정지, 타이머 버튼 터치 영역 크기 수정 
2. 내서재 드래그 삭제 기능을 하단쪽으로 이동 시켰습니다. 
3. 내서재 파일 선택기능 을 사용한 상태로 폴더생성시 선택된 파일을 폴더내부로 합치는 기능 추가. 
  - 눈에 띄게 하기 위해 파일 선택기능 사용시 폴더 생성 아이콘을 회전 시켰습니다. 
4. 기기에 따라. 풀스크린시 하단 메뉴 아이콘이 사라지지 않고 표현되던 현상 수정. 
5. 오픈소스 라이선스 내용 수정. 

6. OCR 이미지 오류 긴급 수정. 

7. 이어보기 (히스토리 연동) (베타) 기능을 추가 했습니다. 
  - 파일 클릭시 이어보기 를 누르고 연동할 히스토리를 클릭 하시면 이어보기가 가능합니다. 
  - 파일 내용이 일치 해야 합니다. 
  - A1 파일 히스토리를 A2 파일 에 연결 하려고 하면 최소한 A1 파일 의 일부 내용은 일치 해야 합니다. 그렇지 않은 경우 좌표 오차가 발생합니다. 
  예를 들면 A1 와 A2 의 내용은 같지만 A1파일 의 엔터는 한번 A2 의 엔터는 두세번 씩 나오는 경우 좌표 오차가 발생 할 수 있습니다. 

8. 1번 기능 추가 로 인해 내가본 권수(16 만자)를 표기 하지 않도록 하였습니다. 
  - A1 파일이 5권 분량이고 A2 파일이 10권 분량 이라고 가정하겠습니다. 
  - 파일은 두개지만 실제 분량은 10권입니다. 기존 계산 방식으로 자르게 되면 15 권 분량을 본것으로 집게 됩니다. 
  - 실제 본 권수의 신뢰성이 없어 지기 때문에 총 권수는 표기 하지 않습니다.
  - 사실 이 문제는 이전부터 인지 하고 있던 문제 이지만. 마땅히 해결책이 없어서 하루이틀 미루다가 이번에 완전 제거 하였습니다. 
9. 압축해제시 오픈텍뷰가 지원하는 파일만 압축 해제 하도록 수정 하였습니다. 
10. 내서재 (../) 상위 폴터는 드래그 안되도록 수정 

5.8.0 (2022 10 11)

1. 과거에 사용되었지만. 현재는 사용되지 않는 라이브러리 제거. 

2. 몇몇 라이브러리 최신 버전으로 업데이트 
  - 압축 관련 : 특정 파일 압축 해제시 비정상 종료되는 현상 수정 
  - 디코딩 관련 :  일부 euc-kr 디코딩 안되는 현상 수정. 


3. OCR 인공지능 베타5 -> 베타6 버전으로 업데이트  
  - Google ml kit 공식사이트 패치 내용 : 
  - 인식 결과에 기호 및 회전 정보를 제공하여 텍스트 인식 를 개선했습니다.

4. 배경 이미지 다운로더 추가 
  - 65 개 의 배경이미지를 인터넷을 통해 다운받을 수 있습니다. 
  - 설정 - 색상설정 - 배경이미지 다운로더 를 이용하여 폰트와 같이 쉽게 다운 받아 적용 할 수 있습니다. 

5. 내서재 : 
  1). 파일 드래그 하여 폴더로 합치는 기능 제거.
  2). 파일/폴더 드래그 는 이동/정렬 기능만 수행하도록 수정. 
  3). 내서재 우측 상단 네모 아이콘을 눌러 일괄삭제 및 파일 합치기 기능을 사용 할 수 있습니다. 
  4). 파일 삭제 를 버튼 형태도 추가. 
  5). 파일 / 폴더 이미지 다시 제작 . 
   - 이미지 사이즈를 통일 시켰습니다. 

  6). 내서재 의 모든 로직을 좀더 효율적으로 새로 작성하였습니다. 

  7). epub OCR 처리 방식을 이미지 압축파일형태로 변환하도록 변경 하였습니다. 
    - epub 내용이 길경우 시간이 너무 오래 걸리는 불편함이 있습니다. 
    - 바로 OCR 처리를 하는것 보다 이미지를 분할 압축을 하여 필요 할 때마다 변환 하도록 하였습니다. 

  8). PDF 변환시 쪽수 문자 제거 기능을 추가 했습니다. 
    - 맨 윗줄 과 맨 아래줄 에 현재 페이지 와 추출된 숫자 를 비교 하여 지우는 방식 입니다. 
    - 테스트 결과 PDF 에서 추출된 텍스트 중 쪽수문자가 윗쪽에 있는 경우도 있고. 하단에 있는 경우도 있습니다. 분명 뷰어로는 하단에 있는 쪽수 문자지만. 추출해 보면 쪽수가 상단 하단 랜덤하게 나오다 보니 맨윗줄 과 맨 아랫줄 전부 판단하여 제거 하도록 하였습니다. 

  9).  PDF 변환시 20 페이지 동안 아무런 문자가 추출되지 않을경우 에러메세지 출력하고 PDF 변환 을 중지 하도록 하였습니다. (PDF 내용이 이미지로만 되어 있는 경우 중지)

  10). PDF 와 EPUB 변환시 페이지 소모량이 기본보다 두배 증가 하였습니다. 
    - epub OCR 처리 시에는 OCR 과 같이 1:1 비율로 소비 합니다. 
  
  11). OCR 처리시 쪽수문자 제거 기능을 추가 하였습니다. 

  12). OCR 결과와 원본을 비교 해서 보다 보면 인식 오류나는 단어들에 패턴이 있습니다. 이부분을 정리해서 자동 보정 기능을 추가 했습니다.
    - OCR 처리 페이지 하단에 톱니바퀴를 눌러 상세 설정이 가능 합니다. 
    - 제보 받아 수정 하기 위해 제보 기능도 추가 하였습니다.
  

  13). 멀티 프로세스 기능을 구현 하였습니다. OCR, PDF, EPUB 작업을 멀티로 수행 할 수 있습니다. 
    - 동시 여러개가 작동 되긴 하지만. 걸리는 시간을 생각 해 보면 개별적으로 하는것과 큰 차이가 없습니다. 

  14). kss 개행 정리를 제거 하였습니다. 
    - 몇번 사용해본결과 일반 개행정리가 더 빠르고 더 보기 편한 것 같습니다. 

6. 히스토리 : 
  1) 기존 펼치는 형태의 리스트 를 제거 하였습니다. 
  2) 검색시 메모/이름/북마크 내용 을 동시에 검색 할 수 있습니다. 
  3) 히스토리을 달력/리스트 두가지 형태로 볼 수 있도록 수정 하였습니다. 
  4) 히스토리 스크롤시 제목/검색 바를 숨기도록 구현 하였습니다. 

7. 설정 : 
  1) 스크롤시 상단 버튼들이 접히도록 수정 하였습니다. 
  2) 기존 슬라이드 방식의 숫자 설정 버튼을 제거 하고 숫자 선택기로 전부 교체하였습니다. 
    - 스크롤시 실수로 눌러서 설정이 바뀌는 경우가 잦아 수정 하였습니다. 
  

---

5.8.0 (2022 10 11)
1. Although used in the past. Remove currently unused libraries.

2. Update some libraries to the latest version
  - Compression related: Fixed abnormal termination when uncompressing a specific file
  - Decoding related: Fixed some euc-kr decoding not working.


3. OCR AI Beta 5 -> Update to Beta 6 version
  - Google ml kit official site patch details:
  - Improved text recognition by providing symbol and rotation information in recognition results.

4. Add Background Image Downloader
  - 65 background images can be downloaded through the Internet.
  - Settings - Color settings - You can easily download and apply the same as fonts by using the background image downloader.

5. My Library:
  One). Removed the ability to drag files and merge them into a folder.
  2). File/folder drag is modified to perform only move/sort function.
  3). You can use the Batch Delete and File Merge functions by clicking the square icon in the upper right corner of My Library.
  4). Added a button to delete files.
  5). Re-image file/folder.
   - The image size has been unified.

  6). All the logic of my library has been rewritten more efficiently.

  7). The epub OCR processing method has been changed to be converted into an image compressed file format.
    - If the epub content is long, it is inconvenient that it takes too long.
    - Rather than directly performing OCR processing, the image is divided and compressed so that it can be converted whenever necessary.

  8). Added page number removal function when converting PDF.
    - This is a method of comparing and deleting the current page and the extracted number in the top and bottom lines.
    - As a result of the test, there are cases where the page number is at the top of the text extracted from the PDF. Sometimes it's at the bottom. Obviously, as a viewer, it's the page number text at the bottom. When I extract, the number of pages appears randomly at the top and bottom, so I decided to remove both the top and bottom rows.

  9). When converting PDF, if no characters are extracted for 20 pages, an error message is displayed and PDF conversion is stopped. (Stop if PDF content is image only)
    - We are testing the function to extract PDF as image and run OCR. Let's check it out and implement it if it works.

  10). PDF and EPUB conversion doubles the page consumption compared to the default.
    - When processing epub OCR, it is consumed in a 1:1 ratio like OCR.
  
  11). Added page number removal function during OCR processing.

  12). If you compare the OCR result with the original, there is a pattern in the words with a recognition error. We have added an auto-correction function by organizing this part.
    - You can set detailed settings by pressing the gear at the bottom of the OCR processing page.
    - A report function has been added to receive and correct the report.
  

  13). Implemented multi-process function. OCR, PDF, EPUB can be multi-tasked.
    - Although several works at the same time. Considering the time it takes, there is not much difference from doing it individually.

  14). Removed kss newline cleanup.
    - As a result of using it a few times, the general new stroke arrangement seems to be faster and easier to see.

6. History:
  1) Removed the existing expandable list.
  2) When searching, you can search memo/name/bookmark contents at the same time.
  3) The history has been modified so that it can be viewed in two forms: calendar/list.
  4) It has been implemented to hide the title/search bar when scrolling the history.

7. Settings: Modified so that the top buttons are folded when scrolling.