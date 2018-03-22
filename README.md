## Next steps

we want to
```
facster deploy
```

should do the following
 - [ ] check the the repo name is `hire-me`
  * Run `git remote -v` in the terminal for some ideas...
  * We can do a nasty hack
 - [ ] Look for a `cv.json` file in the root and load it (maybe `fs / require`?)
 - [ ] pass it though the validator in facster-utils: https://github.com/des-des/facster-utils/blob/master/example/index.js#L53
   * you can use `npm link` to test locally I think: https://docs.npmjs.com/cli/link
 - [ ] Accept some css and js file (maybe  pass in a file path)
   * not important, choose some sensible defaults
 - [ ] deploy a static site to gh pages (similar to here): https://github.com/gazaskygeeks/blue-vision/blob/master/deploy.sh


## Fun (AKA stretch goals)
__We want to help candidates!__
  * Super informative errors
  * How else can we help facsters interact with gh! 
