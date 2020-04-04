# Scripts

These scripts are intended for use for updating the underlying data.

They work by:
1. Loading each worksheet into memory (one at a time)
2. Translating them into standard JSON notation
3. Saving the new files to the `data` directory in the root of this project.

## Running The Scripts
### Prerequisites
1. All dependencies are installed for the root project
```shell
$ npm install
# or $ yarn install
```
2. Compile the scripts
```shell
$ npm run build:scripts
# or $ yarn build:scripts
```
3. Copy the data (excel spreadsheets) into `data/localData`.
This should be empty other than the new files that are added.
These new files should _not_ be committed to the repository.

As an example, the project directory tree should look like this at this point:

```shell
.
├── README.md
├── data
│   └── localData
│       ├── covid_response_top100.xlsx
│       └── panel_2019.xlsx
...
```

### "Pressing Play"

With the Prerequisites out of the way, we can now read in the local data and write it to JSON.

These JSON objects will be consumed by our front-end to render the data.

To convert the excel files in `data/localData` to JSON, run the npm script:
```shell
$ npm run load:data
# or $ yarn load:data
```

## Wrapping Up

Once the local data has been updated, in order for it to appear on the site, we need to trigger a redeploy of the website.

Zeit will handle this on any change to the master branch, so all that's necessary at this point is to commit the updated data.