'use strict'

const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit()

const { event, payload } = tools.context

/*
if (event === 'push') {
  const octokit = tools.createOctokit()
  //const result = await octokit.repos.getContents({owner, repo, path, ref})  
}
*/

console.log(JSON.stringify(payload))
