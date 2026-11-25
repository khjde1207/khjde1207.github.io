# All UI Kit Theme Generation Rules

이 문서는 GPT, Gemini 등의 생성형 AI와 일반 사용자가 `all_ui_kit` 호환 테마 ZIP을 제작하기 위한 규칙이다.

## 1. 결과물

테마 하나는 아래 구조의 ZIP 파일 하나로 만든다.

```text
theme.zip
├── manifest.json
├── theme.json
└── images/
    ├── background.webp
    ├── texture.webp
    ├── surface_texture.webp
    ├── button_texture.webp
    ├── tile_texture.webp
    ├── navigation_texture.webp
    ├── item_loading.webp
    ├── image_1.webp          # 선택
    └── image_2.webp          # 선택
    └── image_3.webp          # 선택
    └── image_4.webp          # 선택
```

ZIP을 열었을 때 `manifest.json`이 바로 보여야 한다. 테마 이름으로 된 상위 폴더를 추가하지 않는다.

## 2. 공통 규칙

- 모든 파일과 폴더 이름은 영문 소문자 `snake_case`를 사용한다.
- 이미지 크기와 파일 형식은 이 문서의 규격을 정확히 따른다.
- 색 공간은 sRGB를 사용한다.
- 버튼, 패널, 타일 이미지에는 글자나 기능 아이콘을 넣지 않는다.
- 아이콘은 앱에서 Material Icons를 사용하므로 테마 이미지에 포함하지 않는다.
- UI 이미지는 Flutter 기본 위젯 위에 겹쳐 사용하는 배경과 질감으로 제작한다.
- 중요한 장식은 늘어나거나 잘리는 영역에 배치하지 않는다.
- GIF, 애니메이션 WebP, SVG는 사용하지 않는다.
- 이미지에 저작권이 있는 로고, 캐릭터, 상표를 넣지 않는다.

## 3. 이미지 규격

모든 UI 에셋은 3x 배율을 기준으로 제작한다.

| 파일 | 크기 | 형식 | 용도 |
|---|---:|---|---|
| `background.webp` | 1440×2560 | WebP | 앱 전체 배경 |
| `texture.webp` | 768×768 | WebP (품질 90) | 여러 위젯에 공통으로 적용할 반복 질감 |
| `surface_texture.webp` | 480×288 | 투명 무손실 WebP | Card, Dialog, Picker 등의 표면 |
| `button_texture.webp` | 288×144 | 투명 무손실 WebP | ElevatedButton 등의 표면 |
| `tile_texture.webp` | 360×216 | 투명 무손실 WebP | ListTile과 GridItem의 표면 |
| `navigation_texture.webp` | 360×240 | 투명 무손실 WebP | 하단 내비게이션의 표면 |
| `item_loading.webp` | 360×540 | WebP (품질 90) | 목록 썸네일 로딩 placeholder |
| `image_1.webp` | 432×432 | 투명 무손실 WebP | 첫 번째 대표 캐릭터·장식 이미지 (선택) |
| `image_2.webp` | 432×432 | 투명 무손실 WebP | 두 번째 대표 캐릭터·장식 이미지 (선택) |
| `image_3.webp` | 432×432 | 투명 무손실 WebP | 하단에 접지된 캐릭터·사물 장식 이미지 (선택) |
| `image_4.webp` | 1080×360 | WebP (품질 90) | ListItem·뷰어 하단·탭 영역용 가로 배경 이미지 (선택) |

### background.webp

- 세로 9:16 화면을 기준으로 제작한다.
- 앱에서는 `BoxFit.cover`로 표시하므로 기기에 따라 외곽이 잘릴 수 있다.
- 중요한 장식은 이미지 중앙 60% 안에 배치한다.
- 버튼, 글자, 메뉴처럼 고정 위치가 필요한 UI를 배경에 그리지 않는다.
- 외곽은 잘려도 문제가 없는 색상, 무늬, 질감으로 채운다.

### texture.webp

- 상하좌우로 반복해도 경계가 보이지 않는 seamless texture로 만든다.
- 아이콘과 글자를 가리지 않도록 대비를 약하게 한다.
- 앱에서 투명도를 조절할 수 있으므로 강한 명암과 큰 장식은 피한다.

### surface, button, tile, navigation

- 크기가 달라져도 모서리와 테두리가 유지되도록 center-slice 방식으로 만든다.
- 모서리 장식은 고정 영역 안에만 배치한다.
- 중앙의 늘어나는 영역에는 글자, 원형 문양, 인물 등 형태가 변하면 안 되는 장식을 넣지 않는다.
- 컴포넌트 바깥은 완전히 투명해야 한다.
- 그림자는 이미지 경계에서 잘리지 않도록 충분한 투명 여백을 둔다.

### Slider

- Slider는 별도 이미지 에셋을 사용하지 않는다.
- 진행된 영역은 `colors.sliderFill`, 진행되지 않은 영역은
  `colors.sliderTrack`의 단색으로 표시한다.
- 모서리와 외곽선은 앱에서 `radius.button`과 `colors.outline`로 그린다.

### item_loading.webp

- 책 표지 등에 사용할 수 있도록 2:3 비율로 만든다.
- 특정 책 제목, 작가, 로고, 문자를 넣지 않는다.
- 이미지 중앙에는 Flutter 로딩 인디케이터가 올라갈 수 있도록 여백을 둔다.

### image_1.webp, image_2.webp

대표 이미지는 테마의 분위기를 보여주는 선택적 장식 에셋이다. 단독 이미지,
로딩 placeholder, Card, ListItem 등의 배경 장식으로 사용된다. 하나만 제공하거나
두 개 모두 제공할 수 있으며, 제공하지 않아도 테마는 유효하다.

- 캔버스 크기는 두 파일 모두 정확히 `432×432px`로 만든다.
- 배경은 완전히 투명해야 하며 네 모서리 alpha 값은 `0`이어야 한다.
- 캐릭터나 사물의 실제 alpha 영역을 기준으로 긴 변을 정확히 `360px`에 맞춘다.
- 실제 alpha 영역을 캔버스 정중앙에 배치한다. 기본 투명 여백은 상하좌우 각각
  최소 `36px`이다.
- 두 이미지의 캐릭터가 차지하는 시각적 크기를 비슷하게 맞춘다. 단순히 캔버스
  크기만 같게 만들고 한 이미지를 과도하게 작게 배치하지 않는다.
- 배경 제거 후 남은 점, 노이즈, 그림자 픽셀이 alpha 영역의 경계를 늘리지 않는지
  확인한다. 크기 정규화에는 가장 큰 실제 캐릭터 영역을 사용한다.
- 작은 ListItem에서도 식별되도록 실루엣을 단순하고 명확하게 만든다.
- 중요한 부분은 이미지 바깥으로 잘리지 않아야 한다.
- 글자, 숫자, 앱 기능 아이콘, 브랜드 로고, 상표를 넣지 않는다.
- 기존 애니메이션·게임·만화 캐릭터를 모사하지 않고 독창적인 캐릭터나 사물을
  사용한다.
- 테마의 `primary`, `accent`, `surface`, `textPrimary` 색상과 어울리게 제작한다.
- 앱은 `UiThemeImageOption.size`와 `scale`로 표시 크기를 조절하고,
  `alignment`에 `Alignment` 또는 `FractionalOffset(0~1)`을 사용해 위치를
  지정한다. 에셋 자체에 위치별 추가 여백을 넣지 않는다.

권장 정규화 과정은 다음과 같다.

```text
1. 배경을 투명하게 제거한다.
2. 가장 큰 실제 캐릭터 alpha 영역의 경계를 구한다.
3. 해당 영역의 긴 변을 360px로 비율 유지 리사이즈한다.
4. 432×432 투명 캔버스 중앙에 배치한다.
5. 네 모서리 투명도와 최종 alpha 영역 크기를 다시 검사한다.
```

### image_3.webp

`image_3.webp`는 ListItem 안쪽 하단에 걸쳐 보이는 선택적 장식 에셋이다.
캐릭터뿐 아니라 책, 화분, 커피잔, 배, 건물 등 테마를 나타내는 사물을 사용할 수
있다.

- 캔버스는 정확히 `432×432px`이며 배경과 네 모서리는 완전히 투명해야 한다.
- 실제 alpha 영역의 긴 변은 최대 `360px`로 하고 좌우와 상단에 최소 `36px`
  여백을 둔다.
- 실제 alpha 영역의 최하단은 캔버스 아래에서 `0~12px` 안에 배치해 바닥에
  접지된 것처럼 만든다. 그림자도 이 범위 안에서 잘리지 않아야 한다.
- 앱은 `UiThemeImageOption.alignment`에 `FractionalOffset(0~1)`을 전달해 세밀한
  위치를 정할 수 있으므로 에셋에서 좌우 방향을 고정하지 않는다.
- 위젯 바깥으로 돌출되는 구도, 글자, 숫자, 기능 아이콘, 배지, 테두리는 넣지
  않는다.
- 작은 ListItem에서도 식별되도록 실루엣과 세부 묘사를 단순하고 명확하게 만든다.

### image_4.webp

`image_4.webp`는 ListItem, 뷰어 하단, 탭 바 아래 등에 까는 선택적 장면형 배경
에셋이다. 로딩 상태나 진행 UI 자체를 표현하는 이미지가 아니다.

- 캔버스는 정확히 `1080×360px`의 `3:1` 비율로 만든다.
- 한 장의 장면형 배경으로 제작하며 반복 타일로 만들지 않는다.
- 앱에서 `BoxFit.cover`로 자를 수 있으므로 중요한 장식은 중앙 70%와 하단에
  배치하고 좌우 15%는 잘려도 문제가 없게 만든다.
- 글자와 컨트롤이 올라갈 중앙 영역은 대비와 세부 묘사를 낮춰 비워 둔다.
- 제목, 로딩 문구, 진행 막대, 퍼센트, 버튼, 배지, 테두리, 둥근 모서리를 이미지에
  직접 넣지 않는다.
- 테두리와 모서리 자르기, 전경 콘텐츠, 투명도는 사용하는 위젯에서 처리한다.
- 배경으로 사용할 때는 `UiThemeImageOption(fill: true, fit: BoxFit.cover)`로 부모
  영역을 채운다. 이때 `size`와 `scale`은 사용하지 않는다.

## 4. Center-slice 규격

배열 순서는 Flutter `Rect.fromLTRB`와 동일한 `[left, top, right, bottom]`이다.
좌표는 원본 이미지의 픽셀 좌표로 기록한다. 렌더러가 `manifest.json`의 `scale` 값으로 나누어 Flutter 논리 좌표로 변환한다.

```json
{
  "centerSlice": {
    "surface": [48, 48, 432, 240],
    "button": [36, 36, 252, 108],
    "tile": [36, 36, 324, 180],
    "navigation": [36, 36, 324, 204]
  }
}
```

center-slice 안쪽 영역은 가로와 세로로 늘어날 수 있다. 테두리와 모서리는 center-slice 바깥에 둔다.

## 5. manifest.json

```json
{
  "id": "metal",
  "name": "Metal",
  "version": 1,
  "schemaVersion": 1,
  "scale": 3
}
```

| 필드 | 규칙 |
|---|---|
| `id` | 영문 소문자, 숫자, `_`만 사용하며 테마를 고유하게 식별한다. |
| `name` | 사용자에게 표시할 테마 이름이다. |
| `version` | 테마 내용이 변경될 때 증가시키는 양의 정수다. |
| `schemaVersion` | 이 문서의 테마 규격 버전이며 현재 값은 `1`이다. |
| `scale` | 이미지 배율이며 현재 값은 `3`이다. |

## 6. theme.json

```json
{
  "colors": {
    "primary": "#278DFF",
    "accent": "#3B9BE8",
    "background": "#111418",
    "surface": "#24282D",
    "textPrimary": "#F4F6F8",
    "textSecondary": "#AAB0B7",
    "disabled": "#697078",
    "danger": "#FF4D6D",
    "success": "#4FAE78",
    "sliderTrack": "#38404A",
    "sliderFill": "#278DFF",
    "outline": "#80959DA6"
  },
  "opacity": {
    "background": 1.0,
    "texture": 0.2,
    "surface": 1.0,
    "disabled": 0.45
  },
  "radius": {
    "surface": 16.0,
    "button": 12.0,
    "tile": 12.0
  },
  "assets": {
    "background": "images/background.webp",
    "texture": "images/texture.webp",
    "surfaceTexture": "images/surface_texture.webp",
    "buttonTexture": "images/button_texture.webp",
    "tileTexture": "images/tile_texture.webp",
    "navigationTexture": "images/navigation_texture.webp",
    "itemLoading": "images/item_loading.webp",
    "image1": "images/image_1.webp",
    "image2": "images/image_2.webp",
    "image3": "images/image_3.webp",
    "image4": "images/image_4.webp"
  },
  "centerSlice": {
    "surface": [48, 48, 432, 240],
    "button": [36, 36, 252, 108],
    "tile": [36, 36, 324, 180],
    "navigation": [36, 36, 324, 204]
  }
}
```

`image1`~`image4`는 선택적인 장식 이미지 슬롯이다.

- `image_1.webp`를 제공하면 `assets.image1`도 반드시 선언한다.
- `image_2.webp`를 제공하면 `assets.image2`도 반드시 선언한다.
- JSON에 키를 선언했다면 ZIP 안에 해당 파일이 반드시 있어야 한다. 파일이 없으면
  테마 전체가 로드되지 않는다.
- 이미지를 제공하지 않을 때는 해당 JSON 키와 파일을 모두 생략한다. 앱에서는 그
  슬롯을 표시하지 않는다.
- 경로는 반드시 `images/`로 시작해야 한다.

### 색상 표기

- 색상은 `#RRGGBB` 또는 `#AARRGGBB` 형식만 사용한다.
- 글자를 읽을 수 있도록 배경과 `textPrimary` 사이에 충분한 대비를 둔다.
- `disabled`는 비활성 UI에 사용한다.
- `danger`는 삭제와 오류 상태에 사용한다.
- `success`는 저장, 완료, 적용 등 성공 상태에 사용한다.
- `outline`은 Card와 Slider의 경계선에 사용하며 `#AARRGGBB`로 투명도를 조절할 수 있다.

### 투명도 표기

- 투명도 값은 `0.0` 이상 `1.0` 이하의 숫자다.
- 이미지 자체의 alpha와 `opacity` 값이 함께 적용될 수 있다.

## 7. Flutter 위젯 적용 원칙

테마는 Flutter 위젯의 기능을 교체하지 않고 시각적인 레이어만 추가한다.

| All UI Kit | Flutter 위젯 |
|---|---|
| `UiElevatedButton` | `ElevatedButton` |
| `UiFloatingActionButton` | `FloatingActionButton` |
| `UiAppBar` | `AppBar` |
| `UiIconButton` | `IconButton` |
| `UiRadio` | `Radio` |
| `UiCheckbox` | `Checkbox` |
| `UiSwitch` | `Switch` |
| `UiSlider` | `Slider` |
| `UiProgressIndicator` | `LinearProgressIndicator` |
| `UiListTile` | `ListTile` |
| `UiBottomNavigationBar` | `BottomNavigationBar` |

아이콘은 Material Icons를 사용하고 테마 색상, texture, glow 등으로 분위기를 표현한다.

## 8. AI 생성 요청문 예시

아래 내용을 복사하고 원하는 테마 설명을 마지막에 추가한다.

```text
첨부한 "All UI Kit Theme Generation Rules"를 정확히 준수하여 Flutter용 UI 테마 에셋을 제작해줘.

- 모든 파일을 지정된 크기와 형식으로 생성할 것
- 버튼과 패널 이미지에 글자와 기능 아이콘을 넣지 말 것
- 투명 UI WebP는 무손실로 압축하고 바깥 영역을 완전히 투명하게 만들 것
- center-slice로 늘어나는 중앙 영역에 형태가 변하면 안 되는 장식을 넣지 말 것
- texture.webp는 seamless texture로 만들 것
- image_1.webp와 image_2.webp는 필요하면 최대 2개까지 만들 것
- 대표 이미지는 432×432 투명 WebP로 만들고 실제 캐릭터의 긴 변을 360px로 맞출 것
- 대표 이미지는 캔버스 중앙에 배치하고 네 방향에 최소 36px 투명 여백을 둘 것
- 대표 이미지의 배경 제거 노이즈를 삭제하고 두 이미지의 시각적 크기를 맞출 것
- 기존 캐릭터, 로고, 상표를 모사하지 않고 독창적인 소재를 사용할 것
- manifest.json과 theme.json도 함께 작성할 것
- 최종 결과는 규격에 맞는 폴더 구조로 정리할 것

테마 콘셉트: 여기에 원하는 분위기, 재질, 색상, 시대, 장식 스타일을 작성한다.
```

## 9. 최종 검사 목록

- [ ] ZIP 최상단에 `manifest.json`과 `theme.json`이 있다.
- [ ] `images/` 안에 필수 WebP 이미지 9개가 있다.
- [ ] 장식 이미지를 사용한다면 `image_1.webp`~`image_4.webp`와 assets 키가 서로 일치한다.
- [ ] 대표 이미지 캔버스는 432×432이고 네 모서리가 완전히 투명하다.
- [ ] 대표 이미지의 실제 alpha 영역 긴 변은 360px이며 캔버스 중앙에 있다.
- [ ] 두 대표 이미지의 시각적 크기가 비슷하고 배경 제거 노이즈가 없다.
- [ ] `image_3.webp`의 실제 alpha 영역이 하단 0~12px 안에 접지되어 있다.
- [ ] `image_4.webp`는 1080×360이고 텍스트나 진행 UI가 포함되지 않는다.
- [ ] 모든 이미지의 파일명, 크기, 형식이 규격과 일치한다.
- [ ] 투명 WebP의 바깥 영역이 투명하다.
- [ ] `texture.webp`를 반복했을 때 경계가 보이지 않는다.
- [ ] UI 이미지에 글자와 기능 아이콘이 없다.
- [ ] JSON의 모든 이미지 경로가 ZIP 안의 실제 파일과 일치한다.
- [ ] 장식 이미지 파일과 `assets.image1`~`assets.image4` 키가 서로 일치한다.
- [ ] 모든 색상과 투명도 값이 올바른 형식이다.
- [ ] center-slice 좌표가 이미지 범위 안에 있다.
- [ ] 저작권이 있는 로고, 캐릭터, 상표가 없다.
