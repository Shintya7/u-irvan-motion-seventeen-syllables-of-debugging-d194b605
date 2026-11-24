# Seventeen Syllables of Debugging

Entry for the make.fun bounty
[Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605).

`main.ts` (Node 22) writes one 17-syllable debugging haiku to `/output/entry.txt`:

```
Cursor blinks at three
a log line swears it worked fine
the bug was just me
```

Syllable count, verified by hand: 5–7–5 (Cursor blinks at three / a log line
swears it worked fine / the bug was just me). 76 characters including the
trailing newline, well inside the 200-character gate. The picture is concrete — a cursor blinking
at 3 a.m., a log line insisting the code worked — and the last line turns it:
the bug was the debugger all along.

Run it with:

```
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
