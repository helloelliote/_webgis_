# `/src` 폴더 구조 개요

---

```
src/
├── components/
│   ├── Component1/
│   │   ├── index.tsx
│   │   ├── Component1.spec.tsx
│   │   ├── Component1.styles.ts
│   │   └── ...
│   ├── Component2/
│   │   ├── index.tsx
│   │   ├── Component2.spec.tsx
│   │   ├── Component2.styles.ts
│   │   └── ...
│   └── ...
├── containers/
│   ├── Container1/
│   │   ├── index.tsx
│   │   ├── Container1.spec.tsx
│   │   ├── Container1.styles.ts
│   │   └── ...
│   ├── Container2/
│   │   ├── index.tsx
│   │   ├── Container2.spec.tsx
│   │   ├── Container2.styles.ts
│   │   └── ...
│   └── ...
├── hooks/
│   ├── useHook1.ts
│   ├── useHook2.ts
│   └── ...
├── utils/
│   ├── util1.ts
│   ├── util2.ts
│   └── ...
├── services/
│   ├── apiService.ts
│   ├── authService.ts
│   └── ...
├── store/
│   ├── reducers/
│   ├── actions/
│   ├── selectors/
│   ├── types.ts
│   ├── store.ts
│   └── ...
├── types/
│   ├── auth.types.ts
│   ├── api.types.ts
│   └── ...
├── App.tsx
├── index.tsx
└── ...
```

`components/`:

이 폴더는 애플리케이션의 재사용 가능한 UI 컴포넌트를 모두 포함합니다. 각 컴포넌트에는 컴포넌트 코드(`index.tsx`), 컴포넌트 스타일(`Component1.styles.ts`) 및 컴포넌트 테스트(`Component1.spec.tsx`)가 포함된 별도의 폴더가 있습니다.

`containers/`:

이 폴더는 재사용이 불가능하고 특정 페이지 또는 기능에 대한 것인 모든 컴포넌트를 포함합니다. 이 폴더 내의 폴더 구조는 `components` 폴더와 동일합니다.

`hooks/`:

이 폴더는 애플리케이션에서 사용되는 모든 커스텀 훅을 포함합니다. 훅은 반복적인 로직을 추상화하고 컴포넌트간에 공유할 수 있습니다.

`utils/`:

이 폴더는 애플리케이션에서 사용되는 모든 유틸리티 함수를 포함합니다.

`services/`:

이 폴더는 API, 데이터베이스 또는 인증 서비스와 상호 작용하는 모든 코드를 포함합니다.

`store/`:

이 폴더에는 애플리케이션의 모든 Redux 코드가 포함됩니다. 이는 리듀서(reducers), 액션(actions), 셀렉터(selectors), 타입(types) 및 스토어(store) 자체를 포함합니다.

`types/`:

이 폴더는 애플리케이션에서 사용되는 모든 타입 선언을 포함합니다.

`App.tsx`:

이것은 애플리케이션의 모든 다른 컴포넌트와 컨테이너를 렌더링하는 메인 컴포넌트입니다.

`index.tsx`:

이것은 애플리케이션의 `App` 컴포넌트를 DOM에 마운트하는 진입점입니다.
