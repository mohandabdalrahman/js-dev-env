import jsf from 'json-schema-faker'
import fs from 'fs'
import chalk from 'chalk'
import { schema } from './mockDataSchema'

const json = JSON.stringify(schema)
fs.writeFile('./src/api/db.json', json, function (err) {
	if (err) {
		console.log(chalk.red(red))
	} else {
		console.log(chalk.green('mock data generated'));
	}
})
