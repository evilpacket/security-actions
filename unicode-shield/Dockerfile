FROM node:slim

# A bunch of `LABEL` fields for GitHub to index
LABEL "com.github.actions.name"="unicode-shield"
LABEL "com.github.actions.description"="Finds unicode variation selectors that can be used to hide code"
LABEL "com.github.actions.icon"="lock"
LABEL "com.github.actions.color"="gray-dark"
LABEL "repository"="https://github.com/evilpacket/security-actions"
LABEL "homepage"="https://github.com/evilpacket/security-actions"
LABEL "maintainer"="Adam Baldwin <adam@npmjs.com>"

# Copy over project files
COPY . .

# Install dependencies
RUN npm install

# This is what GitHub will run
ENTRYPOINT ["node", "/index.js"]
