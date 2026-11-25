# TTReader TTS 필터 생성 규칙

이 문서를 받은 AI는 사용자의 발음·치환 요청을 TTReader에서 가져올 수 있는 필터 묶음으로 변환한다. 예를 들어 “kg는 킬로그람으로, mg는 밀리 그람으로 읽어 줘”라는 요청에는 필터 두 개를 담는다.

## 1. 필터 데이터

최상위 JSON은 `{"t":"f","d":[...]}` 형식이다. `d`에는 적용 순서대로 필터 객체를 넣는다.

| 키 | 형식 | 값 |
|---|---|---|
| `n` | 문자열 | 앱에 표시할 짧은 필터 이름 |
| `e` | 불리언 | 일반 문자열 치환이면 `false`, 정규식이면 `true` |
| `f` | 문자열 | 검색할 문자열 또는 Dart 정규식. 빈 값은 사용하지 않는다. |
| `t` | 문자열 | 읽을 문자열. 삭제 요청이면 빈 문자열을 사용한다. |
| `g` | 문자열 | 사용자가 지정한 태그. 태그 요청이 없으면 `""`를 사용한다. |

- 사용자가 요청한 발음과 띄어쓰기를 그대로 사용한다.
- 부분 문자열을 모두 바꿔도 되는 경우에는 일반 치환을 사용한다. 단위나 독립된 단어처럼 앞뒤 문맥이 중요할 때는 정규식을 사용한다.
- 정규식 치환 문자열에서 `$1`, `$2`는 캡처 그룹을 참조한다. 정규식의 역슬래시는 JSON 직렬화 도구로 이스케이프한다.
- 필터는 배열 순서대로 적용된다. 앞 필터의 결과가 다음 필터의 검색 조건에 걸리는지 확인한다.
- 앱에서 가져온 필터는 활성화된다. 검색 패턴, 치환 문자열, 정규식 여부가 모두 같은 기존 필터는 중복 추가되지 않는다.

## 2. URL 생성과 응답

1. 필터 데이터를 JSON으로 직렬화한다.
2. JSON을 UTF-8 바이트로 변환한 뒤 표준 Base64로 인코딩한다.
3. Base64 전체를 `args` 쿼리 값으로 한 번 URL 인코딩한다. `+`, `/`, `=`는 각각 `%2B`, `%2F`, `%3D`가 된다.
4. `https://khjde1207.github.io/deeplink/?args=` 뒤에 인코딩한 값을 붙인다.
5. 생성한 전체 URL을 마크다운 링크로 반환한다. 예를 들어 링크 제목은 **TTReader에 TTS 필터 추가**로 표시하고, 아래에 적용되는 발음을 한 줄로 적는다.

Base64 값은 실행 가능한 도구로 계산한다. 반환 전 URL의 `args`를 역으로 디코딩해 원래 JSON과 같은지 확인한다.

도구를 사용할 수 없거나 사용자가 JSON을 요청하면, 필터 JSON 전체를 복사할 수 있는 `json` 코드 블록 한 개로 반환한다. **TTReader → TTS 필터 → 필터 추가 → JSON**에서 붙여넣고 **저장**을 누르도록 안내한다.

GitHub Pages는 앱을 여는 진입점이다. 앱으로 전달되는 주소는 `opentextviewer://data?args=…`이며, 필터 이름과 태그는 별도 쿼리 파라미터 없이 `args` 안에 들어간다. 요청마다 파일을 업로드할 필요는 없다.

## 3. 생성 예시

`2kg`, `30 mg`처럼 숫자가 붙은 단위도 치환한다. `package`, `img`처럼 영문 단어 안에 포함된 문자열은 유지한다.

   ```python
   import base64
   import json
   from urllib.parse import parse_qs, urlencode, urlsplit

   payload = {
       "t": "f",
       "d": [
           {"n": "kg", "e": True, "f": r"(?<![A-Za-z_])kg(?![A-Za-z_0-9])",
            "t": "킬로그람", "g": ""},
           {"n": "mg", "e": True, "f": r"(?<![A-Za-z_])mg(?![A-Za-z_0-9])",
            "t": "밀리 그람", "g": ""},
       ],
   }
   filter_json = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
   args = base64.b64encode(filter_json.encode("utf-8")).decode("ascii")
   url = "https://khjde1207.github.io/deeplink/?" + urlencode({"args": args})

   decoded_args = parse_qs(urlsplit(url).query)["args"][0]
   assert json.loads(base64.b64decode(decoded_args, validate=True)) == payload
   print(url)
   ```
