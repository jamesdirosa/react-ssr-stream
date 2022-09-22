# React 18 Demo

Just a demo of some react 18 stuff.

## Get it running

`npm i`
`npm start`

## New APIs

### useTransition

[docs](https://reactjs.org/docs/hooks-reference.html#usetransition)

```jsx
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      submitForm(payload);
    });
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
```

### useDeferredValue

[docs](https://reactjs.org/docs/hooks-reference.html#usedeferredvalue)

```jsx
function Typeahead() {
  const query = useSearchQuery("");
  const deferredQuery = useDeferredValue(query);

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  const suggestions = useMemo(
    () => <SearchSuggestions query={deferredQuery} />,
    [deferredQuery]
  );

  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </>
  );
}
```
