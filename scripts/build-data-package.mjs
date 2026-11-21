import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDir, '..')
const packageDir = path.join(root, 'packages', 'myanmar-university-admission-data')
const distDir = path.join(packageDir, 'dist')

fs.rmSync(distDir, { recursive: true, force: true })
fs.mkdirSync(distDir, { recursive: true })

fs.copyFileSync(
  path.join(root, 'src', 'data', 'universities.js'),
  path.join(distDir, 'universities.js')
)

fs.cpSync(
  path.join(root, 'src', 'data', 'universities'),
  path.join(distDir, 'universities'),
  {
    recursive: true,
    filter: (source) => !source.endsWith('.md')
  }
)

fs.cpSync(
  path.join(root, 'src', 'data', 'admission-years'),
  path.join(distDir, 'admission-years'),
  {
    recursive: true,
    filter: (source) => !source.endsWith('.md') && !source.endsWith('TEMPLATE.js')
  }
)

const entryUrl = pathToFileURL(path.join(distDir, 'universities.js')).href
const { ACTIVE_YEAR, availableYears, getUniversities } = await import(entryUrl)

fs.mkdirSync(path.join(distDir, 'data'), { recursive: true })
fs.writeFileSync(
  path.join(distDir, 'universities.json'),
  JSON.stringify(getUniversities(ACTIVE_YEAR), null, 2),
  'utf8'
)

for (const year of availableYears) {
  fs.writeFileSync(
    path.join(distDir, 'data', `${year}.json`),
    JSON.stringify(getUniversities(year), null, 2),
    'utf8'
  )
}

console.log(`Built data package in ${distDir}`)
console.log(`Active year: ${ACTIVE_YEAR}`)
console.log(`Years: ${availableYears.join(', ')}`)
