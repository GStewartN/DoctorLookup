## Planning

1. Configuration/Dependencies

  * npm
  * gulp
  * bower
  * bower-files
  * browser-sync
  * browserify
  * vinyl-source-stream
  * del
  * jshint
  * gulp-jshint
  * gulp-concat
  * gulp-uglify
  * gulp-util
  * jquery
  * bootstrap

2. Specs

| Behavior | Input | Output |
|----------|-------|--------|
| User visits landing page, types symptom into form | Severe cough | A list of nearby doctors, likely general practitioners, will display |

3. Integration

  * Create gulpfile - begin installing dependencies and writing tasks
  * Store API key int variable within .env file
  * Export API variable to doctorModule
  * Export doctorModule to interface module
  * Write basic html template in index file
  * Write doctorModule
  * Write interface module

4. UX/UI
 * Integrate bootstrap and possibly sass styling

5. Polish
 * Refactor code where possible
 * Remove all unnecessary comments, console logs, debuggers, etc...
 * Fix indentation and spacing, remove unnecessary whitespace
 * Polish README
